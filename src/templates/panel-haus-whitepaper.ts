import type { Template } from "../types";

export const panelHausWhitepaperTemplate: Template = {
  id: "panel-haus-whitepaper",
  name: "Panel Haus — Whitepaper",
  description:
    "The whitepaper throughline. Hero = the writer-creator with a story they've never been able to finish. Promised Land = Write → Compose → Publish → Own. Panel Haus is the composition studio (not a generator) designed around story-first workflow, local-first privacy, and an on-chain ownership layer via Story Protocol.",
  beats: [
    {
      id: "river",
      name: "The River",
      subtitle: "Name the undeniable shift",
      prompt:
        "What big change in the world is sweeping us forward — right now, unavoidably?",
      options: [
        {
          id: "river-ai-quality-threshold",
          title: "AI image generation crossed the editorial-quality threshold",
          description:
            "In the last ~18 months, character consistency, style control, and pacing-aware generation became real. Text-to-image went from curiosity to a reliable production input. The tech bottleneck for visual storytelling collapsed.",
          chosen: true,
          spokenLine:
            "AI image generation crossed the editorial-quality threshold. The tech bottleneck for visual storytelling is gone. A door just opened that was closed for a century.",
        },
        {
          id: "river-ip-ownership-now-possible",
          title:
            "On-chain IP infrastructure finally exists for independent creators",
          description:
            "Story Protocol and IPFS make tamper-resistant proof of creation, configurable license terms, and programmable royalties available to a single creator — not just studios and publishing houses.",
          chosen: false,
          rejectedBecause:
            "Real shift, but narrower than the image-gen threshold. Lives as wall #4 in the magic wand and anchors Section 6.",
        },
        {
          id: "river-local-first-trust-shift",
          title: "The trust shift toward local-first creative tools",
          description:
            "After a wave of closed AI platforms shut down and took creator work with them, creators and IP holders are learning to demand local-first storage and ownership-first architecture.",
          chosen: false,
          rejectedBecause:
            "Supporting evidence inside the magic wand (the anti-Sora architecture). Too narrow as the river.",
        },
        {
          id: "river-indie-distribution-open",
          title: "Direct-to-audience distribution is solved",
          description:
            "Webtoon, Substack, Patreon, Discord — indie creators reach readers without a gatekeeper. The distribution wall fell years ago; production is the only wall left standing.",
          chosen: false,
          rejectedBecause:
            "True and useful context, but the image-gen threshold is the harder, more recent shift and therefore the sharper river.",
        },
      ],
    },
    {
      id: "gap",
      name: "The Gap",
      subtitle: "What the shift didn't finish",
      prompt:
        "With the river moving, what is still conspicuously unsolved — the thing the shift stopped short of delivering?",
      options: [
        {
          id: "gap-generators-stop-at-image",
          title:
            "Generators stop at the image. Composition, completion, and ownership are still missing.",
          description:
            "A comic is a sequence of paced panels, word balloons, page layouts, consistent characters, and a finished exportable file — plus a provable chain of ownership. Every AI tool in the market stops at 'here's one image.' Three layers are still unsolved: composition (pacing + layout + bubbles), completion (a real finished file), and ownership (provable creation). The tech arrived. The studio didn't.",
          chosen: true,
          spokenLine:
            "The generation tech arrived. The studio didn't. Every AI tool in the market stops at a single image — not a paced, paneled, publishable chapter you actually own. Composition, completion, and ownership are all still unsolved.",
        },
        {
          id: "gap-composition-missing",
          title:
            "Composition — pacing, panels, and balloons — is the missing layer",
          description:
            "Text-to-image solved one frame. A comic is many frames in intentional order, with dialogue placed with purpose and page layouts that control how the reader moves through the story. No shipping AI tool composes.",
          chosen: false,
          rejectedBecause:
            "One face of the gap. Folds into the composite chosen option.",
        },
        {
          id: "gap-completion-missing",
          title: "Completion — a real finished file — is the missing outcome",
          description:
            "Mood boards and concept art are not comics. Print-ready PDFs and high-resolution exports are the artifacts creators need. Existing AI tools don't deliver them.",
          chosen: false,
          rejectedBecause:
            "One face of the gap. Folds into the composite chosen option.",
        },
        {
          id: "gap-ownership-missing",
          title: "Ownership — provable creation — is the missing right",
          description:
            "No timestamp. No chain of origin. No licensing layer designed for independent comic creators. IP built on closed AI platforms exists in a fragile state — easy to copy, hard to defend, gone when the platform shuts down.",
          chosen: false,
          rejectedBecause:
            "One face of the gap. Anchors Section 6 of the whitepaper and folds into the composite chosen option.",
        },
        {
          id: "gap-unfinished-comics-pile",
          title:
            "The result: more unfinished comics in notebooks than have ever been published",
          description:
            "Millions of scripts, characters, worlds fully built in documents. The ideas are good. The barrier between 'I have a story' and 'I have a comic' never actually fell — AI just moved it one step to the right.",
          chosen: false,
          rejectedBecause:
            "Emotional payoff of the gap, but better as the troll framing and as the opening of Section 1. Not the analytic spine of the gap beat.",
        },
      ],
    },
    {
      id: "fork",
      name: "The Fork",
      subtitle: "Winners & losers at the crossroads",
      prompt: "Who adapts to the new river — and who gets left behind?",
      options: [
        {
          id: "fork-generators-vs-studios",
          title:
            "Generators stop at 'here's an image.' Studios finish the comic.",
          description:
            "Every existing AI tool in the market generates. None of them compose. The winners are the platforms that complete the full Write → Compose → Publish → Own workflow. The losers are the generators bolting on a comic skin and hoping creators figure out the rest.",
          chosen: true,
          spokenLine:
            "The winners finish the work. Generators stop at the image and leave the writer stranded. Panel Haus is a composition studio — the full workflow, not the first step.",
        },
        {
          id: "fork-closed-vs-local-first",
          title: "Closed cloud platforms vs. local-first tools",
          description:
            "Cloud-only platforms create a fragile ownership state — when they fail, creator work disappears. Local-first tools that store everything in the browser (IndexedDB) survive platform failures by design.",
          chosen: false,
          rejectedBecause:
            "Folds into the magic wand as the anti-Sora architecture. Not sharp enough as the fork on its own.",
        },
        {
          id: "fork-gatekeeper-vs-democratized",
          title:
            "Gatekeepers weaponize AI for existing creators; democratized tools open the gate",
          description:
            "Incumbents can bolt AI onto existing pipelines to make approved creators faster — or new platforms can remove the gate entirely and let the millions of unfinished stories get made.",
          chosen: false,
          rejectedBecause:
            "Strong framing but lives in the investor throughline. For the whitepaper, the generator-vs-studio cut is more honest to what Panel Haus actually is.",
        },
      ],
    },
    {
      id: "promised-land",
      name: "The Promised Land",
      subtitle: "Paint the destination",
      prompt: "What is the desirable, worth-the-journey end state?",
      options: [
        {
          id: "pl-write-compose-publish-own",
          title: "Write → Compose → Publish → Own",
          description:
            "The full journey made possible for anyone with a story. Write your story (AI-assisted or not). Compose your pages with professional layouts, word balloons, and a real 5-layer canvas. Export print-ready PDFs or high-res PNGs. Register the work as programmable IP on-chain. Finished comics — not concepts, not mood boards.",
          chosen: true,
          spokenLine:
            "Write. Compose. Publish. Own. The full journey — possible for anyone with a story to tell. Finished, exportable, shareable comics. Not concepts. Not mood boards. Finished comics.",
        },
        {
          id: "pl-finished-comic-in-an-afternoon",
          title: "A finished comic chapter in an afternoon",
          description:
            "A writer with a 20-year-old story sits down, uses the layouts, adds bubbles, exports a print-ready PDF, and registers the IP — all in a single session. The production barrier that has killed most comic ideas, gone.",
          chosen: false,
          rejectedBecause:
            "Concrete and compelling, but the four-verb arc (Write → Compose → Publish → Own) is the whitepaper's actual promise. Kept as a supporting illustration inside the chosen framing.",
        },
        {
          id: "pl-finish-the-story-you-already-have",
          title: "The story you already have gets finished",
          description:
            "Your story already exists in your head or in a document. The Promised Land is not a new creative muse — it's the last mile that turns what you already have into something other people can actually read.",
          chosen: false,
          rejectedBecause:
            "Right spirit, but less concrete than the four-verb arc. Lives in the Vision section (Section 12) as the closing line.",
        },
      ],
    },
    {
      id: "troll",
      name: "The Troll",
      subtitle: "The obstacle on the bridge",
      prompt: "What blocks people from reaching the Promised Land today?",
      options: [
        {
          id: "troll-composite-wall-stop-own-nothing",
          title:
            "Composite troll — the Writer's Wall, tools that stop too early, and creators own nothing",
          description:
            "Three faces. (1) The writer's wall: years of drawing or $100–200 per page has killed most comic ideas before they started. (2) AI tools generate but don't compose — no pacing, no layouts, no bubbles, no export. (3) Creators own nothing — no proof of creation, no chain of ownership, work in a fragile state. Every on-ramp dead-ends before a finished comic.",
          chosen: true,
          spokenLine:
            "Three walls. The writer can't draw and can't afford an artist. The AI tools generate images but don't compose comics. And whatever does get made sits in a fragile state with no proof of ownership. Every on-ramp dead-ends before a finished chapter.",
        },
        {
          id: "troll-writers-wall-alone",
          title: "The Writer's Wall — skill and cost",
          description:
            "Years of drawing practice, thousands of dollars for an artist, or settling for a medium that didn't fit the vision. Most stories never make it past the notebook.",
          chosen: false,
          rejectedBecause:
            "One face of a three-faced troll. Folded into the composite so the whitepaper speaks to all three audiences (writers, AI-tool users, IP-building creators).",
        },
        {
          id: "troll-ai-stops-too-early",
          title: "AI tools stop too early",
          description:
            "Existing AI tools generate one image at a time. They don't pace panels, place balloons, compose pages, maintain consistency, or export finished files. They generate. They don't compose.",
          chosen: false,
          rejectedBecause:
            "Sharp and true, but one face of the composite troll. Lives inside the chosen framing.",
        },
        {
          id: "troll-creators-own-nothing",
          title: "Creators own nothing",
          description:
            "Worlds and characters built in fragile form, easy to copy and hard to defend. No timestamp, no chain of ownership, no licensing layer designed for independent comic creators.",
          chosen: false,
          rejectedBecause:
            "One face of the composite troll. Lives inside the chosen framing and anchors Section 6.",
        },
      ],
    },
    {
      id: "magic-wand",
      name: "The Magic Wand",
      subtitle: "Your gift to the hero",
      prompt: "What do YOU bring that lets the hero slay the troll?",
      options: [
        {
          id: "wand-composition-studio",
          title:
            "A composition studio — not a generator — with five walls of defensibility",
          description:
            "(1) Full Write → Compose → Publish → Own workflow, browser-based. (2) Full Page Composer with professional layouts across three page sizes plus custom dimensions. (3) 5-layer Konva rendering system (Background, Panels, Images, Text, Stickers) with seven bubble types × nine tail positions and full text formatting. (4) Local-first architecture — all data in IndexedDB, never on our servers. (5) Story Protocol on-chain IP registration with configurable license tiers and royalties, plus BYOK support for Gemini, ChatGPT, and Claude.",
          chosen: true,
          spokenLine:
            "Panel Haus is a composition studio. AI handles the pixels if you want it to. You handle the story. A 5-layer canvas, seven bubble types, professional layouts, print-ready export, local-first storage, and on-chain ownership — the full studio, not a single-image generator with a comic skin.",
        },
        {
          id: "wand-full-page-composer",
          title: "Full Page Composer — where the story takes physical shape",
          description:
            "Professional layouts across three page sizes (Square 700×700, Portrait 490×700, Landscape 700×560) plus custom dimensions. Every panel can be resized and repositioned. The composition layer that every generator is missing.",
          chosen: false,
          rejectedBecause:
            "One wall. Folded into the composite wand as wall #2.",
        },
        {
          id: "wand-story-protocol-ownership",
          title: "Story Protocol — programmable IP for independent creators",
          description:
            "Tamper-resistant proof of creation, IPFS archival via Pinata, two license types (non-commercial free, commercial with configurable royalties 0.001–1,000 IP tokens and 0–100% revenue share), dual-network support (Aeneid testnet + Homer mainnet). Web3 features are opt-in — the default experience is fully Web2.",
          chosen: false,
          rejectedBecause:
            "Strong standalone, but lives as wall #4 inside the composite wand. Anchors Section 6 of the whitepaper.",
        },
        {
          id: "wand-local-first-byok",
          title: "Local-first architecture + bring-your-own-key",
          description:
            "All comics, images, and project data stored in the browser's IndexedDB — never on Panel Haus servers. BYOK for Gemini, ChatGPT, and Claude bypasses platform rate limits entirely. If we disappear tomorrow, your work stays on your machine.",
          chosen: false,
          rejectedBecause:
            "Credibility piece, lives as wall #5 and resurfaces in Section 9 (Technical Architecture).",
        },
        {
          id: "wand-writer-first-workflow",
          title: "Writer-first workflow",
          description:
            "Built for writers, worldbuilders, families, and creators with disabilities — not for AI power users, not for engineers, not for artists. The tool serves the story, not the other way around.",
          chosen: false,
          rejectedBecause:
            "The philosophy behind the wand, not the wand itself. Surfaces in Section 5 (Who It's For) and closes Section 11 (Competitive Positioning).",
        },
      ],
    },
    {
      id: "tide",
      name: "The Tide",
      subtitle: "What's coming that forces the hero to cross the bridge now",
      prompt:
        "What is closing in that makes waiting more dangerous than acting?",
      options: [
        {
          id: "tide-ip-copyright-shifting",
          title:
            "AI copyright law is evolving jurisdiction by jurisdiction — ownership must be provable now",
          description:
            "Courts and governments are reshaping who owns AI-generated content. Creators who build without a timestamped, verifiable chain of ownership risk losing the IP they spent years building. The platforms with ownership rails today are the ones their work will be defensible on tomorrow.",
        },
        {
          id: "tide-closed-platforms-keep-shutting-down",
          title:
            "Closed AI platforms keep shutting down and taking work with them",
          description:
            "The economics of closed, server-side AI platforms don't survive their compute costs. Every shutdown erases creator work that had no local-first backup and no on-chain provenance. The trust shift toward local-first, ownership-first tools is one-directional.",
        },
        {
          id: "tide-generator-race-stalls-at-image",
          title: "The generator race is stalling at the single-image layer",
          description:
            "Competitors are racing on style count, speed, and consistency — all inside the single-image frame. None of them are building the composition layer. The window to own the studio layer, not the generator layer, is open and narrow.",
        },
        {
          id: "tide-audience-waiting",
          title:
            "Audiences are waiting and the creator supply is the bottleneck",
          description:
            "Webtoon, manga, and sequential storytelling demand outpaces supply. The limit is finished comics, not readers. Every month the production wall stays up is a month of stories that never reach the audience already waiting for them.",
        },
      ],
    },
    {
      id: "hoard",
      name: "The Hoard",
      subtitle: "Proof the treasure is real",
      prompt: "What evidence convinces the hero that this story is true?",
      options: [
        {
          id: "hoard-core-studio-shipped",
          title: "The core studio is shipped and working today",
          description:
            "Layouts across three page sizes plus custom dimensions. 5-layer Konva canvas. Seven bubble types × nine tail positions with full text formatting including custom fonts. Print-ready multi-page PDF export via jsPDF on a separate offscreen Konva stage. High-resolution PNG per page. Auto-save every 30 seconds to IndexedDB. Full undo/redo. Multi-page project management with bulk operations. Not roadmap — shipped.",
          chosen: true,
          spokenLine:
            "The core studio is live today. Professional layouts, seven bubble types, a 5-layer canvas, print-ready PDF export, auto-save, multi-page management, and a local-first architecture that means the creator owns their work by default. Shipped, not planned.",
        },
        {
          id: "hoard-story-protocol-live",
          title:
            "Story Protocol IP registration is live on mainnet and testnet",
          description:
            "Tamper-resistant proof of creation with on-chain timestamp. Full comic archival to IPFS (cover image + complete comic backup via Pinata). Two license types (non-commercial free, commercial configurable). Royalty structure: 0.001–1,000 IP tokens and 0–100% revenue share. Dual-network support: Aeneid testnet for free testing, Homer mainnet for production. Viewable on Story Protocol Explorer.",
          chosen: false,
          rejectedBecause:
            "Strongest unique proof point but narrow for readers who haven't yet accepted that on-chain ownership matters. Lives as Section 6 and as a seeded deep-dive.",
        },
        {
          id: "hoard-pricing-live",
          title: "Tiered pricing with Stripe integration live",
          description:
            "Free tier (core studio + limited AI credits). Creator Lite at $19.99/mo or $179.99/yr (400 credits, Gemini Pro, 2× export). Creator Plus at $49.99/mo or $479.99/yr (1,000 credits, Story Protocol access). One-time $50 option with 500 credits for creators who prefer a single purchase. Credit booster packs at 75/150/300 for any tier. BYOK bypasses credit system entirely.",
          chosen: false,
          rejectedBecause:
            "Proof of business-model execution, not the headline hoard. Lives in Section 7.",
        },
        {
          id: "hoard-stack-hardened",
          title: "Production stack hardened",
          description:
            "React 18 + Vite. Konva.js with a strict 5-layer rendering system. Zustand + Immer for immutable state. IndexedDB local-first storage. Vercel serverless backend. Upstash Redis for rate limiting and session management. Stripe payments. Google Gemini API. Story Protocol + IPFS (Pinata). Rate limiting and security hardened through Q1 2026.",
          chosen: false,
          rejectedBecause:
            "Supporting evidence for technical credibility. Lives in Section 9, not as the headline hoard.",
        },
        {
          id: "hoard-roadmap-delivered",
          title: "Q1 2026 roadmap delivered",
          description:
            "Core studio functional ✓. Story Protocol IP registration live ✓. Free crash course published ✓. Tiered Stripe pricing live ✓. Rate limiting and security hardened ✓. Every shipped item was on the plan; every planned item in Q1 is shipped.",
          chosen: false,
          rejectedBecause:
            "Delivery-discipline evidence. Best as a one-line trust signal in Section 10, not as the headline hoard.",
        },
      ],
    },
  ],
  sequencingNotes: {
    originStoryInsertion:
      "Open the whitepaper with Section 0 (Executive Summary) and Section 1 (Introduction) — the origin is embedded in the problem statement, not a separate founder story. The writer-with-an-unfinished-notebook is the reader's own origin story; the whitepaper mirrors it back.",
    demoPlacement:
      "Section 4 (Core Features) functions as the textual demo. Pair with a short linked walkthrough when distributed digitally. The Competitive Positioning table in Section 11 is the one-glance demo for skim readers.",
    seededQAndA: [
      "What happens if Panel Haus shuts down? (triggers local-first + IndexedDB + BYOK + Story Protocol — the anti-Sora answer in Section 9.)",
      "Do I need a wallet or crypto knowledge? (triggers Section 8 — email OTP is the default path; wallet and NFT gating are opt-in.)",
      "Is the AI required? (triggers the 'AI is optional' framing in Section 4 — upload your own art, hire illustrators, or mix methods.)",
      "How is this different from an AI image generator? (triggers Section 11 — the moat is the composition workflow, not the AI.)",
      "Who actually owns the work? (triggers Section 6 — local-first by default, on-chain registration opt-in via Story Protocol.)",
      "What about creators with disabilities? (triggers Section 5 — accessibility is a core consideration, not an afterthought.)",
    ],
  },
};
