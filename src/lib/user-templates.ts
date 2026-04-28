import type { Template } from "../types";

const STORAGE_KEY = "throughline:user-templates";

/**
 * Load all user-created and AI-generated templates from localStorage.
 */
export function loadUserTemplates(): Template[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Clean up legacy "— New" suffix from older templates
    return parsed.map((t: Template) => ({
      ...t,
      name: t.name.replace(/ — New$/, ""),
    }));
  } catch {
    return [];
  }
}

/**
 * Save the full array of user templates to localStorage.
 */
export function saveUserTemplates(templates: Template[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
  } catch {
    // quota or privacy mode
  }
}

/**
 * Add a template and persist.
 */
export function addUserTemplate(template: Template): Template[] {
  const existing = loadUserTemplates();
  const updated = [...existing, template];
  saveUserTemplates(updated);
  return updated;
}

/**
 * Remove a template by ID and persist. Returns the updated list.
 */
export function removeUserTemplate(templateId: string): Template[] {
  const existing = loadUserTemplates();
  const updated = existing.filter((t) => t.id !== templateId);
  saveUserTemplates(updated);
  return updated;
}

/**
 * Rename a template and persist. Returns the updated list.
 */
export function renameUserTemplate(
  templateId: string,
  newName: string,
): Template[] {
  const existing = loadUserTemplates();
  const updated = existing.map((t) =>
    t.id === templateId ? { ...t, name: newName } : t,
  );
  saveUserTemplates(updated);
  return updated;
}

/**
 * Update a template in place (e.g., after regeneration changes beats).
 */
export function updateUserTemplate(template: Template): Template[] {
  const existing = loadUserTemplates();
  const idx = existing.findIndex((t) => t.id === template.id);
  const updated =
    idx >= 0
      ? existing.map((t) => (t.id === template.id ? template : t))
      : [...existing, template];
  saveUserTemplates(updated);
  return updated;
}

/**
 * Check if a template ID belongs to a user-managed template.
 */
export function isUserTemplate(templateId: string): boolean {
  return loadUserTemplates().some((t) => t.id === templateId);
}
