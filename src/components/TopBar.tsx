import type { Template } from "../types";

type Props = {
  templates: Template[];
  templateId: string;
  onTemplateChange: (id: string) => void;
  committed: boolean;
  canCommit: boolean;
  onCommit: () => void;
  onUncommit: () => void;
  view: "canvas" | "overview";
  onToggleView: () => void;
};

export function TopBar({
  templates,
  templateId,
  onTemplateChange,
  committed,
  canCommit,
  onCommit,
  onUncommit,
  view,
  onToggleView,
}: Props) {
  const active = templates.find((t) => t.id === templateId);

  return (
    <header className="top-bar">
      <div className="tb-left">
        <h1>Throughline</h1>
        {active ? <span className="tb-sub">{active.description}</span> : null}
      </div>
      <div className="tb-tools">
        <div className="tb-select-group">
          <label>Template</label>
          <select
            value={templateId}
            onChange={(e) => onTemplateChange(e.target.value)}
            disabled={committed || view === "overview"}
          >
            {templates.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
        <button
          className={`tb-btn ${view === "overview" ? "active" : ""}`}
          onClick={onToggleView}
          title="Side-by-side view of every throughline"
        >
          {view === "overview" ? "Back to canvas" : "All throughlines"}
        </button>
        {view === "canvas" ? (
          committed ? (
            <button className="tb-btn" onClick={onUncommit}>
              Edit
            </button>
          ) : (
            <button
              className="tb-btn primary"
              onClick={onCommit}
              disabled={!canCommit}
              title={
                canCommit
                  ? "Lock in your throughline"
                  : "Choose one option per beat first"
              }
            >
              Commit throughline
            </button>
          )
        ) : null}
      </div>
    </header>
  );
}
