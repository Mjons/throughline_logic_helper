import type { Template } from "../types";
import { sampleTemplate } from "./sample";

export const templates: Template[] = [sampleTemplate];

export function getTemplate(id: string): Template | undefined {
  return templates.find((t) => t.id === id);
}
