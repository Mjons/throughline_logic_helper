import type { Template } from "../types";

/**
 * Format template display name as "Title — Framework"
 * Falls back to just the framework name if no title is set.
 */
export function displayName(t: Template): string {
  if (t.title) return `${t.title} — ${t.name}`;
  return t.name;
}
