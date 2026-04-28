import type { Message } from "./llm-client";

export type ExtractedFact = {
  id: string;
  claim: string;
  sourceDocId: string;
  confidence: "verbatim" | "inferred" | "uncertain";
};

export type SourceDocument = {
  id: string;
  type: "chat" | "paste" | "file" | "url";
  content: string;
  title?: string;
  timestamp: string;
};

export type CoverageDimension =
  | "product_or_service"
  | "customer_persona"
  | "problem"
  | "differentiation"
  | "evidence"
  | "audience"
  | "context"
  | "permission_boundaries";

export type CoverageStatus = "covered" | "partial" | "missing";

export type UserCorpus = {
  documents: SourceDocument[];
  extractedFacts: ExtractedFact[];
  chatHistory: Message[];
  coverage: Record<CoverageDimension, CoverageStatus>;
  permissionBoundaries: string[];
};

export function createEmptyCorpus(): UserCorpus {
  return {
    documents: [],
    extractedFacts: [],
    chatHistory: [],
    coverage: {
      product_or_service: "missing",
      customer_persona: "missing",
      problem: "missing",
      differentiation: "missing",
      evidence: "missing",
      audience: "missing",
      context: "missing",
      permission_boundaries: "missing",
    },
    permissionBoundaries: [],
  };
}

let idCounter = 0;
export function genId(prefix: string): string {
  return `${prefix}-${Date.now()}-${++idCounter}`;
}

// --- Persistence ---

function storageKey(templateId: string): string {
  return `throughline:corpus:${templateId}`;
}

export function loadCorpus(templateId: string): UserCorpus | null {
  try {
    const raw = localStorage.getItem(storageKey(templateId));
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveCorpus(templateId: string, corpus: UserCorpus) {
  try {
    localStorage.setItem(storageKey(templateId), JSON.stringify(corpus));
  } catch {
    // quota or privacy mode
  }
}

export function clearCorpus(templateId: string) {
  localStorage.removeItem(storageKey(templateId));
}

// --- Fact parsing ---

export function parseFacts(json: string, sourceDocId: string): ExtractedFact[] {
  try {
    const trimmed = json.trim();
    const start = trimmed.indexOf("[");
    const end = trimmed.lastIndexOf("]");
    if (start === -1 || end === -1) return [];

    const arr = JSON.parse(trimmed.slice(start, end + 1));
    if (!Array.isArray(arr)) return [];

    return arr
      .filter(
        (f: unknown) =>
          f &&
          typeof f === "object" &&
          "claim" in (f as Record<string, unknown>),
      )
      .map((f: { claim: string; confidence?: string }) => ({
        id: genId("fact"),
        claim: f.claim,
        sourceDocId,
        confidence:
          f.confidence === "verbatim" ||
          f.confidence === "inferred" ||
          f.confidence === "uncertain"
            ? f.confidence
            : "inferred",
      }));
  } catch {
    return [];
  }
}

// --- Coverage parsing ---

export function parseCoverage(
  json: string,
): Record<CoverageDimension, CoverageStatus> | null {
  try {
    const trimmed = json.trim();
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start === -1 || end === -1) return null;

    const obj = JSON.parse(trimmed.slice(start, end + 1));
    const dims: CoverageDimension[] = [
      "product_or_service",
      "customer_persona",
      "problem",
      "differentiation",
      "evidence",
      "audience",
      "context",
      "permission_boundaries",
    ];
    const result = {} as Record<CoverageDimension, CoverageStatus>;
    for (const d of dims) {
      const v = obj[d];
      result[d] =
        v === "covered" || v === "partial" || v === "missing" ? v : "missing";
    }
    return result;
  } catch {
    return null;
  }
}

export function coverageScore(
  coverage: Record<CoverageDimension, CoverageStatus>,
): number {
  const weights: Record<CoverageStatus, number> = {
    covered: 1,
    partial: 0.5,
    missing: 0,
  };
  const dims = Object.values(coverage);
  return dims.reduce((sum, s) => sum + weights[s], 0) / dims.length;
}

export const COVERAGE_LABELS: Record<CoverageDimension, string> = {
  product_or_service: "Product / Service",
  customer_persona: "Customer",
  problem: "Problem",
  differentiation: "Differentiation",
  evidence: "Evidence",
  audience: "Audience",
  context: "Context",
  permission_boundaries: "Boundaries",
};
