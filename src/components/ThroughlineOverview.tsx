import type { Template } from "../types";

type OptionOverride = { title?: string; description?: string };
type ClusterOverride = { name?: string; subtitle?: string; prompt?: string };
type BeatOverride = {
  cluster?: ClusterOverride;
  options?: Record<string, OptionOverride>;
};
type TemplateOverrides = Record<string, BeatOverride>;

export type PerTemplateState = {
  selections: Record<string, string>;
  committed: boolean;
  overrides?: TemplateOverrides;
};

type Props = {
  templates: Template[];
  perTemplate: Record<string, PerTemplateState>;
  activeTemplateId: string;
  onOpenTemplate: (id: string) => void;
};

function name(beat: Template["beats"][number], o?: BeatOverride) {
  return o?.cluster?.name ?? beat.name;
}

function optionTitle(
  opt: Template["beats"][number]["options"][number],
  o?: OptionOverride,
) {
  return o?.title ?? opt.title;
}

function optionDesc(
  opt: Template["beats"][number]["options"][number],
  o?: OptionOverride,
) {
  return o?.description !== undefined ? o.description : opt.description;
}

export function ThroughlineOverview({
  templates,
  perTemplate,
  activeTemplateId,
  onOpenTemplate,
}: Props) {
  return (
    <div className="overview">
      <div className="overview-header">
        <h2>All throughlines</h2>
        <div className="overview-hint">
          Side-by-side view of every template. Click a throughline to open it in
          the canvas.
        </div>
      </div>

      <div className="overview-grid">
        {templates.map((template) => {
          const state = perTemplate[template.id];
          const selections = state?.selections ?? {};
          const committed = !!state?.committed;
          const overrides = state?.overrides ?? {};
          const total = template.beats.length;
          const chosenCount = template.beats.reduce(
            (n, b) => n + (selections[b.id] ? 1 : 0),
            0,
          );
          const status = committed
            ? "committed"
            : chosenCount === 0
              ? "empty"
              : chosenCount === total
                ? "ready"
                : "partial";

          return (
            <section
              key={template.id}
              className={`ov-card ${status} ${template.id === activeTemplateId ? "active" : ""}`}
              onClick={() => onOpenTemplate(template.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenTemplate(template.id);
                }
              }}
            >
              <header className="ov-card-header">
                <h3>{template.name}</h3>
                <div className="ov-status">
                  {committed ? (
                    <span className="ov-badge committed">Committed</span>
                  ) : chosenCount === total ? (
                    <span className="ov-badge ready">
                      Ready · not committed
                    </span>
                  ) : chosenCount > 0 ? (
                    <span className="ov-badge partial">
                      {chosenCount} / {total}
                    </span>
                  ) : (
                    <span className="ov-badge empty">Not started</span>
                  )}
                </div>
              </header>

              <p className="ov-card-desc">{template.description}</p>

              <ol className="ov-beats">
                {template.beats.map((beat, i) => {
                  const oBeat = overrides[beat.id];
                  const chosenId = selections[beat.id];
                  const chosen = beat.options.find((o) => o.id === chosenId);
                  const chosenO = chosen
                    ? oBeat?.options?.[chosen.id]
                    : undefined;
                  return (
                    <li key={beat.id} className={chosen ? "" : "unchosen"}>
                      <div className="ov-beat-row">
                        <span className="ov-beat-num">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="ov-beat-name">
                          {name(beat, oBeat)}
                        </span>
                      </div>
                      {chosen ? (
                        <>
                          <div className="ov-beat-choice">
                            {optionTitle(chosen, chosenO)}
                          </div>
                          {optionDesc(chosen, chosenO) ? (
                            <div className="ov-beat-desc">
                              {optionDesc(chosen, chosenO)}
                            </div>
                          ) : null}
                        </>
                      ) : (
                        <div className="ov-beat-choice empty">(unchosen)</div>
                      )}
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}
      </div>
    </div>
  );
}
