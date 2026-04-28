import type { LLMClient } from "./llm-client";
import type { UserCorpus } from "./corpus";
import type { Beat } from "../types";
import { SELECT_FRAMEWORK, GENERATE_CUSTOM_FRAMEWORK } from "./prompts";

export type FrameworkSelection = {
  frameworkId: string;
  frameworkName: string;
  reasoning: string;
  alternativeId: string;
  alternativeReason: string;
};

export type FrameworkCategory =
  | "pitch"
  | "storytelling"
  | "strategy"
  | "domain";

export type FrameworkDefinition = {
  id: string;
  name: string;
  description: string;
  category: FrameworkCategory;
  bestFor: string;
  icon: string;
  tagline: string;
  beats: Beat[];
};

// Built-in framework beat definitions
const FRAMEWORK_BEATS: Record<string, FrameworkDefinition> = {
  "raskin-8": {
    id: "raskin-8",
    name: "Andy Raskin 8-Beat",
    description: "Full narrative arc for investor pitches and keynotes",
    category: "pitch",
    bestFor: "Investor pitches, keynotes, full decks",
    icon: "\u{1F3D4}\uFE0F",
    tagline: "The full arc. River to hoard, nothing left unsaid.",
    beats: [
      {
        id: "river",
        name: "The River",
        subtitle: "Name the undeniable shift",
        prompt: "What big change is sweeping the world forward right now?",
        options: [],
      },
      {
        id: "gap",
        name: "The Gap",
        subtitle: "What the shift didn't finish",
        prompt:
          "The shift opened a door — what's still conspicuously unsolved?",
        options: [],
      },
      {
        id: "fork",
        name: "The Fork",
        subtitle: "Winners & losers at the crossroads",
        prompt: "Who adapts and who gets left behind?",
        options: [],
      },
      {
        id: "promised-land",
        name: "The Promised Land",
        subtitle: "Paint the destination",
        prompt: "What is the desirable end state worth reaching?",
        options: [],
      },
      {
        id: "troll",
        name: "The Troll",
        subtitle: "The obstacle on the bridge",
        prompt: "What blocks people from reaching the Promised Land?",
        options: [],
      },
      {
        id: "magic-wand",
        name: "The Magic Wand",
        subtitle: "Your gift to the hero",
        prompt: "What do you bring that lets the hero slay the troll?",
        options: [],
      },
      {
        id: "tide",
        name: "The Tide",
        subtitle: "The forcing function",
        prompt: "What's coming that makes waiting more costly than starting?",
        options: [],
      },
      {
        id: "hoard",
        name: "The Hoard",
        subtitle: "Proof the treasure is real",
        prompt: "What evidence proves this is real and working?",
        options: [],
      },
    ],
  },
  "raskin-5": {
    id: "raskin-5",
    name: "Andy Raskin 5-Beat",
    description: "Compressed narrative for cold outreach and short pitches",
    category: "pitch",
    bestFor: "Cold emails, 5-min pitches, elevator conversations",
    icon: "\u26A1",
    tagline: "Five beats. Sixty seconds. The cold open that gets the meeting.",
    beats: [
      {
        id: "river",
        name: "The River",
        subtitle: "Name the undeniable shift",
        prompt: "What changed that makes this possible or necessary now?",
        options: [],
      },
      {
        id: "promised-land",
        name: "The Promised Land",
        subtitle: "Paint the destination",
        prompt: "What does the world look like when this is solved?",
        options: [],
      },
      {
        id: "magic-wand",
        name: "The Magic Wand",
        subtitle: "What you bring",
        prompt: "What do you offer that gets the hero there?",
        options: [],
      },
      {
        id: "proof",
        name: "Proof",
        subtitle: "Evidence it works",
        prompt: "What proves this is real?",
        options: [],
      },
      {
        id: "ask",
        name: "The Ask",
        subtitle: "What you want",
        prompt: "What do you want from this interaction?",
        options: [],
      },
    ],
  },
  sequoia: {
    id: "sequoia",
    name: "Sequoia Pitch Deck",
    description: "Industry-standard VC pitch structure",
    category: "pitch",
    bestFor: "Seed through Series B fundraising",
    icon: "\u{1F3AF}",
    tagline:
      "The deck VCs already expect. Hit every slide they're looking for.",
    beats: [
      {
        id: "problem",
        name: "Problem",
        subtitle: "The pain worth solving",
        prompt: "What pain exists that's worth a company?",
        options: [],
      },
      {
        id: "solution",
        name: "Solution",
        subtitle: "What you do about it",
        prompt: "How do you solve the problem?",
        options: [],
      },
      {
        id: "why-now",
        name: "Why Now",
        subtitle: "What changed",
        prompt: "What makes this possible or necessary today?",
        options: [],
      },
      {
        id: "market",
        name: "Market Size",
        subtitle: "How big is the opportunity",
        prompt: "How large is the addressable market?",
        options: [],
      },
      {
        id: "product",
        name: "Product",
        subtitle: "Show it",
        prompt: "What does it actually do?",
        options: [],
      },
      {
        id: "business-model",
        name: "Business Model",
        subtitle: "How you make money",
        prompt: "What's the revenue model?",
        options: [],
      },
      {
        id: "traction",
        name: "Traction",
        subtitle: "Proof it's working",
        prompt: "What evidence shows this is working?",
        options: [],
      },
      {
        id: "team",
        name: "Team",
        subtitle: "Why you",
        prompt: "Why are you the ones to build this?",
        options: [],
      },
      {
        id: "ask",
        name: "The Ask",
        subtitle: "What you need",
        prompt: "How much are you raising and what will you do with it?",
        options: [],
      },
    ],
  },
  storybrand: {
    id: "storybrand",
    name: "StoryBrand",
    description: "Customer-hero marketing framework for copy and campaigns",
    category: "storytelling",
    bestFor: "Website copy, landing pages, email sequences",
    icon: "\u{1F9B8}",
    tagline:
      "Your customer is the hero. You're the guide. Never the other way around.",
    beats: [
      {
        id: "character",
        name: "A Character",
        subtitle: "The hero (your customer)",
        prompt: "Who is your customer and what do they want?",
        options: [],
      },
      {
        id: "problem",
        name: "Has a Problem",
        subtitle: "External, internal, philosophical",
        prompt: "What problem does your customer face at all three levels?",
        options: [],
      },
      {
        id: "guide",
        name: "Meets a Guide",
        subtitle: "That's you",
        prompt: "How do you show empathy and authority?",
        options: [],
      },
      {
        id: "plan",
        name: "Who Gives Them a Plan",
        subtitle: "Reduce anxiety",
        prompt: "What's the simple step-by-step?",
        options: [],
      },
      {
        id: "cta",
        name: "Calls Them to Action",
        subtitle: "Ask for the sale",
        prompt: "What do you want them to do right now?",
        options: [],
      },
      {
        id: "failure",
        name: "Avoid Failure",
        subtitle: "The stakes",
        prompt: "What happens if they don't act?",
        options: [],
      },
      {
        id: "success",
        name: "Ends in Success",
        subtitle: "The transformation",
        prompt: "What does life look like after the problem is solved?",
        options: [],
      },
    ],
  },
  challenger: {
    id: "challenger",
    name: "Challenger Sale",
    description: "Teaching-based persuasion for complex sales",
    category: "pitch",
    bestFor: "Consultative enterprise sales, category creation",
    icon: "\u{1F504}",
    tagline: "Teach them something they didn't know, then sell the solution.",
    beats: [
      {
        id: "warmer",
        name: "The Warmer",
        subtitle: "Build credibility",
        prompt: "How do you show you understand their world?",
        options: [],
      },
      {
        id: "reframe",
        name: "The Reframe",
        subtitle: "Challenge their assumption",
        prompt: "What does the buyer believe that's wrong?",
        options: [],
      },
      {
        id: "rational-drowning",
        name: "Rational Drowning",
        subtitle: "Quantify the cost",
        prompt: "How expensive is the current path?",
        options: [],
      },
      {
        id: "emotional-impact",
        name: "Emotional Impact",
        subtitle: "Make it personal",
        prompt: "How does this affect them personally?",
        options: [],
      },
      {
        id: "new-way",
        name: "A New Way",
        subtitle: "The framework, not the product",
        prompt: "What's the better approach?",
        options: [],
      },
      {
        id: "solution",
        name: "Your Solution",
        subtitle: "Now show the product",
        prompt: "How does your product embody the new way?",
        options: [],
      },
    ],
  },
  "amazon-6": {
    id: "amazon-6",
    name: "Amazon 6-Pager",
    description: "Internal decision document for proposals and strategy",
    category: "strategy",
    bestFor: "Internal proposals, strategic memos, product briefs",
    icon: "\u{1F4C4}",
    tagline: "The memo that gets approved. Context, tenets, proposal, FAQ.",
    beats: [
      {
        id: "context",
        name: "Context",
        subtitle: "Why are we here",
        prompt: "What does the reader need to know?",
        options: [],
      },
      {
        id: "tenets",
        name: "Tenets",
        subtitle: "Guiding principles",
        prompt: "What principles guide this decision?",
        options: [],
      },
      {
        id: "current-state",
        name: "Current State",
        subtitle: "What exists today",
        prompt: "What's the honest picture of where we are?",
        options: [],
      },
      {
        id: "proposal",
        name: "Proposed Approach",
        subtitle: "What we should do",
        prompt: "What's the specific proposal?",
        options: [],
      },
      {
        id: "alternatives",
        name: "Alternatives Considered",
        subtitle: "What else we could do",
        prompt: "What other options exist and why not?",
        options: [],
      },
      {
        id: "faq",
        name: "FAQ",
        subtitle: "Pre-empt objections",
        prompt: "What hard questions will the reader have?",
        options: [],
      },
    ],
  },
  pixar: {
    id: "pixar",
    name: "Pixar Story Spine",
    description: "Six-beat rapid story prototyping framework",
    category: "storytelling",
    bestFor: "Brand narratives, video scripts, case studies",
    icon: "\u2728",
    tagline: "Once upon a time... The six sentences that make any story land.",
    beats: [
      {
        id: "once",
        name: "Once Upon a Time",
        subtitle: "Establish the world",
        prompt: "What was the starting situation?",
        options: [],
      },
      {
        id: "every-day",
        name: "Every Day",
        subtitle: "The routine",
        prompt: "What was normal and accepted?",
        options: [],
      },
      {
        id: "one-day",
        name: "One Day",
        subtitle: "The inciting incident",
        prompt: "What changed?",
        options: [],
      },
      {
        id: "because",
        name: "Because of That",
        subtitle: "Chain the consequences",
        prompt: "What happened as a result? (chain 2-3 consequences)",
        options: [],
      },
      {
        id: "until-finally",
        name: "Until Finally",
        subtitle: "The climax",
        prompt: "What was the decisive moment?",
        options: [],
      },
      {
        id: "ever-since",
        name: "Ever Since That Day",
        subtitle: "The new normal",
        prompt: "What changed permanently?",
        options: [],
      },
    ],
  },
  "saas-investor": {
    id: "saas-investor",
    name: "SaaS Investor Narrative",
    description: "B2B SaaS fundraising with metrics emphasis",
    category: "domain",
    bestFor: "SaaS Series A-C fundraising, board decks",
    icon: "\u{1F4C8}",
    tagline:
      "ARR, NRR, CAC payback. The metrics-first narrative VCs actually read.",
    beats: [
      {
        id: "category",
        name: "Category & Timing",
        subtitle: "What category, why now",
        prompt: "What category are you in or creating?",
        options: [],
      },
      {
        id: "icp",
        name: "ICP & Wedge",
        subtitle: "Who you sell to and how",
        prompt: "Who is your ideal customer and how do you land them?",
        options: [],
      },
      {
        id: "product-moat",
        name: "Product & Moat",
        subtitle: "What you do and why it's hard to copy",
        prompt: "What does the product do and what's the defensibility?",
        options: [],
      },
      {
        id: "metrics",
        name: "Metrics",
        subtitle: "The numbers",
        prompt: "What are your growth, retention, and efficiency metrics?",
        options: [],
      },
      {
        id: "gtm",
        name: "Go-to-Market",
        subtitle: "How you grow",
        prompt: "How do you acquire and expand customers?",
        options: [],
      },
      {
        id: "team",
        name: "Team & Culture",
        subtitle: "Who's building this",
        prompt: "Why is this team the right one?",
        options: [],
      },
      {
        id: "ask",
        name: "The Ask",
        subtitle: "What you need",
        prompt: "How much, for what, and what milestones?",
        options: [],
      },
    ],
  },
  spin: {
    id: "spin",
    name: "SPIN Selling",
    description: "Question-driven discovery framework",
    category: "pitch",
    bestFor: "Discovery calls, first meetings, consultative selling",
    icon: "\u2753",
    tagline: "Don't pitch. Ask the questions that make them sell themselves.",
    beats: [
      {
        id: "situation",
        name: "Situation",
        subtitle: "Understand current state",
        prompt: "What is the buyer's current process and setup?",
        options: [],
      },
      {
        id: "problem",
        name: "Problem",
        subtitle: "Surface dissatisfaction",
        prompt: "What difficulties exist with the current approach?",
        options: [],
      },
      {
        id: "implication",
        name: "Implication",
        subtitle: "Explore consequences",
        prompt: "What are the downstream effects of these problems?",
        options: [],
      },
      {
        id: "need-payoff",
        name: "Need-Payoff",
        subtitle: "Articulate the value",
        prompt: "What would solving this problem mean for them?",
        options: [],
      },
    ],
  },
  freytag: {
    id: "freytag",
    name: "Freytag's Pyramid",
    description: "Classical 5-act dramatic structure",
    category: "storytelling",
    bestFor: "Case studies, retrospectives, conference talks",
    icon: "\u{1F4D0}",
    tagline: "Rise, peak, fall. Classical dramatic structure, zero fluff.",
    beats: [
      {
        id: "exposition",
        name: "Exposition",
        subtitle: "Set the scene",
        prompt: "What's the setting, who are the characters, what's at stake?",
        options: [],
      },
      {
        id: "rising",
        name: "Rising Action",
        subtitle: "Complications build",
        prompt: "What challenges escalate the tension?",
        options: [],
      },
      {
        id: "climax",
        name: "Climax",
        subtitle: "The turning point",
        prompt: "What is the decisive moment?",
        options: [],
      },
      {
        id: "falling",
        name: "Falling Action",
        subtitle: "Consequences unfold",
        prompt: "How does the world respond to the climax?",
        options: [],
      },
      {
        id: "denouement",
        name: "Denouement",
        subtitle: "Resolution",
        prompt: "What's the new equilibrium?",
        options: [],
      },
    ],
  },
  jtbd: {
    id: "jtbd",
    name: "Jobs-to-be-Done",
    description: "Product positioning through customer motivation",
    category: "strategy",
    bestFor: "Product positioning, competitive analysis, pricing",
    icon: "\u{1F511}",
    tagline:
      "Why do customers hire your product? Map the motivation, not the feature.",
    beats: [
      {
        id: "situation",
        name: "The Situation",
        subtitle: "What triggers the need",
        prompt: "What circumstances create the need?",
        options: [],
      },
      {
        id: "motivation",
        name: "The Motivation",
        subtitle: "Functional, emotional, social",
        prompt: "What progress is the customer trying to make?",
        options: [],
      },
      {
        id: "outcome",
        name: "Expected Outcome",
        subtitle: "What success looks like",
        prompt: "How will the customer measure if the job is done?",
        options: [],
      },
      {
        id: "hiring",
        name: "Hiring Criteria",
        subtitle: "What drives the switch",
        prompt: "What factors determine which solution they choose?",
        options: [],
      },
      {
        id: "firing",
        name: "Firing Criteria",
        subtitle: "What causes churn",
        prompt: "When does the customer fire a solution?",
        options: [],
      },
    ],
  },
  kishotenketsu: {
    id: "kishotenketsu",
    name: "Kishōtenketsu",
    description: "Four-beat East Asian narrative — no conflict required",
    category: "storytelling",
    bestFor: "Product announcements, blog posts, no-conflict narratives",
    icon: "\u{1F38B}",
    tagline: "No villain, no conflict. Introduce, develop, twist, reconcile.",
    beats: [
      {
        id: "ki",
        name: "Ki (Introduction)",
        subtitle: "Present the subject",
        prompt: "What is the subject, clearly and simply?",
        options: [],
      },
      {
        id: "sho",
        name: "Shō (Development)",
        subtitle: "Add depth",
        prompt: "What details deepen understanding?",
        options: [],
      },
      {
        id: "ten",
        name: "Ten (Twist)",
        subtitle: "The unexpected shift",
        prompt: "What surprising connection or perspective emerges?",
        options: [],
      },
      {
        id: "ketsu",
        name: "Ketsu (Reconciliation)",
        subtitle: "Harmonize",
        prompt: "How does the twist enrich the original understanding?",
        options: [],
      },
    ],
  },
};

function corpusToContext(corpus: UserCorpus): string {
  const facts = corpus.extractedFacts.map((f) => f.claim);
  const parts: string[] = [];

  if (facts.length > 0) {
    parts.push(
      "Extracted facts:\n" + facts.map((f, i) => `${i + 1}. ${f}`).join("\n"),
    );
  }

  if (corpus.permissionBoundaries.length > 0) {
    parts.push(
      "Permission boundaries:\n" +
        corpus.permissionBoundaries.map((b) => `- ${b}`).join("\n"),
    );
  }

  // Include last few chat messages for context
  const recentChat = corpus.chatHistory.slice(-6);
  if (recentChat.length > 0) {
    parts.push(
      "Recent conversation:\n" +
        recentChat.map((m) => `${m.role}: ${m.content}`).join("\n\n"),
    );
  }

  return parts.join("\n\n---\n\n");
}

export async function selectFramework(
  client: LLMClient,
  corpus: UserCorpus,
  model?: string,
): Promise<FrameworkSelection> {
  const context = corpusToContext(corpus);

  const result = await client.chat([{ role: "user", content: context }], {
    systemPrompt: SELECT_FRAMEWORK,
    model,
    temperature: 0.3,
  });

  const trimmed = result.trim();
  const start = trimmed.indexOf("{");
  const end = trimmed.lastIndexOf("}");
  if (start === -1 || end === -1) {
    throw new Error("Failed to parse framework selection response");
  }

  const parsed = JSON.parse(trimmed.slice(start, end + 1));

  return {
    frameworkId: parsed.frameworkId ?? "raskin-8",
    frameworkName: parsed.frameworkName ?? "Andy Raskin 8-Beat",
    reasoning: parsed.reasoning ?? "Default framework selected",
    alternativeId: parsed.alternativeId ?? "",
    alternativeReason: parsed.alternativeReason ?? "",
  };
}

export function getFrameworkDefinition(
  frameworkId: string,
): FrameworkDefinition | null {
  return FRAMEWORK_BEATS[frameworkId] ?? null;
}

export function getAllFrameworkIds(): string[] {
  return Object.keys(FRAMEWORK_BEATS);
}

export function getAllFrameworks(): FrameworkDefinition[] {
  return Object.values(FRAMEWORK_BEATS);
}

export async function generateCustomFramework(
  client: LLMClient,
  corpus: UserCorpus,
  model?: string,
): Promise<FrameworkDefinition> {
  const context = corpusToContext(corpus);

  const result = await client.chat([{ role: "user", content: context }], {
    systemPrompt: GENERATE_CUSTOM_FRAMEWORK,
    model,
    temperature: 0.5,
  });

  const trimmed = result.trim();
  const start = trimmed.indexOf("{");
  const end = trimmed.lastIndexOf("}");
  if (start === -1 || end === -1) {
    throw new Error("Failed to parse custom framework response");
  }

  const parsed = JSON.parse(trimmed.slice(start, end + 1));

  return {
    id: parsed.frameworkId ?? "custom-generated",
    name: parsed.frameworkName ?? "Custom Framework",
    description: parsed.description ?? "AI-generated framework",
    category: "strategy" as FrameworkCategory,
    bestFor: "Custom — AI-generated for your specific situation",
    icon: "\u{1F9E9}",
    tagline: "Custom framework generated for your specific situation.",
    beats: (parsed.beats ?? []).map(
      (b: {
        id: string;
        name: string;
        subtitle?: string;
        prompt?: string;
      }) => ({
        id: b.id,
        name: b.name,
        subtitle: b.subtitle ?? "",
        prompt: b.prompt ?? "",
        options: [],
      }),
    ),
  };
}
