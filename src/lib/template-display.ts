import type { Template } from "../types";

/**
 * Format: "Title — Framework / Audience"
 * Static templates (no title, no audience) show just their name.
 * User templates always show the full format.
 */
export function displayName(t: Template): string {
  if (!t.title && !t.audience) return t.name;
  const title = t.title || "Untitled";
  const right = t.audience ? `${t.name} / ${t.audience}` : t.name;
  return `${title} \u2014 ${right}`;
}
