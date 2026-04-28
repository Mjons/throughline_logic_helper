import {
  type FrameworkDefinition,
  type FrameworkCategory,
  getAllFrameworks,
} from "../lib/template-selector";

type Props = {
  recommendedId?: string;
  onSelect: (frameworkId: string) => void;
};

const CATEGORY_LABELS: Record<FrameworkCategory, string> = {
  pitch: "Pitch & Sales",
  storytelling: "Storytelling & Content",
  strategy: "Strategy & Decision",
  domain: "Domain-Specific",
};

const CATEGORY_ORDER: FrameworkCategory[] = [
  "pitch",
  "storytelling",
  "strategy",
  "domain",
];

export function FrameworkPicker({ recommendedId, onSelect }: Props) {
  const frameworks = getAllFrameworks();

  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    label: CATEGORY_LABELS[cat],
    items: frameworks.filter((f) => f.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="fw-picker">
      <div className="fw-picker-header">
        <div className="fw-picker-title">Choose a framework</div>
        <div className="fw-picker-hint">
          The AI recommends one based on your context, but you can pick any.
        </div>
      </div>

      <div className="fw-picker-groups">
        {grouped.map((group) => (
          <div key={group.category} className="fw-picker-group">
            <div className="fw-picker-group-label">{group.label}</div>
            <div className="fw-picker-grid">
              {group.items.map((fw) => (
                <FrameworkCard
                  key={fw.id}
                  framework={fw}
                  recommended={fw.id === recommendedId}
                  onSelect={onSelect}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FrameworkCard({
  framework,
  recommended,
  onSelect,
}: {
  framework: FrameworkDefinition;
  recommended: boolean;
  onSelect: (id: string) => void;
}) {
  const beatNames = framework.beats.map((b) => b.name);
  // Show abbreviated beat flow
  const flow =
    beatNames.length <= 5
      ? beatNames.join(" \u2192 ")
      : beatNames.slice(0, 4).join(" \u2192 ") +
        ` \u2192 ... \u2192 ${beatNames[beatNames.length - 1]}`;

  return (
    <button
      className={`fw-card ${recommended ? "recommended" : ""}`}
      onClick={() => onSelect(framework.id)}
    >
      <div className="fw-card-top">
        <div className="fw-card-name">{framework.name}</div>
        <span className="fw-card-count">{framework.beats.length} beats</span>
      </div>
      {recommended && <span className="fw-card-badge">AI recommended</span>}
      <div className="fw-card-desc">{framework.description}</div>
      <div className="fw-card-flow">{flow}</div>
      <div className="fw-card-best">{framework.bestFor}</div>
    </button>
  );
}
