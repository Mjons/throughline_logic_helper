# Agent Controls & AI-Powered Refinement

Features that give the user fine-grained control over how the AI generates and refines content. These sit between "do everything for me" (LFG mode) and "I'll write it all myself" (blank template).

---

## 1. Beat-by-Beat Agent Mode

Detailed in TEMPLATE_AUTHORING_PLAN.md. In short: instead of generating all beats in parallel, the agent walks through one beat at a time. The user adds context specific to each beat, reviews options, picks or edits, then moves to the next. A stepper UI with a progress bar.

---

## 2. "Make It Sharper" Button

A one-click refinement on any selected option. The agent rewrites the title and description to be more concise, more specific, or more provocative — without changing the core argument.

### How it works

The user selects an option card and clicks a "Sharpen" button (could be a knife icon or a lightning bolt). The agent receives:

- The current title and description
- The beat's name and prompt (so it knows the role this beat plays)
- The user's extracted facts (so it can add specificity)
- The current tone setting (see Tone Slider below)

The agent returns a rewritten version. The user sees a before/after and can accept or reject.

### Prompt logic

```
You are sharpening a single narrative beat option. Make it:
- More specific (use real numbers, names, dates from the user's context)
- More concise (cut filler words, tighten sentences)
- More compelling (stronger verbs, clearer stakes, sharper contrast)

Do NOT change the core argument or angle. Same idea, better execution.

Current title: "{title}"
Current description: "{description}"

User's facts for grounding:
{extracted facts}

Return a JSON object:
{
  "title": "sharpened title",
  "description": "sharpened description",
  "spokenLine": "sharpened spoken version"
}
```

### UI

- Button appears on hover on any option card (similar to the existing edit and regenerate buttons)
- While processing: the card gets a subtle shimmer animation
- When done: a diff-style highlight showing what changed (green for additions, strikethrough for removals) — or just a before/after toggle
- Accept/reject buttons to commit or discard the sharpened version

---

## 3. Tone Slider

A horizontal slider that controls the register and energy of generated content. Sits in the IngestPanel or side panel header. Affects all future generations and refinements.

### The Spectrum

```
Formal ──────────────────────────────── Casual
  │                                        │
  Corporate memo                           Tweet thread
  Board presentation                       Founder voice
  Regulatory filing                        Blog post
  "We are pleased to announce"             "We just shipped this"
```

### How the slider maps to generation

The slider has 5 positions. Each injects different instructions into the generation prompts:

| Position | Label              | Prompt injection                                                                                                                                                        |
| -------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | **Formal**         | "Write in formal, professional language. Use third person. Avoid contractions. Suitable for board presentations, regulatory filings, and institutional communications." |
| 2        | **Professional**   | "Write in polished professional language. Clear and direct but not stiff. Suitable for investor decks, enterprise sales, and partner proposals."                        |
| 3        | **Balanced**       | "Write in a natural, confident tone. Mix professional clarity with human warmth. Suitable for most pitches, keynotes, and business communications."                     |
| 4        | **Conversational** | "Write in a warm, direct, first-person voice. Use contractions. Short sentences. Suitable for founder pitches, blog posts, and community updates."                      |
| 5        | **Bold**           | "Write with energy and conviction. Punchy sentences. Strong opinions. Rhetorical questions. Suitable for cold outreach, tweet threads, and manifesto-style content."    |

### How it's stored

The tone setting lives on the template (not global), so different throughlines can have different tones:

```typescript
type Template = {
  // ...existing fields
  tone?: 1 | 2 | 3 | 4 | 5; // default 3 (Balanced)
};
```

### How it flows into generation

The tone prompt is appended to every `GENERATE_BEAT` and `SHARPEN_OPTION` system prompt:

```typescript
function tonePrompt(level: number): string {
  return TONE_INSTRUCTIONS[level] ?? TONE_INSTRUCTIONS[3];
}

// In generator.ts, when building the system prompt:
const systemPrompt = GENERATE_BEAT + "\n\n" + tonePrompt(template.tone ?? 3);
```

### UI

```
┌─────────────────────────────────┐
│ Tone                            │
│ Formal ───●─────────── Bold     │
│        Professional             │
└─────────────────────────────────┘
```

- A labeled slider with 5 snap positions
- The current label shows below the thumb ("Professional", "Balanced", etc.)
- Changing the tone does NOT regenerate existing content — it only affects future generations
- A "Regenerate all with new tone" button appears when the tone changes and the template already has generated content

---

## 4. Objection Pre-emption

For each beat, the agent anticipates the audience's likely objections and suggests how the next beat (or the current one) can address them.

### How it works

After a throughline is committed (or during beat-by-beat mode), the user clicks an "Objections" button on a beat. The agent receives:

- The current beat's selected option (title, description)
- The audience persona (investor, customer, etc.)
- The overall throughline context

The agent returns 2–3 likely objections with suggested responses.

### Prompt logic

```
You are anticipating audience objections to a narrative beat.

Audience: {persona}
Beat: "{beat_name}" — {beat_subtitle}
Selected option: "{option_title}"
Description: "{option_description}"

Overall throughline context:
{summary of all selected beats}

For this beat, generate 2-3 likely objections the audience will have.
For each objection:
- The objection itself (what they're thinking or will ask)
- Why they're thinking it (the underlying concern)
- A suggested response (1-2 sentences, specific and grounded)
- Which beat in the throughline should address it (could be this one or a later one)

Return a JSON array:
[
  {
    "objection": "That market size estimate seems aggressive",
    "underlying": "They've seen inflated TAM claims before and are pattern-matching",
    "response": "The $2.4B number comes from [specific source]. Our SAM is actually $340M — here's the bottom-up math.",
    "addressInBeat": "market"
  }
]
```

### UI

- An "Objections" button appears on each beat cluster (only on committed throughlines or during review)
- Clicking it opens a small panel below the beat header showing the objections
- Each objection is a card with the objection text, the suggested response, and a link to the beat where it should be addressed
- The user can dismiss objections or add them as notes to the relevant beat

### Why this is powerful

Most pitch tools help you write the pitch. None help you survive the Q&A. Objection pre-emption turns the throughline from "what I want to say" into "what I need to be ready for."

---

## 5. Confidence Indicators

Not a slider the user controls — this is the agent's assessment of each beat's strength, shown as a visual indicator on the canvas.

### How it works

After generation or after the user commits, the agent evaluates each selected option on three dimensions:

| Dimension        | What it measures                               | Low signal                          | High signal                                    |
| ---------------- | ---------------------------------------------- | ----------------------------------- | ---------------------------------------------- |
| **Specificity**  | Does this use real numbers, names, dates?      | "Our market is large"               | "TAM is $2.4B (Gartner 2025), growing 23% YoY" |
| **Grounding**    | Is this based on user facts or generic filler? | Vague claims, no citations          | Specific facts from the corpus                 |
| **Audience fit** | Does the language match the audience persona?  | Investor jargon in a customer pitch | Right register, right proof types              |

### UI

A small 3-dot indicator on each selected option card:

```
●●○  — 2 of 3 strong (specificity and grounding good, audience fit needs work)
●●●  — all three strong
●○○  — only one dimension is solid
```

Hovering shows which dimensions are strong and which need work:

```
✓ Specific — uses real ARR numbers
✓ Grounded — cites 3 user facts
✗ Audience — too technical for a general investor
```

This gives the user a fast visual scan of where their throughline is strong and where it needs sharpening — without reading every card carefully.

---

## 6. Context Injection Per Beat

When a beat's options feel generic, the user can inject additional context for just that beat — a "hint" that steers the next regeneration.

### How it works

Each beat cluster gets a small text input (collapsed by default, expandable) where the user can type context:

```
Beat 5: The Troll
Context hint: "The biggest obstacle is regulatory — FDA 510(k) clearance
takes 18 months and we don't have it yet. Don't focus on competitors."
```

When the user regenerates that beat, the context hint is appended to the generation prompt. It's saved on the template and persists across regenerations.

### Data model

```typescript
type Beat = {
  // ...existing fields
  contextHint?: string; // user-provided steering for this specific beat
};
```

### UI

- A small "Add context" link below the beat prompt text in the cluster header
- Clicking it expands a compact textarea
- The hint is saved immediately on blur
- When present, a small indicator shows on the beat header so the user knows which beats have hints

---

## Implementation Priority

| Feature                    | Impact                                   | Effort                                          | Depends on     |
| -------------------------- | ---------------------------------------- | ----------------------------------------------- | -------------- |
| Tone Slider                | High — affects all generation quality    | Small — prompt injection + 1 UI component       | Nothing        |
| Make It Sharper            | High — the most-used refinement action   | Small — 1 new prompt + button on existing cards | Nothing        |
| Context Injection Per Beat | Medium — fixes the "too generic" problem | Small — 1 textarea + data model field           | Nothing        |
| Confidence Indicators      | Medium — visual quality signal           | Medium — evaluation prompt + UI indicators      | Nothing        |
| Objection Pre-emption      | High — unique differentiator             | Medium — new prompt + UI panel                  | Persona system |
| Beat-by-Beat Mode          | Medium — alternative to LFG              | Large — stepper UI + modified pipeline          | Nothing        |

Tone Slider and Make It Sharper are the highest ROI — both are small to build and directly improve the quality of every throughline.
