import { useState } from "react";
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
        <div className="fw-picker-title">Choose your framework</div>
        <div className="fw-picker-hint">
          Pick the narrative structure that fits your situation.
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
  const [hovered, setHovered] = useState(false);
  const beatNames = framework.beats.map((b) => b.name);

  return (
    <button
      className={`fw-card ${recommended ? "recommended" : ""} cat-${framework.category}`}
      onClick={() => onSelect(framework.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="fw-card-row1">
        <span className="fw-card-icon">{framework.icon}</span>
        <span className="fw-card-name">{framework.name}</span>
        <span className="fw-card-dots">
          {framework.beats.map((_, i) => (
            <span key={i} className="fw-dot" />
          ))}
        </span>
      </div>

      <div className="fw-card-tagline">{framework.tagline}</div>

      {hovered && (
        <div className="fw-card-beats">
          {beatNames.map((name, i) => (
            <span key={i} className="fw-card-beat-name">
              {name}
              {i < beatNames.length - 1 && (
                <span className="fw-card-beat-sep">&middot;</span>
              )}
            </span>
          ))}
        </div>
      )}

      <div className="fw-card-best">{framework.bestFor}</div>

      {recommended && <span className="fw-card-badge">AI recommended</span>}
    </button>
  );
}
