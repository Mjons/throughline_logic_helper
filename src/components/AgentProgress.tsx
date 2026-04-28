import type { GenerationProgress } from "../lib/generator";

type Props = {
  progress: GenerationProgress;
};

const STAGE_LABELS: Record<GenerationProgress["stage"], string> = {
  selecting: "Selecting framework...",
  generating: "Generating options...",
  done: "Done",
  error: "Error",
};

export function AgentProgress({ progress }: Props) {
  const { stage, completedBeats, totalBeats, error } = progress;

  const pct =
    stage === "done"
      ? 100
      : stage === "selecting"
        ? 10
        : totalBeats
          ? Math.round(10 + (completedBeats / totalBeats) * 90)
          : 10;

  return (
    <div className="agent-progress">
      <div className="agent-progress-bar">
        <div
          className={`agent-progress-fill ${stage}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="agent-progress-label">
        {stage === "error" ? (
          <span className="agent-progress-error">
            {error ?? "Something went wrong"}
          </span>
        ) : stage === "generating" && totalBeats ? (
          <span>
            {STAGE_LABELS[stage]} ({completedBeats}/{totalBeats} beats)
          </span>
        ) : (
          <span>{STAGE_LABELS[stage]}</span>
        )}
      </div>
    </div>
  );
}
