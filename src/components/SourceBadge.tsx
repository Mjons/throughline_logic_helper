import type { OptionSource } from "../types";

type Props = {
  source: OptionSource;
};

const ICONS: Record<OptionSource["type"], string> = {
  user: "\u{1D4E4}", // person-like
  research: "\u2731", // heavy asterisk / search
  hybrid: "\u29BF", // circled bullet
  manual: "",
};

const LABELS: Record<OptionSource["type"], string> = {
  user: "From your context",
  research: "From AI research",
  hybrid: "User context + AI research",
  manual: "Written manually",
};

const CLASSES: Record<OptionSource["type"], string> = {
  user: "source-user",
  research: "source-research",
  hybrid: "source-hybrid",
  manual: "source-manual",
};

export function SourceBadge({ source }: Props) {
  if (source.type === "manual") return null;

  const citations = source.citations ?? [];
  const tooltip =
    citations.length > 0
      ? `${LABELS[source.type]}\n\nBased on:\n${citations.map((c) => `- ${c}`).join("\n")}`
      : LABELS[source.type];

  return (
    <span
      className={`source-badge ${CLASSES[source.type]}`}
      title={tooltip}
      aria-label={LABELS[source.type]}
    >
      {ICONS[source.type]}
      {source.edited && <span className="source-edited-dot" />}
    </span>
  );
}
