# Deploying Throughline to Vercel

## Prerequisites

- A Vercel account (free tier works)
- The GitHub repo: `https://github.com/Mjons/throughline_logic_helper`

## Steps

### 1. Connect to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select `Mjons/throughline_logic_helper`
4. Vercel auto-detects it as a Vite project

### 2. Build Settings

Vercel should auto-detect these, but verify:

| Setting          | Value           |
| ---------------- | --------------- |
| Framework Preset | Vite            |
| Build Command    | `npm run build` |
| Output Directory | `dist`          |
| Install Command  | `npm install`   |
| Node.js Version  | 18.x or 20.x    |

No environment variables needed — the app is fully client-side. API keys are entered by the user and stored in their browser.

### 3. Deploy

Click "Deploy." Vercel builds and gives you a URL like `throughline-logic-helper.vercel.app`.

### 4. Custom Domain (Optional)

In Vercel project settings → Domains → add your custom domain (e.g., `throughline.app`).

## Fresh Slate for New Users

The app uses `localStorage` for all state. A new user on a fresh browser sees:

- The default static templates (Panel Haus, Delphica, Raskin variants)
- No API key configured (gear icon shows as unconfigured)
- No user-created templates
- No selections, no commits, no corpus data

No server-side state exists — every user's data lives entirely in their own browser.

### What Existing Users See After Redeployment

Redeploying does NOT clear localStorage. Existing users keep their:

- Saved templates and selections
- API key configuration
- Chat history and extracted facts
- User-created and generated throughlines

To force a fresh slate for everyone, you'd need to change the localStorage keys (e.g., bump `throughline:state:v1` to `v2`). Don't do this unless you want to wipe everyone's work.

## What's NOT in the Deployment

- No backend — zero server functions, zero API routes
- No database — all data in browser localStorage
- No authentication — no accounts, no login
- No server-side API calls — the user's browser calls Claude/Gemini/OpenAI directly using their own key
- No analytics — add Plausible or PostHog script tag to `index.html` if you want it

## Production Considerations

### CORS

The app makes direct browser requests to:

- `api.anthropic.com` (Claude) — requires `anthropic-dangerous-direct-browser-access` header, already set
- `api.openai.com` (OpenAI) — supports browser CORS
- `generativelanguage.googleapis.com` (Gemini) — supports browser CORS with API key in URL

All three work from Vercel-hosted domains without a proxy.

### Bundle Size

Current build is ~555KB JS (174KB gzipped). The chunk size warning from Vite is cosmetic — the app loads fine. To reduce it later:

- Code-split the template definitions (they're ~200KB of static data)
- Lazy-load the agent panel and teleprompter

### Caching

Vite's build output uses content-hashed filenames (`index-BqwA0f74.js`). Vercel serves these with immutable cache headers by default. The `index.html` is not cached. This means deployments are instant — users get the new version on next page load.

## Import / Export Feature

Once deployed, users will want to share throughlines across browsers and with teammates. This needs an import/export feature.

### Export

The user clicks "Export" and gets a `.throughline.json` file containing:

- Template metadata (name, title, audience, tone, description)
- All beats with all options (including source tags)
- Current selections and committed state
- Overrides (any inline edits)
- Corpus data (extracted facts, chat history) — optional, toggleable

### Import

The user clicks "Import" and selects a `.throughline.json` file. The app:

1. Validates the JSON structure
2. Creates a new user template from the data
3. Restores selections, committed state, and overrides
4. Switches to the imported template on the canvas
5. Optionally restores corpus data if included

### Data Format

```json
{
  "version": 1,
  "exportedAt": "2026-04-29T...",
  "template": {
    "id": "...",
    "name": "Sequoia Pitch Deck",
    "title": "My Startup Pitch",
    "audience": "Investor",
    "tone": 3,
    "description": "...",
    "beats": [
      {
        "id": "problem",
        "name": "Problem",
        "subtitle": "...",
        "prompt": "...",
        "contextHint": "...",
        "options": [
          {
            "id": "...",
            "title": "...",
            "description": "...",
            "spokenLine": "...",
            "source": { "type": "user", "citations": [...] }
          }
        ]
      }
    ]
  },
  "selections": { "problem": "option-id", ... },
  "committed": true,
  "overrides": { ... },
  "corpus": null
}
```

### Implementation

Two new functions in a `src/lib/import-export.ts` file:

```typescript
function exportThroughline(
  template,
  selections,
  committed,
  overrides,
  corpus?,
): Blob;
function importThroughline(file: File): Promise<ImportedData>;
```

UI: two buttons in the SidePanel action row — "Export" (already exists as JSON export, upgrade it) and "Import" (new, opens file picker).

The existing "Export JSON" button currently exports a simplified format (just beat names and choices). The new export should be a full round-trip format that can be imported back. Keep the old "Copy MD" and "Copy All" as lightweight sharing options.
