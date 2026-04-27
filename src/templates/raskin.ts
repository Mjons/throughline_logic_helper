import type { Template } from "../types";

export const raskinTemplate: Template = {
  id: "panel-haus-raskin",
  name: "Panel Haus — Raskin / Investor",
  description:
    "The investor throughline. Hero = the VC/angel. Promised Land = equity in the platform that defines how fan-creation IP works. Tool-first wins (Roblox/Figma/Canva); dashboard-first dies (Unity). Panel Haus is at the Act 1 → Act 2 handoff.",
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
            "In the last 18 months, character consistency, style control, and pacing-aware generation became real. The tech bottleneck is gone.",
          chosen: true,
          spokenLine:
            "In the last 18 months, AI image generation crossed the quality threshold. The tech bottleneck for visual storytelling is gone.",
        },
        {
          id: "river-tool-first-platform-era",
          title:
            "The next trillion-dollar platforms are being built creator-tool-first",
          description:
            "Roblox shipped 14 years of tools before brand revenue — now at ~$7B bookings and a $1.2B ad run-rate. Figma sold to enterprise through free individual designers — $912M ARR. Canva same pattern. Unity is the cautionary tale — sold out creators for adtech and collapsed. The winners build the tool, attract the creators, then monetize brands on top.",
          chosen: false,
          rejectedBecause:
            "This IS the strategy. Too long for a river line. Used as the backbone for the Act 1/Act 2 arc in the pitch, and surfaces inside the wand and hoard beats.",
        },
        {
          id: "river-visual-storytelling-dominance",
          title: "Visual storytelling became the default cultural medium",
          description:
            "Manga outsells all of American publishing combined. Webtoon at 90M users. TikTok proved if you can't show it, it doesn't exist.",
          chosen: false,
          rejectedBecause:
            "True, but folded in as compounding context inside the chosen beat — not strong enough alone to anchor the river.",
        },
        {
          id: "river-brand-fan-economy-emerged",
          title:
            "Brands now spend $400K–$1M+ per campaign to reach audiences through creation, not broadcast",
          description:
            "Roblox has 400+ active brand activations in 2024 — Nike's NIKELAND (20M+ visitors), Gucci Town, Walmart e-commerce (94% approval). The brand-to-creator-platform pipeline is proven and priced. Comics is the next participation medium.",
          chosen: false,
          rejectedBecause:
            "This is the money. Reserved for the hoard beat — it's proof of an adjacent market, not the river itself.",
        },
        {
          id: "river-ai-copyright-shift",
          title: "Regulatory shift on AI ownership and copyright",
          description:
            "Courts and governments are reshaping who owns AI-generated content.",
          chosen: false,
          rejectedBecause:
            "A tailwind, not the river. Use as supporting evidence in the troll beat (ownership trap).",
        },
        {
          id: "river-illustration-cost-collapse",
          title:
            "Cost of illustration collapsed against unchanged human-artist rates",
          description:
            "Per-page AI cost went from artisan-tier to near-zero while $200–$500/page artist rates held steady — a 20-page comic still costs $4K–$10K. Only funded studios and established publishers can afford to tell visual stories.",
          chosen: false,
          rejectedBecause:
            "Derivative of the technology shift; weaker as a standalone undeniable shift. Fold into troll as pricing reality.",
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
          id: "gap-who-gets-to-make-comics",
          title:
            "The tech bottleneck broke. The access bottleneck didn't — who gets to make comics is still gated.",
          description:
            "AI solved the image layer. It did not build the studio, the ownership rails, or the brand-creator platform on top. Gatekeepers still decide which stories exist, independents still own nothing durable, and every AI tool in the market stops at 'here's one image.' The shift opened the door. Nobody walked through it with a full platform.",
          chosen: true,
          spokenLine:
            "AI solved the image. It did not solve the comic. Generators stop at one frame — the studio, the ownership rails, and the creator-to-brand platform on top are all still missing. The tech bottleneck broke. Who gets to make comics didn't change.",
        },
        {
          id: "gap-generators-stop-at-image",
          title:
            "Generators stop at the image — composition, completion, and ownership are still missing",
          description:
            "A comic is paced panels, word balloons, page layouts, consistent characters, a finished exportable file, and provable ownership. Every AI tool in the market stops at 'here's one image.' Composition, completion, and ownership are three separate unsolved layers.",
          chosen: false,
          rejectedBecause:
            "Cleaner analytic framing but misses the investor-level 'who gets to make comics' hook. Folds into the chosen composite.",
        },
        {
          id: "gap-no-creator-base-platform-yet",
          title: "The comic-native creator-base platform doesn't exist yet",
          description:
            "Roblox proved the pattern — tool for creators first, brand monetization on top. In comics, no platform has the creator base yet. Dashtoon and Jenova are racing toward workflow. Canva has the distribution but not the story depth. The platform slot at the Act 1 → Act 2 handoff is empty.",
          chosen: false,
          rejectedBecause:
            "This is the investable whitespace. Anchor of the tool-first/dashboard-first arc, so it lives in the wand and hoard beats rather than the gap.",
        },
        {
          id: "gap-ownership-rails-missing",
          title: "Independent creators still own nothing durable",
          description:
            "The AI wave that solved image gen also made IP more fragile than ever — closed platforms, opaque terms, Sora-style shutdowns that erase work. Tamper-resistant, independently-owned creation is possible but not yet the default.",
          chosen: false,
          rejectedBecause:
            "One face of the composite gap. Folds into the chosen option and anchors the Story Protocol wall inside the wand.",
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
          id: "fork-incumbents-weaponize",
          title: "Incumbents weaponize AI to reinforce gatekeeping",
          description:
            "Webtoon, Marvel, DC, Shueisha bolt AI onto existing pipelines to make their already-approved creators faster — not to open the gate. Democratization window closes.",
          chosen: true,
          spokenLine:
            "The window is closing. Incumbents will use AI to reinforce gatekeeping — faster production for the same approved creators. If we don't build the democratized path now, the access window shuts.",
        },
        {
          id: "fork-tool-first-vs-dashboard-first",
          title:
            "Tool-first platforms capture the creator base; dashboard-first platforms die",
          description:
            "Roblox, Figma, Spotify, Canva all followed the same arc: build the tool for years, then monetize brands on top. Unity skipped the ordering — ironSource merger, 2023 runtime-fee revolt, CEO resigned, business shut down. The platforms pitching brand dashboards in 2026 without a creator base are the next Unity.",
          chosen: false,
          rejectedBecause:
            "The strategy behind the bet, not the stakes the hero sees. Better inside the wand beat as 'we are deliberately Act 1.'",
        },
        {
          id: "fork-closed-platforms-take-the-work",
          title:
            "Closed platforms will shut down and take their creators with them",
          description:
            "Sora shut down and every creation on it vanished with it. Platforms that don't give creators ownership are time bombs — when they fail, a generation of work disappears.",
          chosen: false,
          rejectedBecause:
            "Used as evidence inside the troll beat, not as the fork. Pairs with the ownership trap framing.",
        },
        {
          id: "fork-adapters-compound",
          title: "Adapters compound, holdouts decay",
          description: "Generic 'those who move now win' framing.",
          chosen: false,
          rejectedBecause:
            "Too vague to create urgency. James's coaching: stakes need a face.",
        },
        {
          id: "fork-sora-cautionary",
          title: "Sora-style cautionary tale",
          description:
            "Platforms shut down and take all creator work with them.",
          chosen: false,
          rejectedBecause:
            "Used as supporting evidence inside the troll beat, not as the fork.",
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
          id: "pl-steve-publishes",
          title:
            "A new identity for the buyer — Steve becomes a published comic creator",
          description:
            "Steve, 38, has had a story in his head for 20 years. Publishes his first chapter in an afternoon. His community reads it. He owns the IP. There are millions of Steves.",
          chosen: true,
          spokenLine:
            "Anyone with a story can produce a publishable comic chapter. Not a slideshow of AI images — a real comic. Paced, paneled, consistent, owned. Steve publishes his first chapter in an afternoon. There are millions of Steves.",
        },
        {
          id: "pl-roblox-of-comics",
          title: "Panel Haus becomes the Roblox of comics",
          description:
            "A creator-owned storytelling platform with a brand revenue layer on top. The creator base (writers, worldbuilders, families) is the moat. The brand dashboard (IP holders paying to host fan creation on their characters) is the monetization. Roblox did this in games and now throws off $1.2B/yr in ad revenue with $7B bookings. Panel Haus does it for comics.",
          chosen: false,
          rejectedBecause:
            "Investor-legible but trades identity for abstraction. Identity beats analogy in the room. Kept in reserve for the deep-dive Q&A.",
        },
        {
          id: "pl-chapter-in-60-min",
          title: "Concrete outcome — a publishable chapter in under 60 minutes",
          description: "Quantified before/after the platform.",
          chosen: false,
          rejectedBecause:
            "Used as the supporting metric inside the chosen identity framing. Said alone, the metric sounds like a toy.",
        },
        {
          id: "pl-comics-democratized",
          title:
            "Industry-wide transformation — sequential storytelling democratized",
          description:
            "The whole comic category looks different on the other side.",
          chosen: false,
          rejectedBecause:
            "Investors fund products, not eras. Identity beats abstraction in the room.",
        },
        {
          id: "pl-creative-abundance",
          title: "Abundance / relief — the bottleneck disappears",
          description:
            "Scarcity (artists, time, money) replaced with creative ease.",
          chosen: false,
          rejectedBecause: "Too soft for an investor pitch.",
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
          id: "troll-gatekeepers-and-ownership",
          title: "Composite troll — gatekeepers + the ownership trap",
          description:
            "Two faces. (1) Publishers and the artist-dependency tax decide which stories exist. (2) Every AI tool that promises an alternative owns your creations the moment you make them. Sora shut down and everyone's work vanished with it.",
          chosen: true,
          spokenLine:
            "The comic industry runs on a broken access model — gatekeepers decide which stories exist, and the AI tools that promise an alternative own your creations the moment you make them. Sora shut down and everyone's work vanished with it. On-ramps exist. They all dead-end before publishable.",
        },
        {
          id: "troll-ai-generates-doesnt-compose",
          title: "AI tools generate images — they don't compose comics",
          description:
            "A comic is paced panels, word balloons, page layouts, consistent characters, and a finished file. Every AI tool in the market stops at 'here's an image.' They generate. They don't compose. The work between 'image' and 'chapter' is where every creator gives up.",
          chosen: false,
          rejectedBecause:
            "Real and sharp, but folds inside the dead-end on-ramps framing. Good seeded Q&A for the moat conversation.",
        },
        {
          id: "troll-on-ramps-dead-end",
          title: "On-ramps that dead-end before publishable",
          description:
            "Webtoon (no art), Dashtoon/AI Comic Factory (slop), Canva (memes), Fiverr (slow/expensive) — every path stops short of a real chapter.",
          chosen: false,
          rejectedBecause:
            "Demoted to supporting evidence. James's note: this describes terrain, not a troll. Need a face to slay.",
        },
        {
          id: "troll-artist-cost-and-cycle",
          title: "$200–$500 per page and six-week revision cycles",
          description:
            "A 20-page comic is $4K–$10K and three to six months of waiting. Independent creators priced out and slowed down by artist dependency.",
          chosen: false,
          rejectedBecause:
            "James was explicit — do not make artists the enemy. Reframed as gatekeeper symptom inside the chosen troll.",
        },
        {
          id: "troll-tool-complexity",
          title: "Pro tools assume drawing skill",
          description:
            "Clip Studio, Photoshop, Procreate — thousand-hour learning curves.",
          chosen: false,
          rejectedBecause:
            "An obstacle, not the troll. Folded into the access-model framing.",
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
          id: "wand-ai-native-studio",
          title:
            "Unification — an AI-native comic studio, not a comic generator",
          description:
            "Five defensible walls. (1) Write → Compose → Publish → Own — the full workflow, not just generation. (2) Proprietary 7-category layout taxonomy — Breath, Weight, Reveal, Drive, Surge, Rupture, Fracture. (3) Character lock via LoRA + World Vault. (4) Story Protocol on-chain IP registration with configurable royalties — no competitor has this. (5) Local-first architecture (IndexedDB) + BYOK (Gemini/ChatGPT/Claude). The anti-Sora: if we disappear tomorrow your work stays on your machine.",
          chosen: true,
          spokenLine:
            "We are not a comic generator. We are an AI-native comic studio. AI handles the pixels. You handle the story. Write, compose, publish, own — the full workflow. The result is a publishable chapter in under 60 minutes, on-chain IP you control, and a local-first architecture that means your work is yours forever.",
        },
        {
          id: "wand-layout-taxonomy",
          title: "Proprietary layout taxonomy as standalone wand",
          description:
            "The 7-category pacing system as the headline differentiator.",
          chosen: false,
          rejectedBecause:
            "One wall is a feature. Five walls is a studio. Kept as wall #2 inside the chosen wand.",
        },
        {
          id: "wand-story-protocol-ownership",
          title: "On-chain IP registration — a new creative economy",
          description:
            "Story Protocol integration, live today: tamper-resistant proof of creation, license tiers (non-commercial free, commercial configurable), royalty splits 0–100%, dual-network support. 'What if every piece of fan art automatically paid the original creator?' No other comic tool has this.",
          chosen: false,
          rejectedBecause:
            "Strong and unique but niche for a general investor room. Lives as wall #4 inside the chosen wand and as a seeded Q&A.",
        },
        {
          id: "wand-local-first-byok",
          title:
            "Local-first + bring-your-own-key — the anti-Sora architecture",
          description:
            "Everything stored in IndexedDB on the user's machine. We literally cannot see creator work. BYOK support for Gemini, ChatGPT, and Claude bypasses rate limits entirely. If Panel Haus shuts down tomorrow, every creator keeps everything.",
          chosen: false,
          rejectedBecause:
            "Critical credibility piece but lives as wall #5. Use in the 'but what about Sora?' seeded Q&A.",
        },
        {
          id: "wand-speed-60-min",
          title: "Speed — chapter in 60 minutes",
          description: "Same outcome in a fraction of the time.",
          chosen: false,
          rejectedBecause:
            "Speed is the output, not the wand. 'In minutes' is the language creative communities treat as an anti-feature. Removed from the headline.",
        },
        {
          id: "wand-creator-insight",
          title: "Insight — the Creator DNA / awareness layer",
          description:
            "Mirror the patterns in the comics each creator unconsciously makes.",
          chosen: false,
          rejectedBecause:
            "Strong long-term direction (see Awareness Apps Manifesto findings) but not the lead today.",
        },
        {
          id: "wand-prism-partnership",
          title: "Partnership — Prism-as-a-Service for IP holders",
          description:
            "Fight beside the brand: train their characters, host fan creation, return UGC.",
          chosen: false,
          rejectedBecause:
            "Surfaced as the B2B compound beat in the deck rather than as the headline wand.",
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
          id: "tide-window-closing",
          title: "The democratized access window is closing",
          description:
            "Every incumbent is wiring AI into closed gatekeeping pipelines right now. Every month we wait, another cohort of would-be creators commits to a closed platform that will eventually own their work. Sora shutting down was the preview. If we don't build the open, ownership-first path in the next 18 months, the access window is shut for a decade.",
        },
        {
          id: "tide-incumbent-ai-rollouts",
          title: "Marvel, DC, Webtoon, Shueisha are deploying AI right now",
          description:
            "Incumbents are adding AI to existing pipelines in 2026 — not to open the gate, but to let already-approved creators ship faster. Each incumbent rollout hardens the gatekeeping model for another generation. Open access either wins this window or concedes it.",
        },
        {
          id: "tide-brand-spend-consolidating",
          title: "Brand-platform budgets are consolidating on first movers",
          description:
            "Roblox's Nike, Gucci, Walmart deals set the precedent — first-mover brand platforms capture the decade. The comic-native equivalent has no dominant platform yet. Once one reaches critical mass, the brand-side budget routes there permanently.",
        },
        {
          id: "tide-sora-pattern-repeats",
          title: "Every closed AI platform is a future Sora",
          description:
            "Sora shut down and took creator work with it. More shutdowns are coming — the economics of closed, server-side AI platforms don't survive their own compute costs. Creators and IP holders are learning this month by month. The trust shift toward local-first, ownership-first tools is one-directional.",
        },
        {
          id: "tide-legal-pressure-building",
          title: "AI copyright rulings are starting to land",
          description:
            "Courts are beginning to rule on AI training, derivative rights, and platform liability. Every ruling either hardens closed-platform terms or opens room for ownership-first alternatives. The legal tailwind for on-chain, provable-origin IP is arriving, not departing.",
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
          id: "hoard-demo-plus-the99",
          title: "Live demo + The 99 case study",
          description:
            "Demo: 60 seconds, prompt to finished page, between origin story and product pitch. Case study: The 99 — 99 characters, global superhero franchise with DC crossover history and 70-country distribution — evaluated other solutions and chose Panel Haus to power their revival. Adam Gilad is writing the cancer comic with Ryan, partnered with the American Cancer Society and an 80M-kid Indonesian distribution path.",
          chosen: true,
          spokenLine:
            "The 99 — a global superhero franchise with DC crossover history and 70-country distribution — evaluated other solutions and chose Panel Haus to power their revival. Adam Gilad is writing their next comic on the platform, partnered with the American Cancer Society. Every IP holder we add is a distribution channel and a revenue stream.",
          permissionBoundary:
            "Only use 'they evaluated other solutions and chose Panel Haus.' Do not improvise beyond this. Do not mention Netflix.",
        },
        {
          id: "hoard-brand-math",
          title: "The brand-side math — 5 brands = $5K/mo with zero churn",
          description:
            "5 brand customers at $299–$2,999/mo = ~$5K/mo with zero support cost, near-zero churn, and they bring their own fans. Matching that on creator revenue means 10,000 active free users converting at 3% — orders of magnitude more marketing spend, churn management, and support tickets. The 99 alone unlocks thousands of fans on a single partnership.",
          chosen: false,
          rejectedBecause:
            "Best seeded Q&A — answers 'how does this make money' after the creator story has landed. Putting it in the hoard too early reframes the pitch as B2B SaaS.",
        },
        {
          id: "hoard-infrastructure-shipped",
          title: "Infrastructure fully shipped — execution risk is priced out",
          description:
            "Konva 5-layer canvas, 7 bubble types × 9 tail positions, 2,100-line export engine (print-ready PDF + 2× PNG), Story Protocol live on mainnet + testnet, tiered Stripe pricing, rate-limited and hardened. The question is not 'can they build it.' It's 'can they distribute it.' Which is exactly what this round funds.",
          chosen: false,
          rejectedBecause:
            "Strong supporting evidence for the 'what this round funds' slide, but not the headline proof. The 99 case study does more work.",
        },
        {
          id: "hoard-roblox-precedent",
          title: "The Roblox precedent — $7B bookings, $1.2B ad run-rate",
          description:
            "Creator-tool-first platforms are not speculative. Roblox shipped 14 years of tools, hit 100M MAU, then turned on the brand platform — 400+ activations at $400K–$1M each, nearly doubling year over year. Figma, Canva, Spotify all the same pattern. The pattern works. Panel Haus is that pattern for comics.",
          chosen: false,
          rejectedBecause:
            "Better as the analogy inside the promised-land deep-dive than as the headline hoard — investors trust their own pattern-matching more when we don't over-sell the parallel.",
        },
        {
          id: "hoard-metrics",
          title: "Hard scale metrics",
          description:
            "Active creators, chapters produced, time-to-publish, paying subs.",
          chosen: false,
          rejectedBecause:
            "We don't have the scale numbers yet. Honest framing: 'that's what this round funds.' Do not fabricate.",
        },
        {
          id: "hoard-encode-club",
          title: "Encode Club AI commercial category win",
          description: "Third-party endorsement, $1K prize.",
          chosen: false,
          rejectedBecause:
            "Real but small. Use as validation, not headline proof.",
        },
        {
          id: "hoard-ip-pipeline",
          title: "IP partnership pipeline (Claynosaurz, others in discussion)",
          description: "Multiple IP holders evaluating Prism-as-a-Service.",
          chosen: false,
          rejectedBecause:
            "Frame as forward-looking pipeline in the B2B beat, not as closed-deal hoard.",
        },
      ],
    },
  ],
  sequencingNotes: {
    originStoryInsertion:
      "Insert the Origin Story between Promised Land and Magic Wand (Beat 4.5), per James Drage's coaching. Rationale: in 2026 the audience distrusts product demos by default. Origin establishes credibility before the demo runs, converting a skeptical audience into a primed one.",
    demoPlacement:
      "60 seconds maximum, between Origin Story and Magic Wand. One magic moment — prompt to finished page. If live fails, cut to the recorded version. Never fumble live.",
    seededQAndA: [
      "How character consistency actually works (triggers LoRA + World Vault moat).",
      "How the IP holder pipeline economics work (triggers The 99 deep-dive + brand-math option).",
      "How the layout taxonomy was built and why it matters (triggers craft credibility).",
      "What happens if Panel Haus shuts down (triggers local-first + BYOK + Story Protocol ownership story — the anti-Sora).",
      "Why not build the brand dashboard first (triggers Unity cautionary tale + Roblox 14-year precedent).",
    ],
  },
};
