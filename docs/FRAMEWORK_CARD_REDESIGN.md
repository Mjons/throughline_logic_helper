# Framework Card Redesign

The current picker cards are informative but dry. They read like a textbook index. The user is making a creative decision — "what shape should my story take?" — and the UI should help them feel the difference between frameworks, not just list metadata.

---

## Problems with Current Cards

1. **Every card looks the same** — name, description, beat flow, best-for. No visual differentiation.
2. **Descriptions are generic** — "Industry-standard VC pitch structure" doesn't help me choose.
3. **Beat flow is hard to parse** — a long italic string of arrows doesn't communicate rhythm or purpose.
4. **No emotional hook** — nothing tells me "this is the one for your situation."
5. **No sense of scale** — a 4-beat framework and a 12-beat framework feel identical in the UI.

---

## Proposed Redesign

### Each card gets three things the current version lacks:

**1. A tagline** — one sharp sentence that sells the framework's superpower.

**2. An emoji icon** — instant visual differentiation without loading images. One per framework, chosen for the framework's vibe.

**3. Beat count as a visual bar** — a row of dots or blocks showing the rhythm. 4 dots feels light; 12 dots feels epic. You see the weight before you read.

---

## Taglines and Icons

### Pitch & Sales

| Framework          | Icon | Tagline                                                             |
| ------------------ | ---- | ------------------------------------------------------------------- |
| Andy Raskin 8-Beat | `🏔️` | "The full arc. River to hoard, nothing left unsaid."                |
| Andy Raskin 5-Beat | `⚡` | "Five beats. Sixty seconds. The cold open that gets the meeting."   |
| Sequoia Pitch Deck | `🎯` | "The deck VCs already expect. Hit every slide they're looking for." |
| Challenger Sale    | `🔄` | "Teach them something they didn't know, then sell the solution."    |
| SPIN Selling       | `❓` | "Don't pitch. Ask the questions that make them sell themselves."    |

### Storytelling & Content

| Framework         | Icon | Tagline                                                                    |
| ----------------- | ---- | -------------------------------------------------------------------------- |
| StoryBrand        | `🦸` | "Your customer is the hero. You're the guide. Never the other way around." |
| Hero's Journey    | `🌍` | "The universal story. Twelve beats, every myth ever told."                 |
| Pixar Story Spine | `✨` | "Once upon a time... The six sentences that make any story land."          |
| Freytag's Pyramid | `📐` | "Rise, peak, fall. Classical dramatic structure, zero fluff."              |
| Kishōtenketsu     | `🎋` | "No villain, no conflict. Introduce, develop, twist, reconcile."           |

### Strategy & Decision

| Framework       | Icon | Tagline                                                                    |
| --------------- | ---- | -------------------------------------------------------------------------- |
| Amazon 6-Pager  | `📄` | "The memo that gets approved. Context, tenets, proposal, FAQ."             |
| Jobs-to-be-Done | `🔑` | "Why do customers hire your product? Map the motivation, not the feature." |

### Domain-Specific

| Framework     | Icon | Tagline                                                                 |
| ------------- | ---- | ----------------------------------------------------------------------- |
| SaaS Investor | `📈` | "ARR, NRR, CAC payback. The metrics-first narrative VCs actually read." |

---

## Card Layout Redesign

```
┌──────────────────────────────────────┐
│ 🏔️  Andy Raskin 8-Beat    ●●●●●●●● │
│                                      │
│ "The full arc. River to hoard,       │
│  nothing left unsaid."               │
│                                      │
│ Investor pitches · Keynotes · Decks  │
│                              [AI ★]  │
└──────────────────────────────────────┘
```

### Layout rules:

- **Row 1:** Icon + Name + beat dots (right-aligned)
- **Row 2:** Tagline in quotes, slightly larger, the main eye-catcher
- **Row 3:** Best-for as a compact tag line (dot-separated, muted color)
- **AI recommended badge** only on the one the agent picked (bottom-right corner)
- **No description paragraph** — the tagline replaces it
- **No beat flow arrows** — the dots communicate rhythm; names are visible on hover or after selection

### Beat dots

Filled circles, one per beat. Color matches the category:

- Pitch: accent gold `●●●●●●●●`
- Storytelling: a soft blue `●●●●●●`
- Strategy: a muted green `●●●●●●`
- Domain: a warm gray `●●●●●●●`

This gives instant visual weight — you can feel that the Hero's Journey (12 dots) is a bigger commitment than SPIN Selling (4 dots).

### Hover state

On hover, expand the card slightly and show the beat names in a compact list:

```
┌──────────────────────────────────────┐
│ 🏔️  Andy Raskin 8-Beat    ●●●●●●●● │
│                                      │
│ "The full arc. River to hoard,       │
│  nothing left unsaid."               │
│                                      │
│ River · Gap · Fork · Promised Land   │
│ Troll · Magic Wand · Tide · Hoard   │
│                                      │
│ Investor pitches · Keynotes · Decks  │
│                              [AI ★]  │
└──────────────────────────────────────┘
```

The beat names appear on hover so the card stays compact by default but you can inspect the full structure without clicking.

---

## Implementation

### Data changes

Add to each framework definition in `template-selector.ts`:

```typescript
type FrameworkDefinition = {
  // existing fields
  icon: string; // emoji
  tagline: string; // the killer line
};
```

### Component changes

Update `FrameworkPicker.tsx` / `FrameworkCard`:

- Replace description paragraph with tagline
- Replace beat flow arrow string with dot indicators
- Add icon before name
- Show beat names on hover only
- Category-colored dots

### CSS changes

- Beat dots as a flex row of small circles
- Category colors via CSS class
- Hover expansion animation for beat names
- Slightly larger card padding for breathing room
