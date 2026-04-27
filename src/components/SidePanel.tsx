import type { Template } from "../types";

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
  onReset: () => void;
  onExport: () => void;
  onCopyMarkdown: () => void;
  onCopyAll: () => void;
};

export function SidePanel({
  template,
  selections,
  committed,
  overrides,
  onReset,
  onExport,
  onCopyMarkdown,
  onCopyAll,
}: Props) {
  const chosenCount = Object.keys(selections).length;
  const total = template.beats.length;

  return (
    <aside className="side-panel">
      <div className="sp-header">
        <h2>Throughline</h2>
        <div className="sp-hint">
          {committed
            ? "Locked. Your narrative is committed."
            : `Pick one option per beat · ${chosenCount} / ${total} chosen`}
        </div>
      </div>

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
