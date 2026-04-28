import { useState } from "react";
import type { Template, OptionSourceType } from "../types";

type OptionOverride = { title?: string; description?: string };
type ClusterOverride = { name?: string; subtitle?: string; prompt?: string };
type BeatOverride = {
  cluster?: ClusterOverride;
  options?: Record<string, OptionOverride>;
};
type TemplateOverrides = Record<string, BeatOverride>;

type Props = {
  template: Template;
  selections: Record<string, string>;
  committed: boolean;
  overrides: TemplateOverrides;
  canEditMeta?: boolean;
  onReset: () => void;
  onExport: () => void;
  onCopyMarkdown: () => void;
  onCopyAll: () => void;
  onUpdateMeta?: (fields: { name?: string; audience?: string }) => void;
};

export function SidePanel({
  template,
  selections,
  committed,
  overrides,
  canEditMeta,
  onReset,
  onExport,
  onCopyMarkdown,
  onCopyAll,
  onUpdateMeta,
}: Props) {
  const chosenCount = Object.keys(selections).length;
  const total = template.beats.length;

  // Source breakdown across all options in the template
  const sourceCounts: Record<OptionSourceType | "none", number> = {
    user: 0,
    research: 0,
    hybrid: 0,
    manual: 0,
    none: 0,
  };
  for (const beat of template.beats) {
    for (const opt of beat.options) {
      if (opt.source) sourceCounts[opt.source.type]++;
      else sourceCounts.none++;
    }
  }
  const hasSourceData =
    sourceCounts.user + sourceCounts.research + sourceCounts.hybrid > 0;

  const [editingTitle, setEditingTitle] = useState(false);
  const [draftTitle, setDraftTitle] = useState(template.title ?? "");
  const [editingAudience, setEditingAudience] = useState(false);
  const [draftAudience, setDraftAudience] = useState(template.audience ?? "");

  const commitTitle = () => {
    const trimmed = draftTitle.trim();
    if (trimmed !== (template.title ?? "")) {
      onUpdateMeta?.({ title: trimmed || undefined });
    }
    setEditingTitle(false);
  };

  const commitAudience = () => {
    const trimmed = draftAudience.trim();
    if (trimmed !== (template.audience ?? "")) {
      onUpdateMeta?.({ audience: trimmed });
    }
    setEditingAudience(false);
  };

  return (
    <aside className="side-panel">
      <div className="sp-header">
        {canEditMeta ? (
          <>
            {editingTitle ? (
              <input
                className="sp-title-input"
                value={draftTitle}
                onChange={(e) => setDraftTitle(e.target.value)}
                onBlur={commitTitle}
                onKeyDown={(e) => {
                  if (e.key === "Enter") commitTitle();
                  if (e.key === "Escape") {
                    setDraftTitle(template.title ?? "");
                    setEditingTitle(false);
                  }
                }}
                autoFocus
                placeholder="Name your throughline..."
                spellCheck
              />
            ) : (
              <h2
                className="sp-title-editable"
                onClick={() => {
                  setDraftTitle(template.title ?? "");
                  setEditingTitle(true);
                }}
                title="Click to name this throughline"
              >
                {template.title || "Untitled"}
              </h2>
            )}
            <div className="sp-framework-label">{template.name}</div>
          </>
        ) : (
          <h2>{template.name}</h2>
        )}

        {canEditMeta && (
          <div className="sp-audience-row">
            <span className="sp-audience-label">Audience</span>
            {editingAudience ? (
              <input
                className="sp-audience-input"
                value={draftAudience}
                onChange={(e) => setDraftAudience(e.target.value)}
                onBlur={commitAudience}
                onKeyDown={(e) => {
                  if (e.key === "Enter") commitAudience();
                  if (e.key === "Escape") {
                    setDraftAudience(template.audience ?? "");
                    setEditingAudience(false);
                  }
                }}
                autoFocus
                placeholder="e.g. Investor, Customer, Partner..."
                spellCheck
              />
            ) : (
              <span
                className="sp-audience-value"
                onClick={() => {
                  setDraftAudience(template.audience ?? "");
                  setEditingAudience(true);
                }}
                title="Click to set audience"
              >
                {template.audience || "Set audience..."}
              </span>
            )}
          </div>
        )}

        <div className="sp-hint">
          {committed
            ? "Locked. Your narrative is committed."
            : `Pick one option per beat · ${chosenCount} / ${total} chosen`}
        </div>
      </div>

      {hasSourceData && (
        <div className="sp-sources">
          <div className="sp-sources-label">Sources</div>
          <div className="sp-sources-row">
            {sourceCounts.user > 0 && (
              <span className="sp-source-tag source-user">
                {sourceCounts.user} from your docs
              </span>
            )}
            {sourceCounts.research > 0 && (
              <span className="sp-source-tag source-research">
                {sourceCounts.research} from research
              </span>
            )}
            {sourceCounts.hybrid > 0 && (
              <span className="sp-source-tag source-hybrid">
                {sourceCounts.hybrid} hybrid
              </span>
            )}
            {sourceCounts.manual > 0 && (
              <span className="sp-source-tag source-manual">
                {sourceCounts.manual} manual
              </span>
            )}
          </div>
        </div>
      )}

      <div className="sp-beats">
        {template.beats.map((beat, i) => {
          const chosenId = selections[beat.id];
          const chosen = beat.options.find((o) => o.id === chosenId);
          const oBeat = overrides[beat.id];
          const name = oBeat?.cluster?.name ?? beat.name;
          const chosenTitle =
            chosen && oBeat?.options?.[chosen.id]?.title !== undefined
              ? oBeat.options[chosen.id].title!
              : chosen?.title;
          const chosenDesc =
            chosen && oBeat?.options?.[chosen.id]?.description !== undefined
              ? oBeat.options[chosen.id].description
              : chosen?.description;
          return (
            <div key={beat.id} className={`sp-beat ${chosen ? "chosen" : ""}`}>
              <div className="sp-beat-top">
                <span className="sp-beat-num">Beat {i + 1}</span>
                <span className="sp-beat-name">{name}</span>
              </div>
              <div className={`sp-beat-choice ${chosen ? "" : "empty"}`}>
                {chosen ? chosenTitle : "Not yet chosen"}
              </div>
              {chosenDesc ? (
                <div className="sp-beat-desc">{chosenDesc}</div>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="sp-actions">
        <button onClick={onReset} disabled={!committed && chosenCount === 0}>
          Reset
        </button>
        <button onClick={onCopyMarkdown} disabled={chosenCount === 0}>
          Copy MD
        </button>
        <button onClick={onCopyAll}>Copy All</button>
        <button onClick={onExport} disabled={chosenCount === 0}>
          Export JSON
        </button>
      </div>
    </aside>
  );
}
