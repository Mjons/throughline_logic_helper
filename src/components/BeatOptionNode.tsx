import { memo, useEffect, useState } from "react";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

export type BeatOptionData = {
  title: string;
  description?: string;
  selected: boolean;
  committed: boolean;
  beatId: string;
  optionId: string;
  onEdit?: (
    beatId: string,
    optionId: string,
    field: "title" | "description",
    value: string,
  ) => void;
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

  const classes = [
    "beat-option",
    data.selected ? "selected" : "",
    data.committed ? "committed" : "",
    editing ? "editing" : "",
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
    if (e.key === "Escape") {
      e.preventDefault();
      cancelAll();
    }
  };

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
      {editing ? (
        <>
          <textarea
            className="beat-option-title editing"
            value={draftTitle}
            onChange={(e) => setDraftTitle(e.target.value)}
            onBlur={commitTitle}
            onKeyDown={onFieldKey}
            onClick={stop}
            onMouseDown={stop}
            onDoubleClick={stop}
            autoFocus
            rows={2}
            spellCheck
          />
          <textarea
            className="beat-option-desc editing"
            value={draftDesc}
            onChange={(e) => setDraftDesc(e.target.value)}
            onBlur={commitDesc}
            onKeyDown={onFieldKey}
            onClick={stop}
            onMouseDown={stop}
            onDoubleClick={stop}
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
        </>
      )}
      <Handle type="source" position={Position.Right} isConnectable={false} />
    </div>
  );
}

export const BeatOptionNode = memo(Impl);
