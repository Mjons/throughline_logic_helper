import { memo, useEffect, useState } from "react";
import type { Node, NodeProps } from "@xyflow/react";

export type BeatClusterData = {
  name: string;
  subtitle?: string;
  prompt?: string;
  beatIndex: number;
  committed: boolean;
  hasSelection: boolean;
  beatId: string;
  isGenerated?: boolean;
  regenerating?: boolean;
  onEdit?: (
    beatId: string,
    field: "name" | "subtitle" | "prompt",
    value: string,
  ) => void;
  onRegenerateBeat?: (beatId: string) => void;
};

export type BeatClusterNodeType = Node<BeatClusterData, "beatCluster">;

function Impl({ data }: NodeProps<BeatClusterNodeType>) {
  const [editing, setEditing] = useState(false);
  const [draftName, setDraftName] = useState(data.name);
  const [draftSubtitle, setDraftSubtitle] = useState(data.subtitle ?? "");
  const [draftPrompt, setDraftPrompt] = useState(data.prompt ?? "");

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
    if (e.key === "Escape") {
      e.preventDefault();
      cancelAll();
    }
  };

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
              className="beat-cluster-name editing"
              value={draftName}
              onChange={(e) => setDraftName(e.target.value)}
              onBlur={commitName}
              onKeyDown={onFieldKey}
              onClick={stop}
              onMouseDown={stop}
              onDoubleClick={stop}
              autoFocus
              rows={1}
              spellCheck
            />
            <textarea
              className="beat-cluster-subtitle editing"
              value={draftSubtitle}
              onChange={(e) => setDraftSubtitle(e.target.value)}
              onBlur={commitSubtitle}
              onKeyDown={onFieldKey}
              onClick={stop}
              onMouseDown={stop}
              onDoubleClick={stop}
              rows={1}
              spellCheck
              placeholder="Subtitle…"
            />
            <textarea
              className="beat-cluster-prompt editing"
              value={draftPrompt}
              onChange={(e) => setDraftPrompt(e.target.value)}
              onBlur={commitPrompt}
              onKeyDown={onFieldKey}
              onClick={stop}
              onMouseDown={stop}
              onDoubleClick={stop}
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
    </div>
  );
}

export const BeatClusterNode = memo(Impl);
