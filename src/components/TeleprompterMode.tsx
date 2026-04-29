import { useState, useEffect, useCallback } from "react";
import type { Template } from "../types";

type OverrideOptions = Record<string, { title?: string; description?: string }>;
type OverrideCluster = { name?: string; subtitle?: string };
type BeatOverride = {
  cluster?: OverrideCluster;
  options?: OverrideOptions;
};
type TemplateOverrides = Record<string, BeatOverride>;

type Props = {
  template: Template;
  selections: Record<string, string>;
  overrides: TemplateOverrides;
  onClose: () => void;
};

type SlideData = {
  beatIndex: number;
  beatName: string;
  beatSubtitle?: string;
  optionTitle: string;
  spokenLine: string;
};

function buildSlides(
  template: Template,
  selections: Record<string, string>,
  overrides: TemplateOverrides,
): SlideData[] {
  const slides: SlideData[] = [];
  template.beats.forEach((beat, i) => {
    const selId = selections[beat.id];
    const option = beat.options.find((o) => o.id === selId);
    if (!option) return;

    const oc = overrides[beat.id]?.cluster;
    const oo = overrides[beat.id]?.options?.[option.id];

    const beatName = oc?.name ?? beat.name;
    const beatSubtitle =
      oc?.subtitle !== undefined ? oc.subtitle : beat.subtitle;
    const optionTitle = oo?.title ?? option.title;
    const optionDesc =
      oo?.description !== undefined ? oo.description : option.description;

    const spokenLine = option.spokenLine || optionDesc || optionTitle;

    slides.push({
      beatIndex: i,
      beatName,
      beatSubtitle,
      optionTitle,
      spokenLine,
    });
  });
  return slides;
}

export function TeleprompterMode({
  template,
  selections,
  overrides,
  onClose,
}: Props) {
  const slides = buildSlides(template, selections, overrides);
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [secondsPerSlide, setSecondsPerSlide] = useState(15);
  const [elapsed, setElapsed] = useState(0);

  const total = slides.length;
  const slide = slides[current];

  const next = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, total - 1));
    setElapsed(0);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0));
    setElapsed(0);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "p" || e.key === "P") {
        setAutoPlay((a) => !a);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, next, prev]);

  // Auto-advance timer
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setElapsed((e) => {
        if (e + 1 >= secondsPerSlide) {
          if (current < total - 1) {
            setCurrent((c) => c + 1);
            return 0;
          }
          setAutoPlay(false);
          return e;
        }
        return e + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [autoPlay, secondsPerSlide, current, total]);

  if (!slide) return null;

  const progress = ((current + 1) / total) * 100;
  const timerProgress = autoPlay ? (elapsed / secondsPerSlide) * 100 : 0;

  return (
    <div className="tp-overlay">
      {/* Progress bar */}
      <div className="tp-progress">
        <div className="tp-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Beat counter */}
      <div className="tp-counter">
        {current + 1} / {total}
      </div>

      {/* Close button */}
      <button
        className="tp-close"
        onClick={onClose}
        aria-label="Exit teleprompter"
      >
        &times;
      </button>

      {/* Main content */}
      <div className="tp-content" onClick={next}>
        <div className="tp-beat-label">
          Beat {slide.beatIndex + 1}: {slide.beatName}
          {slide.beatSubtitle ? ` \u2014 ${slide.beatSubtitle}` : ""}
        </div>

        <div className="tp-option-title">{slide.optionTitle}</div>

        <div className="tp-spoken-line">{slide.spokenLine}</div>

        {autoPlay && (
          <div className="tp-timer-bar">
            <div
              className="tp-timer-fill"
              style={{ width: `${timerProgress}%` }}
            />
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="tp-controls">
        <button className="tp-ctrl-btn" onClick={prev} disabled={current === 0}>
          &larr; Prev
        </button>

        <button
          className={`tp-ctrl-btn ${autoPlay ? "active" : ""}`}
          onClick={() => {
            setAutoPlay((a) => !a);
            setElapsed(0);
          }}
        >
          {autoPlay ? "Pause" : "Auto"}
        </button>

        {autoPlay && (
          <div className="tp-speed">
            <button
              className="tp-speed-btn"
              onClick={() => setSecondsPerSlide((s) => Math.max(5, s - 5))}
            >
              &minus;
            </button>
            <span className="tp-speed-label">{secondsPerSlide}s</span>
            <button
              className="tp-speed-btn"
              onClick={() => setSecondsPerSlide((s) => Math.min(60, s + 5))}
            >
              +
            </button>
          </div>
        )}

        <button
          className="tp-ctrl-btn"
          onClick={next}
          disabled={current === total - 1}
        >
          Next &rarr;
        </button>
      </div>

      {/* Keyboard hints */}
      <div className="tp-hints">
        &larr; &rarr; navigate &middot; Space advance &middot; P auto-play
        &middot; Esc exit
      </div>
    </div>
  );
}
