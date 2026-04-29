import type { LLMClient } from "./llm-client";
import type { UserCorpus } from "./corpus";
import type {
  Template,
  ToneLevel,
  BeatOption,
  Beat,
  OptionSource,
} from "../types";
import type { FrameworkDefinition } from "./template-selector";
import {
  GENERATE_BEAT,
  buildBeatGenerationPrompt,
  tonePrompt,
} from "./prompts";
import { genId } from "./corpus";

export type GenerationProgress = {
  stage: "selecting" | "generating" | "done" | "error";
  currentBeat?: number;
  totalBeats?: number;
  completedBeats: number;
  error?: string;
};

export type GeneratedTemplate = Template & {
  generatedFrom: {
    corpusId: string;
    frameworkId: string;
    timestamp: string;
  };
};

type BeatGenerationResult = {
  options: {
    id: string;
    title: string;
    description: string;
    sourceType: "user" | "research" | "hybrid";
    spokenLine?: string;
    citations: string[];
  }[];
  recommendation: {
    recommendedId: string;
    recommendedReason: string;
  };
};

function parseBeatResult(json: string): BeatGenerationResult | null {
  try {
    const trimmed = json.trim();
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start === -1 || end === -1) return null;

    const parsed = JSON.parse(trimmed.slice(start, end + 1));
    if (!parsed.options || !Array.isArray(parsed.options)) return null;

    return parsed as BeatGenerationResult;
  } catch {
    return null;
  }
}

async function generateBeatOptions(
  client: LLMClient,
  beat: Beat,
  corpus: UserCorpus,
  optionCount: number,
  model?: string,
  tone?: ToneLevel,
): Promise<BeatOption[]> {
  const facts = corpus.extractedFacts.map((f) => f.claim);
  const boundaries = corpus.permissionBoundaries;

  const userPrompt = buildBeatGenerationPrompt(
    beat.name,
    beat.subtitle ?? "",
    beat.prompt ?? "",
    facts,
    boundaries,
    optionCount,
  );

  const result = await client.chat([{ role: "user", content: userPrompt }], {
    systemPrompt:
      GENERATE_BEAT.replace("{optionCount}", String(optionCount)) +
      tonePrompt(tone),
    model,
    temperature: 0.7,
  });

  const parsed = parseBeatResult(result);
  if (!parsed) {
    // Fallback: create a single placeholder option
    return [
      {
        id: genId(`${beat.id}-fallback`),
        title: "Generation failed — edit manually",
        description:
          "The AI was unable to generate options for this beat. You can edit this card or regenerate.",
        source: { type: "manual" },
      },
    ];
  }

  const recommendedId = parsed.recommendation?.recommendedId;

  return parsed.options.map((opt) => {
    const source: OptionSource = {
      type:
        opt.sourceType === "user" ||
        opt.sourceType === "research" ||
        opt.sourceType === "hybrid"
          ? opt.sourceType
          : "hybrid",
      citations: opt.citations ?? [],
      generatedBy: model ?? "unknown",
      generatedAt: new Date().toISOString(),
    };

    return {
      id: opt.id || genId(`${beat.id}-opt`),
      title: opt.title,
      description: opt.description,
      spokenLine: opt.spokenLine,
      chosen: opt.id === recommendedId,
      source,
    };
  });
}

export async function generateThroughline(
  client: LLMClient,
  framework: FrameworkDefinition,
  corpus: UserCorpus,
  optionsPerBeat: number,
  model: string | undefined,
  onProgress: (progress: GenerationProgress) => void,
  tone?: ToneLevel,
): Promise<GeneratedTemplate> {
  const totalBeats = framework.beats.length;
  onProgress({ stage: "generating", completedBeats: 0, totalBeats });

  // Generate all beats in parallel
  const beatPromises = framework.beats.map(async (beat, index) => {
    const options = await generateBeatOptions(
      client,
      beat,
      corpus,
      optionsPerBeat,
      model,
      tone,
    );
    onProgress({
      stage: "generating",
      currentBeat: index,
      totalBeats,
      completedBeats: index + 1, // approximate — parallel so this is best-effort
    });
    return { ...beat, options };
  });

  const completedBeats = await Promise.all(beatPromises);

  onProgress({ stage: "done", completedBeats: totalBeats, totalBeats });

  return {
    id: `generated-${framework.id}-${Date.now()}`,
    name: `${framework.name} — Generated`,
    description: `AI-generated throughline using the ${framework.name} framework`,
    beats: completedBeats,
    generatedFrom: {
      corpusId: "current",
      frameworkId: framework.id,
      timestamp: new Date().toISOString(),
    },
  };
}
