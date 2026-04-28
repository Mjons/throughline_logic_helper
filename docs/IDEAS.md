# Ideas & Considerations

Things worth thinking about. Not prioritized — just a running list of directions the product could go. Some are small polish, some are new surfaces, some are business model ideas.

---

## Canvas & Editing

- **Drag to reorder options within a beat** — right now options are fixed in the order they were created/generated. Users should be able to rank them by dragging.
- **Drag to reorder beats** — swap column positions to experiment with narrative flow without recreating the template.
- **Card color coding** — let users tag cards with colors (red = risky claim, green = strong, yellow = needs work) for visual triage during editing.
- **Collapse/expand beats** — on boards with many options per beat, let users collapse a column to just the header + selected option. Reduces visual noise on large boards.
- **Split view** — show two throughlines side by side on the same canvas. Compare the investor version and customer version of the same story.
- **Minimap labels** — the minimap currently shows colored rectangles. Adding beat numbers or names would make navigation on large boards faster.
- **Undo/redo** — global undo stack for all canvas actions (selection changes, edits, card adds/deletes). Currently there's no way to undo.
- **Autosave indicator** — a small "Saved" badge in the corner so users trust their work persists.
- **Keyboard shortcuts** — Ctrl+Enter to commit, Ctrl+Z to undo, arrow keys to navigate between beats, Enter to select the highlighted option.

## Export & Output

- **Export to Google Slides / PowerPoint** — map each beat to a slide with the selected option as the content. The most-requested feature in pitch tools.
- **Export to Notion** — output as a Notion page with toggle blocks per beat.
- **PDF export** — a clean, printable throughline document with beat headers, selected options, and descriptions. Print-ready for meetings.
- **Shareable link** — generate a read-only URL for a committed throughline. No account needed — just a hash-based link with the data encoded or stored in a lightweight backend.
- **Embed widget** — an iframe-able read-only throughline for wikis, docs, or websites.
- **Copy as script** — export the throughline as a spoken script using the `spokenLine` field on each option. Ready to rehearse.
- **Export to teleprompter format** — large text, one beat at a time, scrolling. For founders who want to practice delivering the pitch.

## Agent & AI

- **Beat-by-beat agent mode** — instead of generating all beats at once, work through one at a time with the user adding context per beat (detailed in TEMPLATE_AUTHORING_PLAN.md).
- **Persona-aware generation** — inject the audience persona (investor, customer, press, etc.) into the generation prompts so options are tuned to the listener (detailed in PERSONAS.md).
- **"Make it sharper" button** — one-click refinement on a selected option. The agent rewrites the title and description to be more concise, more specific, or more provocative.
- **Competitor analysis mode** — paste a competitor's pitch deck or website, and the agent generates a throughline that positions you against them.
- **Objection pre-emption** — for each beat, the agent generates likely objections the audience will have and suggests how the next beat can address them.
- **Tone slider** — adjust the generation tone between formal/corporate and casual/founder-voice. Different audiences expect different registers.
- **Multi-language generation** — generate throughlines in languages other than English. The framework structure is universal; only the content changes.
- **"Why this option?" explainer** — click a generated option and see the agent's reasoning for why it chose this angle, what facts it drew from, and why it ranked it where it did.

## Templates & Frameworks

- **Template marketplace / community gallery** — users share their templates. Upvote, fork, remix. Throughline becomes a platform, not just a tool.
- **Import templates from JSON/YAML** — power users define frameworks in structured files and import them.
- **Framework variants** — Raskin 8-Beat for investors vs. Raskin 8-Beat for customers. Same structure, different default prompts per beat. One framework, multiple audience presets.
- **Template versioning** — save snapshots of a throughline at different stages. Compare version 1 (rough draft) with version 3 (polished).
- **Template tagging** — tag templates with industry, audience, stage, etc. Filter and search in the picker.

## Collaboration

- **Real-time multiplayer** — two people editing the same throughline simultaneously. Cursor presence, live selection sync. Big engineering lift but high value for team pitch prep.
- **Commenting** — leave comments on specific options or beats. "This River option is stronger but we need permission from legal before using the $18M number."
- **Assign beats to team members** — "Sarah owns the Troll beat, Marcus owns the Hoard." Track who's responsible for each section.
- **Review mode** — share a throughline for feedback. Reviewers can upvote/downvote options and leave notes without editing.
- **Activity log** — who changed what, when. Lightweight version history without full git-style diffing.

## Presentation & Practice

- **Presentation mode** — full-screen walkthrough of committed beats, one at a time, with smooth transitions. Use it to actually deliver the pitch.
- **Timer** — a countdown timer per beat for pitch practice. "You have 90 seconds for the River. Go."
- **Recording** — record yourself delivering the throughline. Play back and compare against the written version.
- **Audience Q&A prep** — the `seededQAndA` field already exists on some templates. Surface it as a flash-card style prep tool: "If they ask X, here's how to answer."
- **Pitch scoring** — the agent evaluates your committed throughline and gives feedback: "Your Troll is too abstract — name a specific competitor or obstacle."

## Data & Analytics

- **Usage analytics** — which frameworks are most used, which beats get the most regenerations, where users spend the most time editing. Inform product decisions.
- **A/B throughlines** — create two versions of the same pitch and track which one performs better (requires integration with meeting outcomes or feedback).
- **Completion funnel** — track how many users go from "create template" to "commit throughline" to "export." Find the drop-off points.

## Infrastructure & Platform

- **Accounts and cloud sync** — the big one. Move from localStorage to a backend. Multi-device, backup, sharing. Supabase or Firebase.
- **Offline-first with sync** — keep localStorage as the primary store, sync to cloud when online. Service worker for full offline support.
- **PWA** — installable on mobile/tablet. Useful for pitch prep on the go.
- **API** — REST or tRPC endpoints for templates and throughlines. Enables integrations with CRMs, slide tools, and workflow automation.
- **Webhooks** — trigger actions when a throughline is committed (push to Slack, update a Notion database, generate slides).
- **Custom domains** — let teams host their throughline instance at `pitch.company.com`.

## Business Model Ideas

- **Free tier** — unlimited manual templates, 3 AI generations per month. Enough to see the value.
- **Pro tier ($19/mo)** — unlimited AI generation, all frameworks, export to slides/PDF, shareable links.
- **Team tier ($49/mo per seat)** — collaboration, commenting, review mode, shared template library, activity log.
- **Enterprise** — SSO, custom frameworks, API access, dedicated support, on-prem option for regulated industries.
- **One-time credits** — buy 10 AI generations for $5. No subscription. Good for occasional users.
- **Template marketplace revenue share** — if users sell premium templates, take a 20% cut.
- **Consulting upsell** — "Your throughline scored 6/10. Want a narrative strategist to review it? Book a session." Partner with pitch coaches.

## Wild Ideas

- **Voice input** — describe your business by talking, not typing. The agent transcribes and extracts facts from speech.
- **Meeting bot integration** — record a real pitch meeting, transcribe it, and the agent identifies which beats landed and which fell flat.
- **LinkedIn / Crunchbase auto-research** — paste a company URL, the agent pulls public data and pre-fills the corpus.
- **Pitch deck reverse-engineering** — upload a competitor's pitch deck PDF, the agent maps each slide to a beat and shows you their throughline structure.
- **Story graph visualization** — instead of a linear left-to-right canvas, show the throughline as a narrative tension graph (Y axis = emotional intensity, X axis = time). See the arc shape.
- **AI audience simulator** — the agent role-plays as your audience persona and asks tough questions after you commit a throughline. Practice before the real meeting.
