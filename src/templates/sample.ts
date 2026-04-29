import type { Template } from "../types";

export const sampleTemplate: Template = {
  id: "sample-raskin-8",
  name: "Andy Raskin 8-Beat",
  title: "Sample Throughline",
  description:
    "A sample throughline showing the Raskin 8-Beat framework in action. Use this as a reference, or create your own with the + button above.",
  audience: "Investor",
  tone: 3,
  beats: [
    {
      id: "river",
      name: "The River",
      subtitle: "Name the undeniable shift",
      prompt: "What big change is sweeping the world forward right now?",
      options: [
        {
          id: "river-1",
          title: "AI crossed the quality threshold for knowledge work",
          description:
            "In the last 18 months, AI went from generating plausible text to producing structured, grounded, domain-specific output. The barrier between 'knowing a framework' and 'executing on it' collapsed.",
          spokenLine:
            "AI crossed the quality threshold. The gap between knowing a framework and having a finished narrative just disappeared.",
        },
        {
          id: "river-2",
          title: "Every company now pitches 10x more than they did 5 years ago",
          description:
            "Remote fundraising, async sales, content marketing, partnership decks — the volume of persuasive narratives a company needs has exploded. But narrative skill hasn't scaled with it.",
        },
      ],
    },
    {
      id: "gap",
      name: "The Gap",
      subtitle: "What the shift didn't finish",
      prompt: "The shift opened a door — what's still conspicuously unsolved?",
      options: [
        {
          id: "gap-1",
          title: "AI gives you text, not a throughline",
          description:
            "ChatGPT can write paragraphs. It can't select the right narrative framework, generate structured options for each beat, or let you visually compare paths through a story. The output is plausible but unstructured.",
          spokenLine:
            "AI gives you text. It doesn't give you a throughline — a structured, visual, framework-aware narrative you can actually deliver.",
        },
      ],
    },
    {
      id: "fork",
      name: "The Fork",
      subtitle: "Winners & losers at the crossroads",
      prompt: "Who adapts and who gets left behind?",
      options: [
        {
          id: "fork-1",
          title: "Teams with narrative clarity close faster",
          description:
            "Founders who can articulate a structured story raise in weeks. Those who can't iterate through dozens of deck versions over months. The difference isn't the product — it's the narrative.",
        },
      ],
    },
    {
      id: "promised-land",
      name: "The Promised Land",
      subtitle: "Paint the destination",
      prompt: "What is the desirable end state worth reaching?",
      options: [
        {
          id: "pl-1",
          title: "Your team builds investor-grade narratives in an afternoon",
          description:
            "No narrative consultant. No three-week engagement. Your founder describes the business, the AI picks the framework, generates grounded options for every beat, and the team picks their path on a visual canvas.",
          spokenLine:
            "Your team builds an investor-grade narrative in an afternoon. No consultant. No three-week wait. Describe your business, pick your path, deliver.",
        },
      ],
    },
    {
      id: "troll",
      name: "The Troll",
      subtitle: "The obstacle on the bridge",
      prompt: "What blocks people from reaching the Promised Land?",
      options: [
        {
          id: "troll-1",
          title: "Narrative frameworks are abstract until you apply them",
          description:
            "Everyone has read Andy Raskin's blog post. Almost nobody can sit down and produce 4 specific, grounded options for their River beat. The gap between theory and execution is where every pitch stalls.",
        },
      ],
    },
    {
      id: "magic-wand",
      name: "The Magic Wand",
      subtitle: "Your gift to the hero",
      prompt: "What do you bring that lets the hero slay the troll?",
      options: [
        {
          id: "wand-1",
          title:
            "An AI narrative architect that thinks in frameworks, not prompts",
          description:
            "Throughline doesn't ask you to write a prompt. It asks you to describe your business, picks the right framework from 13 built-in options, and generates source-tagged options for every beat — grounded in your actual facts, not generic filler.",
          spokenLine:
            "We built an AI narrative architect. You describe your business. It picks the framework, generates every beat, and tags where each piece of content came from. Framework-native, not prompt-native.",
        },
      ],
    },
    {
      id: "tide",
      name: "The Tide",
      subtitle: "The forcing function",
      prompt: "What's coming that makes waiting more costly than starting?",
      options: [
        {
          id: "tide-1",
          title:
            "The teams adopting AI for narrative work now are compounding an advantage",
          description:
            "Every pitch, every sales deck, every keynote built with structured AI assistance gets better data, better templates, and better institutional knowledge. Starting six months from now means six months of compounding you missed.",
        },
      ],
    },
    {
      id: "hoard",
      name: "The Hoard",
      subtitle: "Proof the treasure is real",
      prompt: "What evidence proves this is real and working?",
      options: [
        {
          id: "hoard-1",
          title:
            "Working product with 13 frameworks and full generation pipeline",
          description:
            "Throughline is live. 13 narrative frameworks, BYOK AI generation, source-tagged options, per-beat regeneration, teleprompter practice mode, and full import/export. Sub-$0.30 per throughline generated. Built and shipped, not a roadmap.",
          spokenLine:
            "The product is live. Thirteen frameworks, AI generation, source tags, practice mode. Shipped, not planned.",
        },
      ],
    },
  ],
};
