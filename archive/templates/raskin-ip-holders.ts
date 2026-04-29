import type { Template } from "../types";

export const raskinIpHoldersTemplate: Template = {
  id: "panel-haus-raskin-ip-holders",
  name: "Panel Haus — Raskin / IP Holders",
  description:
    "The IP-holder throughline. Hero = the brand/franchise owner (The 99, Claynosaurz, mascot-driven brands). Promised Land = your franchise becomes a fan-creation platform. Prism-as-a-Service + Story Protocol means every fan derivative pays the IP holder automatically.",
  beats: [
    {
      id: "river",
      name: "The River",
      subtitle: "Name the undeniable shift",
      prompt:
        "What big change is reshaping how fans engage with your franchise — right now, unavoidably?",
      options: [
        {
          id: "river-fan-creation-economy",
          title: "AI made fan creation a real economy, not a hobby",
          description:
            "Fans can now produce publishable-quality work at scale. Engagement is shifting from passive consumption to active creation — and the brands that host that shift own the next decade of attention.",
        },
        {
          id: "river-attention-moves-to-participation",
          title: "Brand attention moved from broadcast to participation",
          description:
            "Roblox has 400+ brand activations in 2024 — Nike's NIKELAND (20M+ visitors), Gucci Town, Walmart's 94%-approval e-commerce test. Brands now spend $400K–$1M per campaign to reach Gen Z through creation, not advertising. Comics is the next participation medium and there is no dominant platform yet.",
        },
        {
          id: "river-ai-ip-training-pressure",
          title: "AI models are training on your IP whether you consent or not",
          description:
            "The choice is no longer 'do we engage with AI.' It's 'do we control how our characters show up in it.' Staying locked down means your franchise gets trained into every competitor's model for free.",
        },
        {
          id: "river-mascot-opportunity",
          title:
            "Mascots are the most underused brand asset — and the window is open",
          description:
            "Duolingo's owl went from a logo to a cultural phenomenon through serialized social content. Most brands want that but don't have the tools or pipeline to produce it consistently. People recognize your mascot. They don't know it. Comics are how a mascot becomes a character.",
        },
        {
          id: "river-on-chain-royalties-arrived",
          title: "On-chain royalty infrastructure finally works for IP holders",
          description:
            "Story Protocol gives IP holders a programmable royalty layer on every derivative work — automatic splits, provable provenance, configurable license terms. The technology to capture revenue from fan creation at scale now exists.",
        },
      ],
    },
    {
      id: "gap",
      name: "The Gap",
      subtitle: "What the shift didn't finish",
      prompt:
        "Fans are already creating. What is still conspicuously missing for the IP holder?",
      options: [
        {
          id: "gap-fans-create-ip-gets-nothing",
          title:
            "Fans are already creating on your IP — and the IP holder gets no revenue, no canon control, and no data",
          description:
            "Fan creation is happening today on generic AI tools. Your characters are already out there, off-model, uncontrolled, unmonetized. The shift to participation-as-engagement arrived for the fan. The infrastructure for the IP holder — character lock, moderation, royalty routing, brand analytics — didn't.",
        },
        {
          id: "gap-no-sanctioned-path",
          title: "No sanctioned path exists between your IP and your fans",
          description:
            "Generic AI tools let fans make off-model work. Licensing deals take quarters. In-house pipelines cost millions. There is no middle path — a platform that lets your fans create inside your world, on-model and on-terms. That absence is the gap.",
        },
        {
          id: "gap-royalty-rails-missing",
          title:
            "Royalty rails for fan derivatives don't exist in the traditional stack",
          description:
            "Every fan work on a generic platform is lost revenue. Traditional licensing can't price-or-police a million derivatives. Story Protocol's on-chain royalty layer is the first infrastructure that captures value from fan creation at scale — and no fan tool ships it.",
        },
        {
          id: "gap-moderation-at-scale-missing",
          title:
            "Moderation-at-scale is operationally impossible without platform infrastructure",
          description:
            "The shift made fan creation cheap. It didn't make it safe. Reviewing millions of derivatives for tone, safety, and on-model fidelity is a full-time team no IP holder has. The absence of scalable moderation is what keeps most brands locked down.",
        },
      ],
    },
    {
      id: "fork",
      name: "The Fork",
      subtitle: "Winners & losers at the crossroads",
      prompt:
        "Which franchises compound through fan creation — and which get reduced to nostalgia?",
      options: [
        {
          id: "fork-ip-becomes-platform",
          title: "IPs that enable fan creation become platforms",
          description:
            "Franchises that host creation own the next generation of engagement, distribution, and canon. The IP holders who moved first on Roblox own the Gen Z relationship. The IP holders who move first on fan-creation comics own the next one.",
        },
        {
          id: "fork-generic-ai-tools-dilute",
          title: "Generic AI tools dilute franchises that stay locked down",
          description:
            "If the IP doesn't provide the sanctioned path, fans will use unsanctioned ones — and every fan creation on a generic tool trains competitor models on your characters while contributing zero revenue back to you.",
        },
        {
          id: "fork-licensing-too-late",
          title: "Late movers license on someone else's terms",
          description:
            "The platforms that build the fan-creation pipeline first set the economics for everyone who follows. Show up in 18 months and you're negotiating against an incumbent with an installed base.",
        },
        {
          id: "fork-mascot-revival-or-decay",
          title: "Mascot brands either activate now or age into logos",
          description:
            "The brands with recognizable mascots have a 12–24 month window to turn them into characters with a story. Miss it and they stay logos — recognized but not loved, and replaceable.",
        },
        {
          id: "fork-agency-spend-obsolete",
          title: "Agency-funded one-off content becomes obsolete",
          description:
            "Paying $15K to an agency for a single comic strip produces one piece of content. A fan-creation platform for the same budget produces thousands. The brands still running agency-only pipelines in 2027 will have a fraction of the story output of the ones who switched.",
        },
      ],
    },
    {
      id: "promised-land",
      name: "The Promised Land",
      subtitle: "Paint the destination",
      prompt:
        "What does your franchise look like on the other side of this shift?",
      options: [
        {
          id: "pl-franchise-as-platform",
          title: "Your franchise becomes a creation platform",
          description:
            "Fans ship sanctioned comics inside your brand world. Every chapter is a distribution channel, a data point, and an on-chain derivative that pays you automatically. The brand owns the platform, not just the IP.",
        },
        {
          id: "pl-living-canon",
          title: "A living, fan-fed canon",
          description:
            "Story velocity goes from one official release per year to continuous. The best fan work gets promoted into canon. The universe expands faster than any in-house writers' room can match — and each promotion rewards the fan who made it.",
        },
        {
          id: "pl-new-revenue-line",
          title: "A new creator-economy revenue line",
          description:
            "Every fan derivative automatically pays the IP holder via Story Protocol. Royalties, subscriptions, contest sponsorships, licensed asset packs, enterprise seats — real revenue from month one, not 'maybe creators will upgrade.'",
        },
        {
          id: "pl-roblox-for-your-fans",
          title: "The Roblox pattern applied to your IP",
          description:
            "Your franchise runs its own creator platform — tens of thousands of fans making sanctioned comics, you own the rights, they market the brand for free. Roblox earns a $1.2B ad run-rate on top of their creator base. Panel Haus is that pattern for comic-native franchises.",
        },
        {
          id: "pl-mascot-becomes-character",
          title:
            "Your mascot becomes a character people love, not a logo they recognize",
          description:
            "Duolingo's owl, but for your brand — serialized stories, cultural presence, fan-made canon. The mascot moves from brand asset to story engine, and the fan-creation platform is what keeps the story running every week.",
        },
      ],
    },
    {
      id: "troll",
      name: "The Troll",
      subtitle: "The obstacle on the bridge",
      prompt: "What stops IP holders from opening their world to fan creation?",
      options: [
        {
          id: "troll-ip-leakage",
          title: "IP leakage and canon drift on generic AI tools",
          description:
            "Fan work on generic AI tools fragments the brand and trains competitor models for free. Characters drift off-model, tone wanders, and the IP holder has zero visibility, zero control, and zero revenue capture.",
        },
        {
          id: "troll-quality-control",
          title: "Moderation at scale is operationally impossible in-house",
          description:
            "Reviewing millions of fan creations for safety, tone, and brand fit is a full-time team the IP holder doesn't have. Without scalable moderation, most brands refuse to open the gate at all.",
        },
        {
          id: "troll-character-consistency",
          title: "Characters don't stay on-model without a sanctioned pipeline",
          description:
            "Every fan tool draws the hero slightly differently. Hundreds of thousands of variations later, the canonical visual identity is eroded. LoRA-trained character locks are the only reliable fix — and no fan tool ships this by default.",
        },
        {
          id: "troll-ownership-ambiguity",
          title: "Ownership of fan-created derivatives is legally unclear",
          description:
            "Without a platform contract, downstream rights become a lawsuit risk. IP holders opt for 'do not engage' because the legal cost of engaging wrong is larger than the upside of engaging right.",
        },
        {
          id: "troll-agency-tax",
          title: "The $15K-per-strip agency tax",
          description:
            "Paying $15K to an agency for a one-off comic strip. That's one piece of content, one voice, one risk. Your fans could produce a thousand for the same spend if you gave them the tools — but no tool existed until now.",
        },
        {
          id: "troll-rogue-artists",
          title:
            "Rogue artists will use your IP without permission — wrong, off-brand, and litigious",
          description:
            "If you don't open a sanctioned path, unauthorized fan artists draw your characters anyway — off-model, off-tone, sometimes harmful — and then claim ownership of the derivatives. You end up in DMCA cycles and copyright disputes against your own fans, which is a PR loss whether you win the case or not. The 'do nothing' path is not neutral. It's a slow-motion legal mess.",
        },
      ],
    },
    {
      id: "magic-wand",
      name: "The Magic Wand",
      subtitle: "Your gift to the hero",
      prompt:
        "What does Panel Haus bring that lets the IP holder open the gate safely?",
      options: [
        {
          id: "wand-prism-as-a-service",
          title: "Prism-as-a-Service — a sanctioned fan-creation platform",
          description:
            "Host the IP's world, train its characters, moderate at scale, return the UGC rights to the IP holder. Four walls: (1) character-locked creation pipeline, (2) branded landing page you can point fans at, (3) Story Protocol royalty infrastructure, (4) brand dashboard for analytics and discovery.",
        },
        {
          id: "wand-character-lock",
          title: "Character lock via LoRA + World Vault",
          description:
            "Heroes stay on-model across millions of fan creations. Costumes, faces, worlds — consistent, sanctioned, brand-safe. Canon integrity at scale, without an in-house art team reviewing every page.",
        },
        {
          id: "wand-story-protocol-royalty",
          title: "On-chain royalty pipeline — every derivative pays you",
          description:
            "Story Protocol integration, live today. Configurable license fees (0.001–1,000 IP tokens), revenue share 0–100%, tamper-resistant proof of creation, dual-network support. Every fan comic is a derivative that automatically routes a royalty split back to the IP holder. 'A new creative economy.'",
        },
        {
          id: "wand-branded-landing-page",
          title: "Your own branded Panel Haus URL",
          description:
            "'Create comics with [your characters] at panelhaus.app/[your-brand].' Free acquisition from an audience you already own. The brand literally markets the platform to its own fans — and every creation is sanctioned, on-model, and monetizable.",
        },
        {
          id: "wand-brand-dashboard",
          title: "Brand Dashboard — the analytics and discovery layer",
          description:
            "Character usage analytics, fan discovery, moderation tools, multi-brand accounts, enterprise seats. The monetization surface the IP holder pays for — but the dashboard is only valuable because the creation tool underneath is working. Tool first, dashboard on top.",
        },
        {
          id: "wand-mascot-story-engine",
          title:
            "Turn your mascot into a serialized character — without paying agencies",
          description:
            "Instead of $15K for a one-off strip, your team ships weekly stories that grow the mascot's personality. The platform handles composition, character consistency, and publishing. The mascot stops being a logo and starts being someone fans quote.",
        },
      ],
    },
    {
      id: "tide",
      name: "The Tide",
      subtitle: "What's coming that forces the IP holder to act now",
      prompt:
        "What is closing in that makes waiting more dangerous than acting?",
      options: [
        {
          id: "tide-window-closing",
          title:
            "The fan-creation window is closing — first movers take the decade",
          description:
            "Roblox's first-mover brands (Nike, Gucci, Walmart) own the Gen Z relationship. The brands still negotiating in 2026 are paying premiums to catch up. The comic-native version of this window is open right now and closes as soon as the first IP-holder platform reaches critical mass. You are early — but not for long.",
        },
        {
          id: "tide-ai-training-pressure",
          title:
            "Your IP is being trained on right now — the only question is by whom",
          description:
            "Every month of inaction is another month of unsanctioned fan work feeding competitor models. The IP holders who build their own platform retain the data. The ones who don't become training data.",
        },
        {
          id: "tide-rogue-artist-exposure",
          title:
            "Unsanctioned fan artists are creating derivative IP right now — and the legal exposure is compounding",
          description:
            "Every month of silence, off-model fan work accumulates. Some of it will claim ownership of the derivative characters. Some of it will be harmful to the brand. DMCA-ing your own fans is a PR loss — the only winning move is to open a sanctioned path before the unsanctioned path becomes the default.",
        },
        {
          id: "tide-competitor-ip-locks-in-first",
          title:
            "If a rival franchise locks in a fan-creation platform first, they set the terms",
          description:
            "The franchise that demonstrates the Roblox-for-comics model first becomes the category case study — and everyone else gets compared to them. First-mover advantage on the comic-native platform is worth more than any single campaign spend.",
        },
        {
          id: "tide-agency-budget-waste-compounding",
          title:
            "Every quarter you keep paying agencies for one-off strips is content you'll never recover",
          description:
            "A $15K one-off agency strip vs. a sanctioned fan platform producing hundreds of pieces per month. The gap in total content output, cultural presence, and fan loyalty widens every quarter. Twelve quarters of agency spend is a competitor with a year's worth of fan-created canon.",
        },
      ],
    },
    {
      id: "hoard",
      name: "The Hoard",
      subtitle: "Proof the treasure is real",
      prompt: "What evidence convinces the IP holder that this story is true?",
      options: [
        {
          id: "hoard-the-99",
          title: "The 99 case study",
          description:
            "Global superhero franchise with DC crossover history, 99 characters, 70-country distribution, 80M-kid Indonesian distribution path, partnered with the American Cancer Society. They evaluated other solutions and chose Panel Haus to power their revival.",
          permissionBoundary:
            "Only use 'they evaluated other solutions and chose Panel Haus.' Do not improvise beyond this. Do not mention Netflix.",
        },
        {
          id: "hoard-brand-math",
          title: "5 brand customers = ~$5K/mo with zero churn",
          description:
            "$299–$2,999/mo per brand, zero support cost, low churn, brands bring their own fans. Matching that on creator revenue requires 10,000 active free users at 3% conversion — orders of magnitude more marketing spend and churn management. The brand path pays from month one.",
        },
        {
          id: "hoard-ip-pipeline",
          title: "Active IP partnership pipeline",
          description:
            "Claynosaurz and additional franchises evaluating Prism-as-a-Service. The conversation is not 'does this work' — it's 'which IP holder locks in first.'",
        },
        {
          id: "hoard-live-demo",
          title: "Live demo of character-locked fan creation",
          description:
            "60 seconds, prompt to on-model finished page inside the IP's world — character consistent, page composed, bubbles placed, exportable.",
        },
        {
          id: "hoard-roblox-precedent",
          title: "The Roblox precedent — $1.2B ad run-rate on a creator base",
          description:
            "Roblox's brand platform is a multi-billion-dollar monetization layer built on 14 years of creator tools. The precedent isn't speculative — it's the dominant pattern in creator-tool economics.",
        },
      ],
    },
  ],
};
