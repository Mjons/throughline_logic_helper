import type { ToneLevel } from "../types";
import { TONE_LABELS } from "../lib/prompts";

type Props = {
  value: ToneLevel;
  onChange: (level: ToneLevel) => void;
  disabled?: boolean;
};

const LEVELS: ToneLevel[] = [1, 2, 3, 4, 5];

export function ToneSlider({ value, onChange, disabled }: Props) {
  return (
    <div className="tone-slider">
      <div className="tone-slider-label">Tone</div>
      <div className="tone-slider-track">
        {LEVELS.map((level) => (
          <button
            key={level}
            className={`tone-slider-stop ${level === value ? "active" : ""}`}
            onClick={() => onChange(level)}
            disabled={disabled}
            title={TONE_LABELS[level]}
          >
            <span className="tone-stop-dot" />
          </button>
        ))}
        <div className="tone-slider-line" />
      </div>
      <div className="tone-slider-labels">
        <span>Formal</span>
        <span>{TONE_LABELS[value]}</span>
        <span>Bold</span>
      </div>
    </div>
  );
}
