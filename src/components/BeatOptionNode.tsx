import { memo, useEffect, useState } from "react";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import type { OptionSource } from "../types";
import { SourceBadge } from "./SourceBadge";

export type BeatOptionData = {
  title: string;
  description?: string;
  selected: boolean;
  committed: boolean;
  beatId: string;
  optionId: string;
  source?: OptionSource;
  isGenerated?: boolean;
  regenerating?: boolean;
  onEdit?: (
    beatId: string,
    optionId: string,
    field: "title" | "description",
    value: string,
  ) => void;
  onRegenerateOption?: (beatId: string, optionId: string) => void;
  isUserTemplate?: boolean;
  sharpening?: boolean;
  onDeleteOption?: (beatId: string, optionId: string) => void;
  onSharpen?: (beatId: string, optionId: string) => void;
};

export type BeatOptionNodeType = Node<BeatOptionData, "beatOption">;

function Impl({ data }: NodeProps<BeatOptionNodeType>) {
  const [editing, setEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(data.title);
  const [draftDesc, setDraftDesc] = useState(data.description ?? "");

  useEffect(() => {
    if (!editing) {
      setDraftTitle(data.title);
      setDraftDesc(data.description ?? "");
    }
  }, [data.title, data.description, editing]);

  const sourceClass =
    data.source && data.source.type !== "manual"
      ? `has-source source-${data.source.type}`
      : "";

  const classes = [
    "beat-option",
    data.selected ? "selected" : "",
    data.committed ? "committed" : "",
    editing ? "editing" : "",
    sourceClass,
  ]
    .filter(Boolean)
    .join(" ");

  const stop = (e: React.SyntheticEvent) => e.stopPropagation();

  const commitTitle = () => {
    const next = draftTitle.trim();
    if (next && next !== data.title) {
      data.onEdit?.(data.beatId, data.optionId, "title", next);
    } else if (!next) {
      setDraftTitle(data.title);
    }
  };

  const commitDesc = () => {
    if (draftDesc !== (data.description ?? "")) {
      data.onEdit?.(data.beatId, data.optionId, "description", draftDesc);
    }
  };

  const cancelAll = () => {
    setDraftTitle(data.title);
    setDraftDesc(data.description ?? "");
    setEditing(false);
  };

  const finishEdit = () => {
    commitTitle();
    commitDesc();
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
      <Handle type="target" position={Position.Left} isConnectable={false} />
      {!data.committed ? (
        <button
          type="button"
          className="card-edit-btn"
          onClick={toggleEdit}
          onMouseDown={stop}
          onDoubleClick={stop}
          title={editing ? "Done editing" : "Edit this card"}
          aria-label={editing ? "Done editing" : "Edit this card"}
        >
          {editing ? "✓" : "✎"}
        </button>
      ) : null}
      {data.isUserTemplate && !data.committed && !editing && (
        <button
          type="button"
          className="card-delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            data.onDeleteOption?.(data.beatId, data.optionId);
          }}
          onMouseDown={stop}
          onDoubleClick={stop}
          title="Delete this option"
          aria-label="Delete option"
        >
          &times;
        </button>
      )}
      {data.onSharpen && !data.committed && !editing && (
        <button
          type="button"
          className={`card-sharpen-btn ${data.sharpening ? "loading" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            data.onSharpen?.(data.beatId, data.optionId);
          }}
          onMouseDown={stop}
          onDoubleClick={stop}
          disabled={data.sharpening}
          title="Sharpen this option — make it more specific and concise"
          aria-label="Sharpen option"
        >
          {data.sharpening ? "..." : "\u2726"}
        </button>
      )}
      {data.isGenerated && !data.committed && !editing && (
        <button
          type="button"
          className={`card-regen-btn ${data.regenerating ? "loading" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            data.onRegenerateOption?.(data.beatId, data.optionId);
          }}
          onMouseDown={stop}
          onDoubleClick={stop}
          disabled={data.regenerating}
          title="Regenerate this option"
          aria-label="Regenerate option"
        >
          {data.regenerating ? "..." : "\u21BB"}
        </button>
      )}
      {editing ? (
        <>
          <textarea
            className="beat-option-title editing nopan"
            value={draftTitle}
            onChange={(e) => setDraftTitle(e.target.value)}
            onBlur={commitTitle}
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
            rows={2}
            spellCheck
          />
          <textarea
            className="beat-option-desc editing nopan"
            value={draftDesc}
            onChange={(e) => setDraftDesc(e.target.value)}
            onBlur={commitDesc}
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
            placeholder="Description…"
          />
        </>
      ) : (
        <>
          <div className="beat-option-title">{data.title}</div>
          {data.description ? (
            <div className="beat-option-desc">{data.description}</div>
          ) : null}
          {data.source && data.source.type !== "manual" && (
            <SourceBadge source={data.source} />
          )}
        </>
      )}
      <Handle type="source" position={Position.Right} isConnectable={false} />
    </div>
  );
}

export const BeatOptionNode = memo(Impl);
