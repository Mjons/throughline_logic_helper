# Audience Personas

When building a throughline, the audience changes everything. The same company, the same product, the same facts — told to an investor vs. a customer vs. a regulator — produces a completely different narrative. The framework might stay the same (you can use Raskin 8-Beat for all of them), but the beat content, the language register, the proof points, and what you emphasize vs. bury all shift based on who's listening.

This document defines the built-in audience personas. When the user starts building a throughline, they pick a persona. The persona shapes:

1. **Framework recommendation** — investors expect Sequoia/Raskin; marketers expect StoryBrand; internal stakeholders expect Amazon 6-Pager
2. **Beat generation prompts** — the system prompt tells the LLM who the audience is and what they care about
3. **Language and register** — investors hear "ARR" and "NRR"; customers hear "save time" and "get results"; regulators hear "compliance" and "risk mitigation"
4. **Proof selection** — investors want metrics; customers want testimonials; partners want case studies; regulators want certifications
5. **Permission boundaries** — some claims are fine for customers but dangerous for investors (forward-looking statements), and vice versa

---

## Core Personas

### 1. Investor

**Who:** VCs, angels, family offices, institutional LPs evaluating a capital allocation decision.

**What they care about:**

- Market size and timing (why now)
- Traction and growth trajectory (prove it works)
- Team and founder-market fit (why you)
- Unit economics and path to profitability (how the math works)
- Competitive moat and defensibility (why you win)
- The ask and use of funds (what you need)

**Language register:** Precise, metrics-heavy, forward-looking but grounded. "ARR," "NRR," "CAC payback," "burn multiple," "TAM/SAM/SOM." No jargon from your domain unless the investor specializes in it.

**Proof they trust:** Revenue numbers, retention curves, customer logos, growth rate, comparable exits.

**What to avoid:** Vague market claims without sources. Vanity metrics (downloads, page views) without engagement context. Forward-looking revenue projections presented as facts.

**Natural frameworks:** Sequoia Pitch Deck, Raskin 8-Beat, SaaS Investor Narrative

---

### 2. Customer / End User

**Who:** The person who will use your product. Could be a consumer, a knowledge worker, a creator, a developer — depends on the product.

**What they care about:**

- Their problem and whether you understand it (empathy before solution)
- How your product solves it specifically (not abstractly)
- How hard it is to switch / get started (friction and risk)
- Social proof from people like them (testimonials, case studies)
- Price relative to value (not absolute price)

**Language register:** Conversational, outcome-oriented. "Save 3 hours a week," not "increase operational efficiency." Use their words for their problem, not your internal terminology.

**Proof they trust:** Testimonials from peers, before/after stories, free trial or demo, reviews, community size.

**What to avoid:** Investor metrics (ARR, funding raised). Internal architecture details unless the audience is technical. Feature lists without outcome framing.

**Natural frameworks:** StoryBrand, Pixar Story Spine, JTBD

---

### 3. Enterprise Buyer

**Who:** VP/Director/C-suite at a company evaluating a purchase for their team or organization. Multi-stakeholder, committee-driven decisions. Budgets, procurement, legal.

**What they care about:**

- Quantified business impact (ROI, cost savings, risk reduction)
- Integration with existing systems and workflows
- Security, compliance, and vendor risk
- Implementation timeline and change management
- References from similar companies (logo proof)

**Language register:** Professional, ROI-focused. "Reduce manual processing by 40%," "SOC 2 Type II certified," "integrates with your existing Salesforce instance." Speak to the business outcome, not the feature.

**Proof they trust:** Case studies with named companies and quantified results. Security certifications. Analyst mentions (Gartner, Forrester). Named references they can call.

**What to avoid:** Consumer-style excitement. Startup jargon. Mentioning how small your team is. Anything that signals risk (early stage, limited track record) without mitigation.

**Natural frameworks:** Challenger Sale, MEDDPICC, SPIN Selling

---

### 4. Partner / Strategic Ally

**Who:** Another company considering a partnership, integration, co-marketing, distribution deal, or strategic investment. They're evaluating mutual value, not buying your product.

**What they care about:**

- What's in it for their customers (how the partnership creates value they can't create alone)
- Revenue or distribution opportunity (the business case for the partnership)
- Brand alignment and risk (will this make us look good or bad)
- Technical integration effort (how hard is this to ship)
- Your traction as proof you're a viable partner (they don't want to bet on vaporware)

**Language register:** Collaborative, mutual-value. "Together we can," "your customers get," "the integration enables." Never one-sided — always frame what they gain.

**Proof they trust:** Existing partnerships and integrations. Shared customers. Technical readiness (API docs, SDK, sandbox). Your traction as de-risking evidence.

**What to avoid:** Making it sound like you need them more than they need you. Overselling the partnership before the technical viability is clear. Revealing competitive intelligence about their rivals.

**Natural frameworks:** Raskin 5-Beat, Amazon 6-Pager, Challenger Sale

---

### 5. Internal Stakeholder

**Who:** Your own team, board, leadership, or cross-functional partners. People inside the organization who need to align on strategy, approve a project, or understand a decision.

**What they care about:**

- Context and why this matters now (not a cold pitch — they already know the company)
- The specific proposal and what it requires (resources, timeline, trade-offs)
- Alternatives considered and why this is the best path
- Risks and mitigations (they're accountable too)
- How success will be measured

**Language register:** Direct, honest, assumes shared context. Use internal terminology freely. Be forthright about trade-offs — these people will hold you accountable.

**Proof they trust:** Internal data, prior art within the company, team input, competitive intelligence, customer feedback.

**What to avoid:** Marketing language. Overselling internally (it destroys credibility). Hiding risks or alternatives — someone in the room already thought of them.

**Natural frameworks:** Amazon 6-Pager, OODA Loop, Freytag's Pyramid (for retrospectives)

---

### 6. Creative / Creator

**Who:** Writers, artists, musicians, designers, indie developers, content creators — people who make things and evaluate tools through the lens of creative expression and ownership.

**What they care about:**

- Does this help me make the thing I want to make? (creative enablement)
- Do I own what I create? (IP, portability, lock-in)
- Does the output feel like mine, not like everyone else's? (identity and uniqueness)
- Can I start for free / cheaply? (low barrier to entry)
- What does the community look like? (who else uses this)

**Language register:** Warm, identity-affirming, anti-corporate. "Your story," "your voice," "finish what you started." Never "content creation workflow optimization."

**Proof they trust:** Other creators' work made with the tool. The tool itself (let them try it). Creator testimonials. Community galleries. Transparency about AI/ownership.

**What to avoid:** Enterprise language. Metrics and business jargon. Making the tool sound like a replacement for their creativity rather than an enabler of it. Dismissing concerns about AI and ownership.

**Natural frameworks:** Raskin 8-Beat (creator variant), Hero's Journey, Pixar Story Spine

---

### 7. Government / Regulator

**Who:** Government agencies, regulatory bodies, public sector procurement, policy makers. Compliance-driven, risk-averse, accountable to the public.

**What they care about:**

- Compliance with specific regulations and standards (name them)
- Data sovereignty, privacy, and security (where does data live, who has access)
- Accessibility and equity (does this serve all constituents)
- Proven track record in similar public sector deployments
- Total cost of ownership and budget predictability
- Vendor stability and longevity (they can't switch vendors easily)

**Language register:** Formal, regulation-aware. Reference specific statutes, standards, and frameworks (NIST, FedRAMP, WCAG, HIPAA, GDPR). Precision matters more than persuasion.

**Proof they trust:** Certifications and audit reports. Existing government contracts. Compliance documentation. Third-party security assessments. References from other agencies.

**What to avoid:** Startup language ("move fast and break things"). Vague security claims. Anything that implies data leaves the jurisdiction. Consumer-oriented framing. Hype.

**Natural frameworks:** Amazon 6-Pager, Clinical Trial Narrative (for health regulators), Freytag's Pyramid

---

### 8. Press / Media

**Who:** Journalists, bloggers, podcast hosts, analysts writing about your space. They're not buying — they're deciding whether your story is worth telling to their audience.

**What they care about:**

- Is this a story their audience will care about? (newsworthiness)
- What's the hook? (what's surprising, contrarian, or timely)
- Can they verify the claims? (sources, data, on-the-record quotes)
- What's the human angle? (founder story, customer transformation, cultural moment)
- Is this exclusive or embargoed? (access drives interest)

**Language register:** Punchy, quotable, narrative-driven. Give them the headline they'd write. Give them the quote they'd pull. Make it easy to re-tell.

**Proof they trust:** Verifiable data points. Named sources willing to go on the record. Exclusive access. Visual assets (screenshots, demos, photos).

**What to avoid:** Marketing copy (they'll see through it instantly). Overstating claims. Asking them to cover you as a favor. Sending a press release as your only pitch.

**Natural frameworks:** Raskin 5-Beat, Pixar Story Spine, Kishotenketsu

---

## How Personas Integrate into the Flow

### Step 1: Persona selection

After the user provides business context (or even before), they pick a persona. This can be:

- A dropdown/grid in the IngestPanel
- Part of the chat interview ("Who is this throughline for?")
- Auto-suggested by the agent based on the `context` dimension in coverage

### Step 2: Persona shapes framework recommendation

The `SELECT_FRAMEWORK` prompt receives the persona and weights frameworks accordingly. An investor persona steers toward Sequoia/Raskin; an enterprise buyer steers toward Challenger/MEDDPICC.

### Step 3: Persona shapes beat generation

The `GENERATE_BEAT` prompt receives the persona's language register, proof preferences, and avoidance list. The generated options speak the audience's language and cite the kind of evidence they trust.

### Step 4: Persona visible in the UI

The current persona shows as a tag in the TopBar or IngestPanel header. The side panel shows "Audience: Investor" so the user always knows who they're writing for. Switching personas on the same corpus regenerates the throughline with different framing — same facts, different narrative.

### Data Model

```typescript
type PersonaId =
  | "investor"
  | "customer"
  | "enterprise-buyer"
  | "partner"
  | "internal"
  | "creative"
  | "government"
  | "press";

type Persona = {
  id: PersonaId;
  name: string;
  shortName: string; // for badges: "Investor", "Customer", etc.
  description: string; // one-line description
  careAbout: string[]; // bullet points for prompt context
  languageRegister: string; // description of tone/vocabulary
  proofPreferences: string; // what evidence they trust
  avoid: string[]; // things NOT to say to this audience
  suggestedFrameworks: string[]; // framework IDs to weight higher
};
```

The persona object gets injected into the generation prompts, not stored in the template itself — the same template can be re-targeted to a different persona without regenerating the structure.
