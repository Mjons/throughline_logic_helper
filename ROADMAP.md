# Throughline — Shipping Roadmap

## Where we are today

A polished local-only canvas for building narrative throughlines using the Raskin 8-beat framework. Six hardcoded templates, localStorage persistence, inline editing, markdown/JSON export, commit/unlock flow, and a multi-template overview grid. Works great on a single machine in a workshop setting — but nothing beyond that.

---

## Phase 1 — Stability & polish (ship to friends)

The goal: someone can use this unsupervised without hitting a wall.

- [ ] **Error boundary** — wrap the app so a React crash shows a recovery screen, not a white page
- [ ] **Undo/redo on edits** — even a simple history stack (ctrl+z) prevents "I broke my text and can't get it back"
- [ ] **Input validation** — trim whitespace, cap title/description length, prevent empty saves
- [ ] **Autosave indicator** — small "Saved" badge so users trust their work persists
- [ ] **Beforeunload warning** — prompt if there are uncommitted selections and the tab is closing
- [ ] **Keyboard shortcuts** — commit (ctrl+enter), reset (ctrl+shift+r), copy MD (ctrl+shift+c)
- [ ] **Print / PDF stylesheet** — a committed throughline should print cleanly for meetings
- [ ] **Fix edge visibility** — throughline arrows disappear at certain zoom levels; needs marker scaling

---

## Phase 2 — Template authoring (ship as a tool)

The goal: users create their own templates without touching code.

- [ ] **Template editor UI** — form-based CRUD for beats, options, sequencing notes
- [ ] **Custom beat count** — not everyone uses 8; allow 3–12 beats
- [ ] **Drag-to-reorder** — reorder beats and options within a beat
- [ ] **Duplicate / fork template** — start from an existing template and modify
- [ ] **Template import/export** — JSON file upload/download so templates are portable
- [ ] **Delete template** — with confirmation, only for user-created templates
- [ ] **Sequencing notes UI** — surface `originStoryInsertion`, `demoPlacement`, `seededQAndA` in the side panel instead of hiding them in data

---

## Phase 3 — Routing & shareability (ship as a product)

The goal: you can send someone a link and they land on the right thing.

- [ ] **Client-side routing** (React Router or TanStack Router)
  - `/` → overview
  - `/t/:templateId` → canvas for that template
  - `/t/:templateId/summary` → read-only committed throughline
- [ ] **Deep link to template** — shareable URL opens a specific template
- [ ] **Read-only share view** — committed throughline rendered as a clean page (no editing controls)
- [ ] **OG meta tags** — link previews show template name + description when pasted in Slack/Twitter
- [ ] **Export to HTML** — self-contained single-page export of a committed throughline

---

## Phase 4 — Backend & accounts (ship as a service)

The goal: work persists across devices, teams can collaborate.

- [ ] **Auth** — email magic link or OAuth (Google) via Supabase/Firebase
- [ ] **Cloud persistence** — migrate from localStorage to server; keep localStorage as offline cache
- [ ] **Conflict resolution** — last-write-wins with visible "updated elsewhere" toast
- [ ] **Workspace / team model** — invite by email, shared template library
- [ ] **Commenting** — per-beat or per-option comments for async feedback
- [ ] **Activity log** — who changed what, when (lightweight, not full version history)
- [ ] **API** — REST or tRPC endpoints for templates and throughlines (enables integrations)

---

## Phase 5 — Mobile & responsive (ship everywhere)

The goal: usable on a tablet in a pitch meeting.

- [ ] **Responsive side panel** — collapsible or bottom-sheet on narrow screens
- [ ] **Touch interactions** — tap to select, long-press to edit, pinch to zoom
- [ ] **Mobile-first overview** — single-column card layout
- [ ] **Offline-first** — service worker + IndexedDB so the app works without network
- [ ] **PWA manifest** — installable on home screen

---

## Phase 6 — Quality & ops (ship with confidence)

The goal: you sleep well after a deploy.

- [ ] **Unit tests** — state logic (selections, overrides merging, markdown export)
- [ ] **Component tests** — React Testing Library for SidePanel, TopBar, BeatOptionNode
- [ ] **E2E tests** — Playwright: load template → select options → commit → export → verify
- [ ] **CI pipeline** — GitHub Actions: typecheck, lint, test, build on every PR
- [ ] **ESLint + Prettier** — enforce consistent style
- [ ] **Error tracking** — Sentry for production crashes
- [ ] **Analytics** — lightweight (Plausible or PostHog) to understand usage patterns
- [ ] **Bundle analysis** — track bundle size; lazy-load templates
- [ ] **Accessibility audit** — axe-core in CI, WCAG AA contrast checks

---

## Phase 7 — Power features (ship to power users)

The goal: this becomes the tool teams reach for every time they build a narrative.

- [ ] **Version history** — snapshot throughlines, compare versions side-by-side
- [ ] **Branching** — fork a throughline to explore alternate paths without losing the original
- [ ] **AI assist** — generate option descriptions or suggest beats from a one-line pitch
- [ ] **Presentation mode** — full-screen walk-through of committed beats, one at a time
- [ ] **Embed widget** — iframe-able read-only throughline for docs/wikis
- [ ] **Webhooks / Zapier** — trigger actions when a throughline is committed
- [ ] **Multi-language** — i18n for the UI (templates stay in their authored language)
- [ ] **Template marketplace** — community-shared templates with upvotes

---

## What to build first

If the question is "what's the shortest path to something I can put in front of real users":

1. **Phase 1** (stability) — 2-3 days of work, removes embarrassing failure modes
2. **Phase 2** (template editor) — the single biggest unlock; right now every new pitch requires a code change
3. **Phase 3** (routing) — lets you share links, which is how products spread

Phases 4–7 are "build when you have users pulling for it" territory. Don't build auth before you know people want to come back.
