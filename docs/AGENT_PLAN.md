# Agent Integration Plan

## The Idea

Turn Throughline from a manual beat-selection canvas into an AI-powered narrative architect. The user feeds it business context, the agent researches, picks the right framework, and generates tailored options for every beat — each tagged with where the content came from. The user stays in control (confirm-each-step mode) or lets it rip (LFG mode). All powered by the user's own API key.

---

## Core Concepts

### The Two Modes

**Guided mode** — the agent pauses at each stage and asks the user to confirm before continuing. Good for first-time users, high-stakes pitches, or when the user wants to steer.

```
Ingest → [confirm] → Research → [confirm] → Template Pick → [confirm] → Generate → [confirm per beat] → Done
```

**LFG mode** — the agent runs the full pipeline autonomously. The user kicks it off and comes back to a fully populated board. Good for rapid iteration, experienced users, or "give me a first draft I can edit."

```
Ingest → Research → Template Pick → Generate → Done (user reviews the whole board at once)
```

Both modes produce the same output: a populated Throughline template with source-tagged options. The difference is how many checkpoints exist along the way.

### Source Tags

Every generated option gets a `source` tag:

| Tag        | Meaning                                                                    | Visual Treatment              |
| ---------- | -------------------------------------------------------------------------- | ----------------------------- |
| `user`     | Derived from user-provided corpus (docs, pitch decks, notes, conversation) | Solid border, user icon       |
| `research` | Generated from agent's web research or model knowledge                     | Dashed border, search icon    |
| `hybrid`   | Combines user-provided facts with research-derived framing or context      | Half-solid border, blend icon |
| `manual`   | Written or edited by the user directly in the canvas                       | Default style (no tag)        |

When the user edits an AI-generated option, it keeps its original source tag but gains an `edited: true` flag so the provenance is preserved but the user's changes are respected.

---

## Architecture

### System Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    Throughline App (React)               │
│                                                         │
│  ┌──────────┐   ┌──────────┐   ┌─────────────────────┐ │
│  │  Ingest   │──▶│  Agent    │──▶│  Canvas (existing)  │ │
│  │  Panel    │   │  Runner   │   │  + source tags      │ │
│  └──────────┘   └────┬─────┘   └─────────────────────┘ │
│                      │                                   │
│                      ▼                                   │
│               ┌──────────────┐                          │
│               │  BYOK Key    │                          │
│               │  Manager     │                          │
│               └──────┬───────┘                          │
│                      │                                   │
└──────────────────────┼───────────────────────────────────┘
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
    ┌──────────┐ ┌──────────┐ ┌──────────┐
    │  Claude  │ │  Gemini  │ │  OpenAI  │
    │  API     │ │  API     │ │  API     │
    └──────────┘ └──────────┘ └──────────┘
```

### Key Principle: All AI calls happen client-side

No Throughline backend touches the user's API key or their business data. The React app calls the LLM APIs directly from the browser using the user's key. This is consistent with Panel Haus's local-first philosophy and means:

- Zero server cost for AI features
- User's confidential business info never leaves their machine (except to the LLM provider they chose)
- No rate limiting on our side — the user's own quota applies
- We can never be a bottleneck

---

## Pipeline Stages

### Stage 1: Ingest

The user provides business context. Multiple input methods, all feeding into a single `UserCorpus` object.

#### Input Methods

| Method                   | Description                                                | Priority        |
| ------------------------ | ---------------------------------------------------------- | --------------- |
| **Chat**                 | Conversational Q&A where the agent asks targeted questions | P0 — ship first |
| **Paste**                | User pastes text (pitch deck content, about page, notes)   | P0              |
| **File upload**          | PDF, DOCX, TXT, MD files parsed client-side                | P1              |
| **URL scrape**           | User provides their website URL, agent reads it            | P1              |
| **Previous throughline** | Import a committed throughline as context                  | P2              |

#### Chat-Based Ingestion (P0)

The agent runs a structured interview. Not open-ended — it has a checklist of dimensions to cover:

```
1. What do you do? (product/service, one sentence)
2. Who is your customer? (specific persona, not "everyone")
3. What problem do you solve? (their words, not marketing copy)
4. What's your unfair advantage? (why you, why now)
5. What's your evidence? (traction, customers, data)
6. Who are you pitching to? (audience for this throughline)
7. What's the context? (fundraise, sales call, keynote, blog post, etc.)
8. What should we NOT say? (permission boundaries, sensitive claims)
```

The agent adapts the interview based on answers — if the user says "we're a biotech raising Series A," the follow-up questions shift to clinical data, regulatory path, mechanism. If they say "I'm a solo creator launching a product," the questions shift to audience, distribution, traction signals.

#### UserCorpus Data Model

```typescript
type SourceDocument = {
  id: string;
  type: "chat" | "paste" | "file" | "url" | "throughline";
  content: string;
  title?: string; // filename, URL, or "Chat transcript"
  timestamp: string; // ISO date
};

type UserCorpus = {
  documents: SourceDocument[];
  extractedFacts: ExtractedFact[]; // structured extraction from documents
  audience: string; // who this throughline is for
  context: string; // what occasion (pitch, blog, keynote)
  permissionBoundaries: string[]; // things the agent must not claim
};

type ExtractedFact = {
  claim: string; // "ARR is $2.4M"
  sourceDocId: string; // which document it came from
  confidence: "verbatim" | "inferred" | "uncertain";
};
```

The agent extracts structured facts from raw documents using a single LLM call. This `ExtractedFact` array is what powers the `user` source tag downstream — if a generated option cites a fact, we can trace it back to the specific document.

---

### Stage 2: Research

The agent uses the user's context to research their market, competitors, and audience. This stage fills in what the user didn't provide and adds external framing.

#### Research Dimensions

| Dimension                    | What the Agent Looks For                                  | Method                       |
| ---------------------------- | --------------------------------------------------------- | ---------------------------- |
| **Market context**           | Industry trends, market size, recent shifts               | Web search + model knowledge |
| **Competitive landscape**    | Who else solves this problem, how, pricing                | Web search                   |
| **Audience psychology**      | What the target audience cares about, fears, values       | Model knowledge + web        |
| **Analogies and precedents** | Similar companies/stories the audience already knows      | Model knowledge              |
| **Urgency signals**          | Regulatory changes, market events, timing pressure        | Web search                   |
| **Proof patterns**           | What kind of evidence this audience finds most convincing | Model knowledge              |

#### Research Output

```typescript
type ResearchFinding = {
  id: string;
  dimension:
    | "market"
    | "competitive"
    | "audience"
    | "analogy"
    | "urgency"
    | "proof";
  summary: string; // one-paragraph finding
  detail: string; // full research note
  sources: string[]; // URLs or "model knowledge"
  relevance: string; // why this matters for the throughline
};

type ResearchPackage = {
  findings: ResearchFinding[];
  recommendedFrameworks: FrameworkRecommendation[]; // feeds into Stage 3
  timestamp: string;
};
```

#### Web Search Integration

The agent needs web access. Options (all BYOK):

1. **Brave Search API** — user provides Brave API key. Good free tier (1 req/sec, 2000/mo).
2. **Google Custom Search** — user provides Google API key. $5 per 1000 queries.
3. **No search (model knowledge only)** — fallback if user doesn't provide a search key. The agent uses its training knowledge. Less current, still useful.

The research stage is skippable. If the user says "I know my market, just use what I gave you," the agent skips to Stage 3 with an empty `ResearchPackage` and tags everything as `user` source.

---

### Stage 3: Template Selection

The agent recommends a framework based on the ingested context and research. This is where the 17 frameworks from `docs/template-frameworks/` get matched to the user's situation.

#### Selection Logic

The agent evaluates each framework against the user's `context` and `audience`:

```
Input:
  - UserCorpus.context ("Series A fundraise")
  - UserCorpus.audience ("VC investors")
  - Extracted facts (business stage, domain, traction level)
  - Research findings (market, competitive)

Decision matrix (examples):
  context=fundraise + audience=VC      → Sequoia Pitch Deck or SaaS Investor
  context=sales_call + audience=enterprise_buyer → MEDDPICC or Challenger Sale
  context=keynote + audience=general   → Hero's Journey or Pixar Story Spine
  context=blog_post + audience=developers → Kishōtenketsu or Freytag's Pyramid
  context=internal_memo + audience=leadership → Amazon 6-Pager
  context=product_launch + audience=customers → StoryBrand
  context=partnership + audience=pharma → Clinical Trial Narrative
```

The agent doesn't just pick a framework — it explains why:

```
"I recommend the Sequoia Pitch Deck framework for this throughline.

Why: You're raising a Series A from institutional VCs. This audience
expects this specific beat structure — Problem, Solution, Why Now,
Market, Product, Business Model, Traction, Team, Ask. Deviating
from it makes the pitch feel unfamiliar, which costs attention.

Alternative considered: SaaS Investor Narrative. This would also
work, but it emphasizes SaaS-specific metrics (NRR, CAC payback)
more heavily. If your metrics are strong, we could switch to this.
Let me know or I'll proceed with Sequoia."
```

In **Guided mode**, the user confirms or picks an alternative.
In **LFG mode**, the agent picks and moves on.

#### Custom Framework Generation

If no existing framework fits, the agent can generate a custom one:

```
"Your situation — a medical device company pitching to hospital
procurement committees — doesn't fit cleanly into any standard
framework. I'll generate a custom 6-beat structure based on how
procurement committees evaluate new devices:

1. Clinical Need
2. Evidence Base
3. Workflow Integration
4. Economic Case
5. Implementation Plan
6. Risk Mitigation

Want me to proceed with this, or adjust?"
```

The custom framework becomes a template the user can save and reuse.

---

### Stage 4: Generate

The agent populates the selected template with tailored content. This is the heaviest LLM usage stage.

#### Generation Strategy

For each beat in the template:

1. **Pull relevant facts** from `UserCorpus.extractedFacts` that map to this beat's theme
2. **Pull relevant research** from `ResearchPackage.findings` that map to this beat
3. **Generate 3–5 options** for the beat, varying in angle/approach
4. **Tag each option** with its source based on what went into it
5. **Generate a recommendation** for which option is strongest, with reasoning

#### Option Generation Prompt Structure

```
You are generating options for Beat {N}: "{beat_name}" — {beat_subtitle}.

The user's business context:
{relevant extracted facts}

Research findings for this beat:
{relevant research findings}

Permission boundaries (do NOT claim):
{permission boundaries}

Generate {3-5} distinct options. For each:
- Title: sharp, specific, under 15 words
- Description: 2-4 sentences, concrete and grounded in the user's actual situation
- Source classification:
  - "user" if the content is primarily derived from user-provided facts
  - "research" if the content is primarily derived from research or market knowledge
  - "hybrid" if it blends both
- Source citations: which specific extracted facts or research findings it draws from
- Spoken line: a stageable, spoken-aloud version (1-2 sentences)

Then recommend which option is strongest for the user's audience and context, with reasoning.
```

#### Parallel Generation

Beats are independent — the agent can generate all beats in parallel (separate LLM calls for each beat). This cuts generation time from sequential (~40 seconds for 8 beats) to parallel (~8 seconds for 8 beats).

#### Token Budget

Rough estimates per throughline generation (Claude Sonnet):

| Stage                 | Input Tokens | Output Tokens | Calls                |
| --------------------- | ------------ | ------------- | -------------------- |
| Ingest extraction     | ~2,000       | ~1,000        | 1                    |
| Research              | ~1,500       | ~2,000        | 3–5 (one per search) |
| Template selection    | ~3,000       | ~500          | 1                    |
| Generation (per beat) | ~2,000       | ~1,500        | 8 (parallel)         |
| **Total**             | **~22,000**  | **~15,000**   | **~15**              |

At Claude Sonnet pricing ($3/$15 per 1M tokens): **~$0.29 per throughline**. Cheap enough that regeneration is free.

---

### Stage 5: Review & Iterate

The generated throughline lands on the existing canvas with source tags visible. From here the user can:

1. **Accept the board** — start selecting options as normal
2. **Regenerate a beat** — "I don't like any of these options for The Troll" → agent regenerates just that beat
3. **Add context** — "Actually, we also have a partnership with X" → agent re-runs with updated corpus
4. **Switch framework** — "Try this as a StoryBrand instead" → agent regenerates with different template
5. **Edit manually** — user writes their own option, tagged as `manual`
6. **Regenerate with feedback** — "Make the River more about AI, less about regulation" → agent adjusts

Each regeneration is a targeted LLM call, not a full pipeline re-run.

---

## Data Model Changes

### Extended Types

```typescript
// New source tracking
type OptionSource = {
  type: "user" | "research" | "hybrid" | "manual";
  citations?: string[]; // IDs of ExtractedFacts or ResearchFindings used
  generatedBy?: string; // model that generated it (e.g., "claude-sonnet-4-6")
  generatedAt?: string; // ISO timestamp
  edited?: boolean; // user modified the AI-generated content
};

// Extended BeatOption (backwards-compatible)
type BeatOption = {
  id: string;
  title: string;
  description?: string;
  chosen?: boolean;
  spokenLine?: string;
  rejectedBecause?: string;
  permissionBoundary?: string;
  source?: OptionSource; // NEW — undefined for legacy/manual options
};

// Extended Template (backwards-compatible)
type Template = {
  id: string;
  name: string;
  description: string;
  beats: Beat[];
  sequencingNotes?: SequencingNotes;
  generatedFrom?: {
    // NEW — undefined for static templates
    corpusId: string;
    frameworkId: string;
    researchPackageId: string;
    timestamp: string;
  };
};
```

### Storage

The `UserCorpus` and `ResearchPackage` are stored in localStorage alongside the existing `throughline:state:v1` data. They're keyed per-template so each throughline can have its own corpus.

```
throughline:corpus:{templateId}  → UserCorpus
throughline:research:{templateId} → ResearchPackage
```

---

## UI Changes

### New: Ingest Panel

Replaces or extends the current side panel during the ingest phase. Two tabs:

1. **Chat** — conversational interface with the agent. Messages render in the side panel. User types, agent responds, facts get extracted in real-time.
2. **Documents** — file upload, URL input, paste box. Each document shows as a card with extracted fact count.

The ingest panel shows a "readiness" indicator:

```
Context coverage:
  ✓ Product/service described
  ✓ Customer persona identified
  ✓ Problem articulated
  ✗ Evidence/traction not provided
  ✗ Audience not specified
  ✓ Permission boundaries set

[Ready enough to proceed] [Add more context]
```

### New: Agent Progress Bar

During LFG mode, a horizontal progress bar at the top of the canvas shows:

```
[Ingesting ✓] → [Researching ●●○] → [Picking template...] → [Generating...] → [Done]
```

In guided mode, each stage ends with a confirmation card in the side panel.

### Modified: Beat Option Cards

Each card gains a small source badge in the top-right corner:

- `user` — small person icon, solid left-border accent
- `research` — small search/globe icon, dashed left-border accent
- `hybrid` — combined icon, dotted left-border accent
- `manual` — no badge (current behavior)

Hovering the badge shows a tooltip with citations: "Based on: your pitch deck (fact #3), Crunchbase market data"

### Modified: Side Panel

The existing throughline summary gains a source breakdown:

```
Sources:
  4 from your documents
  3 from research
  1 hybrid
  0 manually written
```

### New: BYOK Settings

A settings drawer (gear icon in top bar) with:

- **LLM Provider** dropdown: Claude / Gemini / OpenAI
- **API Key** input (stored in localStorage, never transmitted to us)
- **Model** dropdown: populated based on provider
- **Search Provider** dropdown: Brave / Google / None
- **Search API Key** input
- **Test Connection** button

---

## Implementation Phases

### Phase A: BYOK + Chat Ingest (Foundation)

Build the infrastructure. No generation yet — just the ability to connect an API key and have a conversation.

```
New files:
  src/lib/llm-client.ts        — provider-agnostic LLM wrapper (Claude/Gemini/OpenAI)
  src/lib/corpus.ts             — UserCorpus data model and storage
  src/components/ApiKeySettings.tsx
  src/components/IngestPanel.tsx
  src/components/ChatInterface.tsx

Modified files:
  src/types.ts                  — add OptionSource, extend BeatOption
  src/App.tsx                   — add settings drawer, ingest panel routing
  src/components/TopBar.tsx     — add settings gear icon
```

**Deliverable:** User can set their API key, open the ingest panel, chat with the agent about their business, and see extracted facts. No template generation yet.

### Phase B: Template Selection + Generation

The agent picks a framework and generates a populated throughline.

```
New files:
  src/lib/research.ts           — web search integration (Brave/Google)
  src/lib/template-selector.ts  — framework matching logic
  src/lib/generator.ts          — beat-by-beat option generation
  src/lib/prompts.ts            — all LLM prompt templates (centralized)
  src/components/AgentProgress.tsx

Modified files:
  src/components/IngestPanel.tsx — add "Generate Throughline" button
  src/App.tsx                    — wire generation pipeline, add progress bar
```

**Deliverable:** Full pipeline works. User ingests context → agent researches → picks template → generates options → populated board appears on canvas. LFG mode works end to end.

### Phase C: Source Tags + Visual Treatment

Source tags render on the canvas. Options show provenance.

```
New files:
  src/components/SourceBadge.tsx

Modified files:
  src/components/BeatOptionNode.tsx — add source badge, border treatment
  src/components/SidePanel.tsx      — add source breakdown
  src/App.css                       — source tag styles
```

**Deliverable:** Every generated option shows its source. Side panel shows source breakdown. Hover tooltips show citations.

### Phase D: Guided Mode + Iteration

Checkpoints, per-beat regeneration, framework switching.

```
New files:
  src/components/ConfirmationCard.tsx
  src/lib/regenerator.ts         — per-beat and per-option regeneration

Modified files:
  src/components/IngestPanel.tsx  — guided mode confirmation flow
  src/components/BeatOptionNode.tsx — "regenerate" context action
  src/components/BeatClusterNode.tsx — "regenerate beat" action
```

**Deliverable:** Guided mode with confirm-at-each-step. User can regenerate individual beats or switch frameworks without re-running the whole pipeline.

### Phase E: File Upload + URL Scrape

Extend ingest beyond chat and paste.

```
New files:
  src/lib/file-parser.ts         — PDF/DOCX/TXT/MD parsing (client-side)
  src/lib/url-scraper.ts         — fetch + extract readable content
  src/components/DocumentUpload.tsx

Modified files:
  src/components/IngestPanel.tsx  — add Documents tab
```

**Deliverable:** User can upload files and provide URLs as additional context. All parsed content feeds into the same UserCorpus.

---

## LLM Provider Abstraction

The app supports Claude, Gemini, and OpenAI through a single interface:

```typescript
interface LLMClient {
  chat(messages: Message[], options?: ChatOptions): Promise<string>;
  stream(messages: Message[], options?: ChatOptions): AsyncIterable<string>;
}

type ChatOptions = {
  model?: string;
  maxTokens?: number;
  temperature?: number;
  systemPrompt?: string;
};

// Factory
function createClient(
  provider: "claude" | "gemini" | "openai",
  apiKey: string,
): LLMClient;
```

Each provider adapter handles:

- API format differences (Messages API vs. Chat Completions vs. Gemini)
- Streaming format differences
- Error handling and rate limit responses
- Model name mapping

All calls go directly from the browser to the provider's API. CORS is handled by each provider (Claude and OpenAI support browser requests with appropriate headers; Gemini supports it natively).

---

## Prompt Architecture

All prompts live in a single `src/lib/prompts.ts` file. This makes them:

- Versionable (git tracks every change)
- Testable (unit tests can validate prompt structure)
- Swappable (different prompts for different providers if needed)

Key prompts:

| Prompt               | Purpose                                        | Approximate Length |
| -------------------- | ---------------------------------------------- | ------------------ |
| `INGEST_INTERVIEW`   | System prompt for the chat-based ingestion     | ~800 tokens        |
| `EXTRACT_FACTS`      | Extract structured facts from raw documents    | ~400 tokens        |
| `RESEARCH_DIMENSION` | Research a specific dimension (one per search) | ~300 tokens        |
| `SELECT_FRAMEWORK`   | Recommend a framework given corpus + research  | ~600 tokens        |
| `GENERATE_BEAT`      | Generate options for one beat                  | ~500 tokens        |
| `REGENERATE_OPTION`  | Regenerate a single option with feedback       | ~400 tokens        |

---

## Security & Privacy

| Concern                         | Mitigation                                                                                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| API keys in localStorage        | Encrypted with a user-set passphrase (optional). Cleared on logout. Never transmitted to any Throughline server.                                       |
| Business data in LLM calls      | Goes directly to the user's chosen provider. We never see it. The user accepts the provider's privacy policy, not ours.                                |
| Research results cached         | Stored in localStorage per-template. User can clear at any time. No server-side storage.                                                               |
| Prompt injection via web scrape | Scraped content is treated as untrusted data. It's placed in a clearly delimited `<user_document>` block in the prompt, never as a system instruction. |

---

## What to Build First

```
Phase A (BYOK + Chat)     — the foundation. Nothing works without this.
Phase B (Select + Generate) — the core value. This is the product.
Phase C (Source Tags)       — the trust layer. Users need to see where content came from.
Phase D (Guided Mode)       — the control layer. Power users want LFG; careful users want checkpoints.
Phase E (File Upload)       — convenience. Chat + paste covers 80% of use cases.
```

Phase A + B together are the MVP. A user can set their API key, chat about their business, and get a fully populated throughline on the canvas. Everything after that is refinement.
