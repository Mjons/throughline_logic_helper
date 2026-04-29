import type { Template } from "../types";

export const raskinCreatorsTemplate: Template = {
  id: "panel-haus-raskin-creators",
  name: "Panel Haus — Raskin / Creators",
  description:
    "The creator throughline. Hero = the Steve — writer, worldbuilder, family member, creator with a story they've never been able to finish. Promised Land = the notebook story becomes a real, owned, publishable comic. Not competing with artists. Competing with nothing getting made.",
  beats: [
    {
      id: "river",
      name: "The River",
      subtitle: "Name the undeniable shift",
      prompt: "What changed that makes this possible for you right now?",
      options: [
        {
          id: "river-drawing-barrier-gone",
          title: "The drawing barrier disappeared",
          description:
            "AI can now produce consistent, paced, publishable-quality comic art. The thing that stopped you for 20 years — the decade of drawing practice, the thousand-hour tool learning curve, the $200–$500 per page artist bill — is gone. The production pipeline was designed for a world where visual content required specialized skills. That world just ended.",
        },
        {
          id: "river-audiences-are-starving",
          title: "Audiences are starving for new stories",
          description:
            "Webtoon has 90M readers and a content gap. Manga outsells all of American publishing combined. The limit is creators, not demand. Your story has an audience waiting — the barrier was never the readers, it was the production pipeline.",
        },
        {
          id: "river-indie-went-mainstream",
          title: "Indie creators broke through without publishers",
          description:
            "Substack, Webtoon, Patreon — direct-to-audience works now. You don't need a gatekeeper. The distribution problem is solved. The only remaining wall is finishing the work.",
        },
        {
          id: "river-own-your-ip-now-possible",
          title:
            "On-chain IP infrastructure finally gives independent creators what only studios had",
          description:
            "Story Protocol gives you timestamp-backed proof of creation, configurable license terms, and automatic royalty splits on derivatives. The ownership layer that used to require a lawyer and a publishing contract now requires a button click.",
        },
        {
          id: "river-story-first-tools-arrived",
          title:
            "Tools built for writers, not for AI power users, finally exist",
          description:
            "For two years, every AI tool asked you to learn prompting. The new generation asks you to tell a story — the tool handles the prompting. The creative barrier collapsed.",
        },
      ],
    },
    {
      id: "gap",
      name: "The Gap",
      subtitle: "What the shift didn't finish",
      prompt:
        "The barriers fell. What is still conspicuously stopping you from shipping the chapter?",
      options: [
        {
          id: "gap-ai-gives-images-not-chapters",
          title: "AI gave you images. It didn't give you a chapter.",
          description:
            "The drawing barrier fell and the distribution barrier fell — but the tools still stop at a single image. Pacing, panels, word balloons, consistent characters, a finished exportable file — none of that is solved by a prompt box. You can generate for hours and still not have a comic.",
        },
        {
          id: "gap-composition-missing",
          title:
            "The composition layer — where a comic actually becomes a comic — is missing",
          description:
            "Text-to-image solved one frame. A comic is many frames in intentional order, with dialogue placed with purpose and layouts that control how a reader moves through the story. No shipping AI tool composes.",
        },
        {
          id: "gap-no-ownership-by-default",
          title: "The work you do make on generic AI tools isn't really yours",
          description:
            "Closed platforms, opaque terms, server-side storage, sudden shutdowns. You can spend months building a world and lose the rights, the backups, and the audience overnight. Ownership should be the default, not a premium feature.",
        },
        {
          id: "gap-slop-signal",
          title: "Generic AI output is readable as generic AI output",
          description:
            "Readers recognize slop instantly — faces shifting panel to panel, no pacing, no identity. Even if you finish, the output signals 'I used a generator.' The gap isn't just 'can I make it' — it's 'can I make it look like mine.'",
        },
      ],
    },
    {
      id: "fork",
      name: "The Fork",
      subtitle: "Winners & losers at the crossroads",
      prompt:
        "Who ships a chapter this year — and who still has the story stuck in their head in five?",
      options: [
        {
          id: "fork-ship-now",
          title:
            "Creators who ship now build an audience while the field is open",
          description:
            "The first wave of AI-native comic creators is defining the genre. Being early compounds — readers, mailing list, Patreon, reputation. The creators who publish in 2026 will have three years of back-catalog by the time the bar rises.",
        },
        {
          id: "fork-stuck-waiting",
          title: "Creators waiting for 'the right tool' stay stuck forever",
          description:
            "Clip Studio, Photoshop, Procreate — thousand-hour learning curves you'll never finish on weekends. Hiring an artist — $4K–$10K for a 20-page comic and six months of waiting. Every year of waiting is a year the story stays in the notebook.",
        },
        {
          id: "fork-trapped-in-slop-tools",
          title: "Creators stuck in slop tools get associated with slop",
          description:
            "Single-image generators give you images, not comics. Dashtoon, AI Comic Factory, generic midjourney chains — your portfolio looks like everyone else's because the tool doesn't compose anything. Readers scroll past.",
        },
        {
          id: "fork-platforms-own-or-you-own",
          title:
            "Creators on closed platforms lose everything when policy changes",
          description:
            "Sora shut down and every creation on it vanished. Webtoon can change its terms tomorrow. Creators who build on local-first tools with on-chain ownership keep their work and their IP no matter what the platform does. The platform risk is real and it's priced in now.",
        },
      ],
    },
    {
      id: "promised-land",
      name: "The Promised Land",
      subtitle: "Paint the destination",
      prompt: "What does your life look like when the bottleneck disappears?",
      options: [
        {
          id: "pl-published-in-an-afternoon",
          title: "Your first chapter, published in an afternoon",
          description:
            "Not a storyboard. Not a slideshow of AI images. A real, paced, paneled comic chapter — word balloons placed with purpose, consistent characters, a print-ready PDF — that your friends read tonight and your audience reads tomorrow.",
        },
        {
          id: "pl-you-become-a-comic-creator",
          title: "You become a comic creator, not someone who wants to be one",
          description:
            "The identity flips. You have a body of work. Your community knows you for it. You stop saying 'I'm working on a comic' and start saying 'I publish comics.' That shift is worth more than any feature in the tool.",
        },
        {
          id: "pl-own-your-world",
          title: "Your world belongs to you — provably, forever",
          description:
            "Characters, canon, visual identity — yours. Registered on-chain via Story Protocol with tamper-resistant timestamp and configurable license terms. Stored locally in your own browser. If the platform disappears tomorrow, you still have everything. That's the difference between making things on a platform and making things that are yours.",
        },
        {
          id: "pl-notebook-to-real",
          title: "The story that lived in your notebook for 20 years is real",
          description:
            "The script, the characters, the world — the thing you've been describing to friends since college — is a finished, shareable, printable comic that exists in the world. It's not an idea anymore. It's a thing.",
        },
        {
          id: "pl-finish-what-you-start",
          title: "You become the kind of creator who finishes",
          description:
            "The tool is built around completion. Auto-save every 30 seconds. Undo/redo. Multi-page project management. Export that works on day one. You stop starting things — you start finishing them.",
        },
      ],
    },
    {
      id: "troll",
      name: "The Troll",
      subtitle: "The obstacle on the bridge",
      prompt:
        "What's been blocking you from shipping the story you already have?",
      options: [
        {
          id: "troll-cant-draw",
          title: "You can't draw — and learning takes years you don't have",
          description:
            "The story is there. The craft barrier isn't storytelling, it's the thousand hours of drawing practice and the tool-chain learning curve on top of it. Clip Studio, Photoshop, Procreate — each one its own career.",
        },
        {
          id: "troll-artists-expensive-and-slow",
          title: "Artists are $200–$500 a page and six-week revision cycles",
          description:
            "A 20-page comic is $4K–$10K and three to six months of waiting. One chapter is a mortgage payment and half a year. Most stories never survive the wait.",
        },
        {
          id: "troll-ai-tools-own-your-work",
          title: "AI tools own your work the moment you make it",
          description:
            "Sora shut down and every creation on it vanished. Most AI platforms reserve broad rights to user content, store everything on their servers, and can change terms or shut down at any time. If the platform dies, your story dies with it.",
        },
        {
          id: "troll-slop-output",
          title: "AI image tools produce slop, not comics",
          description:
            "Characters change faces panel to panel. No pacing. No word balloons. No layouts. No story logic. You can't ship it — and if you do, readers recognize it instantly. The output looks like AI slop because the tools aren't built for comics.",
        },
        {
          id: "troll-ai-generates-doesnt-compose",
          title:
            "AI tools generate — they don't compose. The work stops before the chapter is done.",
          description:
            "A comic is a sequence of panels with intentional pacing, word balloons placed with purpose, layouts that control reading flow, consistency across scenes, and a finished file. No existing AI tool completes that workflow. They generate. They don't compose. The last 80% — the actual comic — is where every creator gives up.",
        },
      ],
    },
    {
      id: "magic-wand",
      name: "The Magic Wand",
      subtitle: "Your gift to the hero",
      prompt:
        "What does Panel Haus hand you that lets you actually finish a chapter?",
      options: [
        {
          id: "wand-studio-not-generator",
          title:
            "A studio built for stories, not prompts — Write → Compose → Publish → Own",
          description:
            "The four-stage workflow: write your script (or use the story tools), compose your pages on a real 5-layer canvas with professional layouts, publish print-ready PDFs and high-res PNGs, own your IP on-chain via Story Protocol. You focus on the story. The tool handles everything else.",
        },
        {
          id: "wand-character-lock",
          title: "Character lock — your hero stays your hero",
          description:
            "LoRA + World Vault keeps faces, costumes, and worlds consistent panel to panel. No more 'why does she look different on page 4.' Your characters have identities that survive across an entire chapter — and across the next one, and the next.",
        },
        {
          id: "wand-layout-taxonomy",
          title: "Pacing built in — 7-category layout taxonomy",
          description:
            "Breath, Weight, Reveal, Drive, Surge, Rupture, Fracture. Real comic pacing without needing to learn it first. The layouts are designed for action, dialogue, and quiet moments across three page sizes. You pick the scene type; the tool delivers the pacing.",
        },
        {
          id: "wand-bubble-system",
          title: "Seven word balloon types with full dialogue formatting",
          description:
            "Speech, thought, caption, shout, whisper, jagged, no-bubble — each with 9 tail positions. Full text formatting: custom fonts, size, color, bold, italic, shadows, outlines, letter spacing. Professional lettering without a letterer.",
        },
        {
          id: "wand-ownership",
          title: "You own what you make — provably, locally, forever",
          description:
            "Local-first architecture: comics, images, and project data stored in your browser's IndexedDB — never on our servers. On-chain IP registration via Story Protocol with configurable license terms and royalty splits. Bring-your-own-key support for Gemini, ChatGPT, and Claude. If Panel Haus shuts down tomorrow, your work goes with you. That's not a feature. That's the core architecture.",
        },
        {
          id: "wand-optional-ai",
          title: "AI is optional — you can skip it entirely",
          description:
            "Upload your own art. Use photographs. Work with an illustrator and use Panel Haus purely as the composition and export layer. The tool is a real comic studio whether you use AI or not. The AI is one feature — not the product.",
        },
        {
          id: "wand-byok-freedom",
          title:
            "Bring your own API key — no rate limits, your costs, your control",
          description:
            "Plug in your own Gemini, ChatGPT, or Claude key. Bypass platform rate limits entirely. Unlimited generation at the provider's own rates. You control your costs and your throughput — no artificial scarcity.",
        },
      ],
    },
    {
      id: "tide",
      name: "The Tide",
      subtitle: "What's coming that forces the creator to start now",
      prompt:
        "What is closing in that makes waiting more costly than starting?",
      options: [
        {
          id: "tide-first-wave-defines-genre",
          title:
            "The first wave of AI-native comic creators is defining the genre right now",
          description:
            "The creators who publish in 2026 build back-catalog, audience, and reputation before the bar rises. In three years the space is crowded — in 18 months it's still open. Every month you wait is a month the people who started earlier compound audience on you.",
        },
        {
          id: "tide-platform-risk-growing",
          title:
            "The closed platforms are consolidating — open paths are narrowing",
          description:
            "Sora shut down and took everything with it. Webtoon and Marvel are wiring AI into closed pipelines to keep the same gatekeepers. The window to build on tools that actually give you ownership is open right now and narrows every month.",
        },
        {
          id: "tide-notebook-age",
          title:
            "The stories you've had the longest are the ones most at risk of never getting made",
          description:
            "Every year the notebook story ages is a year your voice changes, the world moves on, and the original energy fades. The 20-year-old script gets harder to finish the longer it sits. The barrier is finally gone — waiting means the story that was supposed to be yours becomes a thing you used to think about.",
        },
        {
          id: "tide-gatekeepers-locking-in",
          title: "Gatekeepers are wiring AI into closed pipelines — fast",
          description:
            "Webtoon, Marvel, and DC are adding AI to existing pipelines right now — not to open access, but to let their already-approved creators ship faster. The independent path is open today. In 18 months you will either be on it or you won't.",
        },
        {
          id: "tide-tool-fluency-gap-widening",
          title:
            "The gap between tool-fluent and tool-absent creators is widening every month",
          description:
            "Creators who learn the new studio workflow in 2026 ship at 10× the volume of creators still drafting in traditional tools. Every quarter the gap compounds. Starting now is the difference between being fluent when the category matures and being behind it.",
        },
      ],
    },
    {
      id: "hoard",
      name: "The Hoard",
      subtitle: "Proof the treasure is real",
      prompt: "What shows you this actually works?",
      options: [
        {
          id: "hoard-live-demo",
          title: "60-second live demo — prompt to finished page",
          description:
            "See a real chapter built in the time it takes to pitch it. Not a slideshow. An actual composed page with panels, characters, and word balloons, exported print-ready.",
        },
        {
          id: "hoard-free-to-start",
          title: "Free tier with real tools — no card required",
          description:
            "Core studio access is free. Layouts, bubbles, text formatting, export, auto-save — all free. Templates free. Bring your own API key and skip the credit system entirely. Paid tiers ($19.99–$49.99/mo) are for volume and pro-quality generation, not for access.",
        },
        {
          id: "hoard-local-first",
          title:
            "Your work is in your browser, not our servers — we can't lose it",
          description:
            "Everything stored locally in IndexedDB. We literally cannot see your work. We cannot delete it, leak it, or lock you out of it. If Panel Haus disappears tomorrow, your comics stay on your machine and your on-chain IP stays on-chain.",
        },
        {
          id: "hoard-the-99",
          title: "The 99 — a global franchise chose us",
          description:
            "A 99-character superhero franchise with DC crossover history, 70-country distribution, 80M-kid Indonesian distribution path, and an American Cancer Society partnership evaluated other solutions and chose Panel Haus. If professional IP holders trust the output, the quality is real.",
        },
        {
          id: "hoard-creator-stories",
          title: "Creators already shipping chapters on the platform",
          description:
            "Other Steves who had a story stuck in their head for years and finally published. Their output is the portfolio. Their existence is the proof the tool works at scale.",
        },
        {
          id: "hoard-infrastructure-shipped",
          title:
            "The tool is fully built — not a roadmap, not a beta, not a demo",
          description:
            "Konva 5-layer canvas, 7 bubble types × 9 tail positions, print-ready PDF export, 2× high-res PNG export, auto-save, undo/redo, multi-page project management, Story Protocol live on mainnet. All shipped. You are not betting on a future product.",
        },
      ],
    },
  ],
};
