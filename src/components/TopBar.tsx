import type { Template } from "../types";
import { displayName } from "../lib/template-display";

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
  onAlignThroughline: () => void;
  hasSelections: boolean;
  hasApiKey: boolean;
  onOpenSettings: () => void;
  onOpenIngest: () => void;
  ingestOpen: boolean;
  onNewTemplate: () => void;
  onDeleteTemplate?: (id: string) => void;
  canDeleteTemplate?: boolean;
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
  onAlignThroughline,
  hasSelections,
  hasApiKey,
  onOpenSettings,
  onOpenIngest,
  ingestOpen,
  onNewTemplate,
  onDeleteTemplate,
  canDeleteTemplate,
}: Props) {
  const active = templates.find((t) => t.id === templateId);

  return (
    <header className="top-bar">
      <div className="tb-left">
        <h1>Throughline</h1>
        <span className="tb-sub">AI-powered narrative architect</span>
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
                {displayName(t)}
              </option>
            ))}
          </select>
          <button
            className="tb-btn tb-btn-sm"
            onClick={onNewTemplate}
            title="Create a new blank throughline from a framework"
          >
            +
          </button>
          {canDeleteTemplate && onDeleteTemplate && (
            <button
              className="tb-btn tb-btn-sm danger"
              onClick={() => {
                if (
                  confirm("Delete this throughline? This cannot be undone.")
                ) {
                  onDeleteTemplate(templateId);
                }
              }}
              title="Delete this throughline"
            >
              &times;
            </button>
          )}
        </div>

        {view === "canvas" && hasApiKey && (
          <button
            className={`tb-btn ${ingestOpen ? "active" : ""}`}
            onClick={onOpenIngest}
            title="Open the AI agent to build a throughline from your business context"
          >
            {ingestOpen ? "Close agent" : "Agent"}
          </button>
        )}

        {view === "canvas" && hasSelections && (
          <button
            className="tb-btn"
            onClick={onAlignThroughline}
            title="Top-align all selected cards in the throughline"
          >
            Align
          </button>
        )}

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

        <button
          className={`tb-btn tb-btn-icon ${hasApiKey ? "has-key" : ""}`}
          onClick={onOpenSettings}
          title={hasApiKey ? "API key configured" : "Set up your API key"}
          aria-label="API settings"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6.8 1.6h2.4l.35 2.1 1.8.75 1.7-1.25 1.7 1.7-1.25 1.7.75 1.8 2.1.35v2.4l-2.1.35-.75 1.8 1.25 1.7-1.7 1.7-1.7-1.25-1.8.75-.35 2.1H6.8l-.35-2.1-1.8-.75-1.7 1.25-1.7-1.7 1.25-1.7-.75-1.8L.65 9.2V6.8l2.1-.35.75-1.8L2.25 2.95l1.7-1.7 1.7 1.25 1.8-.75z" />
            <circle cx="8" cy="8" r="2.2" />
          </svg>
        </button>
      </div>
    </header>
  );
}
