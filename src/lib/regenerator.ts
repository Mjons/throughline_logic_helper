import type { LLMClient } from "./llm-client";
import type { UserCorpus } from "./corpus";
import type { Beat, BeatOption, OptionSource } from "../types";
import { GENERATE_BEAT, buildBeatGenerationPrompt } from "./prompts";
import { genId } from "./corpus";

/**
 * Regenerate all options for a single beat.
 * Optionally accepts feedback to steer the regeneration.
 */
export async function regenerateBeat(
  client: LLMClient,
  beat: Beat,
  corpus: UserCorpus,
  optionsPerBeat: number,
  model: string | undefined,
  feedback?: string,
): Promise<BeatOption[]> {
  const facts = corpus.extractedFacts.map((f) => f.claim);
  const boundaries = corpus.permissionBoundaries;

  let userPrompt = buildBeatGenerationPrompt(
    beat.name,
    beat.subtitle ?? "",
    beat.prompt ?? "",
    facts,
    boundaries,
    optionsPerBeat,
  );

  if (feedback) {
    userPrompt += `\n\nUser feedback on previous generation:\n${feedback}\n\nTake this feedback into account when generating new options.`;
  }

  const result = await client.chat([{ role: "user", content: userPrompt }], {
    systemPrompt: GENERATE_BEAT.replace(
      "{optionCount}",
      String(optionsPerBeat),
    ),
    model,
    temperature: 0.7,
  });

  return parseBeatOptions(result, beat.id, model);
}

/**
 * Regenerate a single option within a beat.
 * Keeps all other options, replaces just the target one.
 */
export async function regenerateOption(
  client: LLMClient,
  beat: Beat,
  optionId: string,
  corpus: UserCorpus,
  model: string | undefined,
  feedback?: string,
): Promise<BeatOption | null> {
  const facts = corpus.extractedFacts.map((f) => f.claim);
  const boundaries = corpus.permissionBoundaries;
  const existingOption = beat.options.find((o) => o.id === optionId);

  const existingTitles = beat.options
    .filter((o) => o.id !== optionId)
    .map((o) => `- "${o.title}"`);

  let userPrompt = `Beat: "${beat.name}" — ${beat.subtitle ?? ""}
Prompt: ${beat.prompt ?? ""}

User's business context (extracted facts):
${facts.map((f, i) => `${i + 1}. ${f}`).join("\n")}

${boundaries.length > 0 ? `Permission boundaries (do NOT claim):\n${boundaries.map((b) => `- ${b}`).join("\n")}` : "No permission boundaries specified."}

Existing options for this beat (do NOT duplicate these):
${existingTitles.join("\n")}

${existingOption ? `The option being replaced was: "${existingOption.title}" — ${existingOption.description ?? ""}` : ""}

Generate exactly 1 new option that takes a DIFFERENT angle from the existing ones.`;

  if (feedback) {
    userPrompt += `\n\nUser feedback: ${feedback}`;
  }

  const systemPrompt = `You are generating a single replacement option for a beat in a narrative throughline.

Return ONLY a JSON object:
{
  "id": "kebab-case-id",
  "title": "sharp title under 15 words",
  "description": "2-4 sentences grounded in the user's situation",
  "sourceType": "user" or "research" or "hybrid",
  "spokenLine": "stageable spoken version, 1-2 sentences",
  "citations": ["fact 1", "fact 2"]
}`;

  const result = await client.chat([{ role: "user", content: userPrompt }], {
    systemPrompt,
    model,
    temperature: 0.8,
  });

  try {
    const trimmed = result.trim();
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start === -1 || end === -1) return null;

    const parsed = JSON.parse(trimmed.slice(start, end + 1));

    const source: OptionSource = {
      type:
        parsed.sourceType === "user" ||
        parsed.sourceType === "research" ||
        parsed.sourceType === "hybrid"
          ? parsed.sourceType
          : "hybrid",
      citations: parsed.citations ?? [],
      generatedBy: model ?? "unknown",
      generatedAt: new Date().toISOString(),
    };

    return {
      id: parsed.id || genId(`${beat.id}-regen`),
      title: parsed.title ?? "Regenerated option",
      description: parsed.description,
      spokenLine: parsed.spokenLine,
      source,
    };
  } catch {
    return null;
  }
}

// --- Shared parser ---

function parseBeatOptions(
  json: string,
  beatId: string,
  model: string | undefined,
): BeatOption[] {
  try {
    const trimmed = json.trim();
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start === -1 || end === -1) return [];

    const parsed = JSON.parse(trimmed.slice(start, end + 1));
    if (!parsed.options || !Array.isArray(parsed.options)) return [];

    return parsed.options.map(
      (opt: {
        id?: string;
        title: string;
        description?: string;
        sourceType?: string;
        spokenLine?: string;
        citations?: string[];
      }) => {
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
          id: opt.id || genId(`${beatId}-opt`),
          title: opt.title,
          description: opt.description,
          spokenLine: opt.spokenLine,
          source,
        };
      },
    );
  } catch {
    return [];
  }
}
