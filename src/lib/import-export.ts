import type { Template } from "../types";
import { type UserCorpus, loadCorpus } from "./corpus";

type TemplateOverrides = Record<
  string,
  {
    cluster?: { name?: string; subtitle?: string; prompt?: string };
    options?: Record<string, { title?: string; description?: string }>;
  }
>;

export type ThroughlineExport = {
  version: 1;
  exportedAt: string;
  template: Template;
  selections: Record<string, string>;
  committed: boolean;
  overrides: TemplateOverrides;
  corpus: UserCorpus | null;
};

/**
 * Export a throughline as a downloadable JSON file.
 */
export function exportThroughline(
  template: Template,
  selections: Record<string, string>,
  committed: boolean,
  overrides: TemplateOverrides,
  includeCorpus: boolean,
): void {
  const corpus = includeCorpus ? loadCorpus(template.id) : null;

  const data: ThroughlineExport = {
    version: 1,
    exportedAt: new Date().toISOString(),
    template,
    selections,
    committed,
    overrides,
    corpus,
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const safeName = (template.title || template.name)
    .replace(/[^a-zA-Z0-9_-]/g, "_")
    .slice(0, 50);
  a.download = `${safeName}.throughline.json`;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Import a throughline from a .throughline.json file.
 * Returns the parsed data or null if invalid.
 */
export async function importThroughline(
  file: File,
): Promise<ThroughlineExport | null> {
  try {
    const text = await file.text();
    const data = JSON.parse(text);

    // Validate basic structure
    if (!data.template || !data.template.id || !data.template.beats) {
      return null;
    }
    if (!Array.isArray(data.template.beats)) {
      return null;
    }

    // Assign a new ID so it doesn't collide with existing templates
    const imported: ThroughlineExport = {
      version: data.version ?? 1,
      exportedAt: data.exportedAt ?? new Date().toISOString(),
      template: {
        ...data.template,
        id: `imported-${Date.now()}`,
      },
      selections: data.selections ?? {},
      committed: data.committed ?? false,
      overrides: data.overrides ?? {},
      corpus: data.corpus ?? null,
    };

    return imported;
  } catch {
    return null;
  }
}
