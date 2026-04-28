import { memo, useEffect, useState } from "react";
import type { Node, NodeProps } from "@xyflow/react";

export type BeatClusterData = {
  name: string;
  subtitle?: string;
  prompt?: string;
  contextHint?: string;
  beatIndex: number;
  committed: boolean;
  hasSelection: boolean;
  beatId: string;
  optionCount: number;
  isUserTemplate?: boolean;
  isGenerated?: boolean;
  regenerating?: boolean;
  onEdit?: (
    beatId: string,
    field: "name" | "subtitle" | "prompt",
    value: string,
  ) => void;
  onRegenerateBeat?: (beatId: string) => void;
  onAddOption?: (beatId: string) => void;
  onUpdateContextHint?: (beatId: string, hint: string) => void;
};

export type BeatClusterNodeType = Node<BeatClusterData, "beatCluster">;

function Impl({ data }: NodeProps<BeatClusterNodeType>) {
  const [editing, setEditing] = useState(false);
  const [draftName, setDraftName] = useState(data.name);
  const [draftSubtitle, setDraftSubtitle] = useState(data.subtitle ?? "");
  const [draftPrompt, setDraftPrompt] = useState(data.prompt ?? "");
  const [hintOpen, setHintOpen] = useState(!!data.contextHint);
  const [draftHint, setDraftHint] = useState(data.contextHint ?? "");

  useEffect(() => {
    if (!editing) {
      setDraftName(data.name);
      setDraftSubtitle(data.subtitle ?? "");
      setDraftPrompt(data.prompt ?? "");
    }
  }, [data.name, data.subtitle, data.prompt, editing]);

  const classes = [
    "beat-cluster",
    data.hasSelection ? "has-selection" : "",
    data.committed ? "committed" : "",
    editing ? "editing" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const stop = (e: React.SyntheticEvent) => e.stopPropagation();

  const commitName = () => {
    const next = draftName.trim();
    if (next && next !== data.name) {
      data.onEdit?.(data.beatId, "name", next);
    } else if (!next) {
      setDraftName(data.name);
    }
  };
  const commitSubtitle = () => {
    if (draftSubtitle !== (data.subtitle ?? "")) {
      data.onEdit?.(data.beatId, "subtitle", draftSubtitle);
    }
  };
  const commitPrompt = () => {
    if (draftPrompt !== (data.prompt ?? "")) {
      data.onEdit?.(data.beatId, "prompt", draftPrompt);
    }
  };

  const cancelAll = () => {
    setDraftName(data.name);
    setDraftSubtitle(data.subtitle ?? "");
    setDraftPrompt(data.prompt ?? "");
    setEditing(false);
  };

  const finishEdit = () => {
    commitName();
    commitSubtitle();
    commitPrompt();
    setEditing(false);
  };

  const toggleEdit = (e: React.MouseEvent) => {
    if (data.committed) return;
    e.stopPropagation();
    if (editing) finishEdit();
    else setEditing(true);
  };

  const onFieldKey = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "Escape") {
      e.preventDefault();
      cancelAll();
    }
  };

  const stopWheel = (e: React.WheelEvent) => e.stopPropagation();
  const stopClipboard = (e: React.ClipboardEvent) => e.stopPropagation();
  const stopKey = (e: React.KeyboardEvent) => e.stopPropagation();

  return (
    <div className={classes}>
      <div className="beat-cluster-header">
        {!data.committed ? (
          <button
            type="button"
            className="card-edit-btn"
            onClick={toggleEdit}
            onMouseDown={stop}
            onDoubleClick={stop}
            title={editing ? "Done editing" : "Edit this beat"}
            aria-label={editing ? "Done editing" : "Edit this beat"}
          >
            {editing ? "✓" : "✎"}
          </button>
        ) : null}
        <div className="beat-cluster-num">Beat {data.beatIndex + 1}</div>
        {editing ? (
          <>
            <textarea
              className="beat-cluster-name editing nopan"
              value={draftName}
              onChange={(e) => setDraftName(e.target.value)}
              onBlur={commitName}
              onKeyDown={onFieldKey}
              onKeyUp={stopKey}
              onClick={stop}
              onMouseDown={stop}
              onDoubleClick={stop}
              onWheel={stopWheel}
              onCopy={stopClipboard}
              onCut={stopClipboard}
              onPaste={stopClipboard}
              autoFocus
              rows={1}
              spellCheck
            />
            <textarea
              className="beat-cluster-subtitle editing nopan"
              value={draftSubtitle}
              onChange={(e) => setDraftSubtitle(e.target.value)}
              onBlur={commitSubtitle}
              onKeyDown={onFieldKey}
              onKeyUp={stopKey}
              onClick={stop}
              onMouseDown={stop}
              onDoubleClick={stop}
              onWheel={stopWheel}
              onCopy={stopClipboard}
              onCut={stopClipboard}
              onPaste={stopClipboard}
              rows={1}
              spellCheck
              placeholder="Subtitle…"
            />
            <textarea
              className="beat-cluster-prompt editing nopan"
              value={draftPrompt}
              onChange={(e) => setDraftPrompt(e.target.value)}
              onBlur={commitPrompt}
              onKeyDown={onFieldKey}
              onKeyUp={stopKey}
              onClick={stop}
              onMouseDown={stop}
              onDoubleClick={stop}
              onWheel={stopWheel}
              onCopy={stopClipboard}
              onCut={stopClipboard}
              onPaste={stopClipboard}
              rows={3}
              spellCheck
              placeholder="Prompt…"
            />
          </>
        ) : (
          <>
            <div className="beat-cluster-name">{data.name}</div>
            {data.subtitle ? (
              <div className="beat-cluster-subtitle">{data.subtitle}</div>
            ) : null}
            {data.prompt ? (
              <div className="beat-cluster-prompt">{data.prompt}</div>
            ) : null}
          </>
        )}
        {data.isUserTemplate && !data.committed && !editing && (
          <div className="beat-context-hint">
            {hintOpen ? (
              <textarea
                className="beat-context-textarea nopan"
                value={draftHint}
                onChange={(e) => setDraftHint(e.target.value)}
                onBlur={() => {
                  data.onUpdateContextHint?.(data.beatId, draftHint.trim());
                }}
                onKeyDown={(e) => {
                  e.stopPropagation();
                  if (e.key === "Escape") setHintOpen(false);
                }}
                onKeyUp={stopKey}
                onClick={stop}
                onMouseDown={stop}
                onDoubleClick={stop}
                onWheel={stopWheel}
                onCopy={stopClipboard}
                onCut={stopClipboard}
                onPaste={stopClipboard}
                placeholder="Add context for this beat (e.g. 'Focus on regulatory obstacles, not competitors')"
                rows={2}
                spellCheck
              />
            ) : (
              <button
                className="beat-context-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  setHintOpen(true);
                }}
                onMouseDown={stop}
              >
                {data.contextHint
                  ? "Context: " +
                    data.contextHint.slice(0, 40) +
                    (data.contextHint.length > 40 ? "..." : "")
                  : "+ Add context"}
              </button>
            )}
          </div>
        )}
        {data.isGenerated && !data.committed && !editing && (
          <button
            type="button"
            className={`regen-beat-btn ${data.regenerating ? "loading" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              data.onRegenerateBeat?.(data.beatId);
            }}
            onMouseDown={stop}
            disabled={data.regenerating}
            title="Regenerate all options for this beat"
            aria-label="Regenerate beat"
          >
            {data.regenerating ? "..." : "\u21BB"}
          </button>
        )}
      </div>
      {data.optionCount === 0 && !data.committed && (
        <div className="beat-cluster-empty">
          <div className="beat-cluster-empty-text">No options yet</div>
        </div>
      )}
      {data.isUserTemplate && !data.committed && !editing && (
        <button
          type="button"
          className="add-option-btn"
          onClick={(e) => {
            e.stopPropagation();
            data.onAddOption?.(data.beatId);
          }}
          onMouseDown={stop}
          title="Add a new option card"
          aria-label="Add option"
        >
          +
        </button>
      )}
    </div>
  );
}

export const BeatClusterNode = memo(Impl);
