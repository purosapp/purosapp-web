"use client";

import { useState } from "react";

type Stage = { label: string; value: string; detail: string };
type Path = { badge: string; tone: "signal" | "accent"; stages: Stage[]; readout: string[] };

// Stage names match the in-app Signal Path panel.
const PATHS = {
  direct: {
    badge: "Bit-perfect",
    tone: "signal",
    stages: [
      { label: "Source", value: "FLAC", detail: "24-bit · 96 kHz" },
      { label: "Decode", value: "Native", detail: "24-bit · 96 kHz" },
      { label: "DSP Engine", value: "Bypassed", detail: "No EQ, no plug-ins" },
      { label: "Volume", value: "Device Volume", detail: "Samples untouched" },
      { label: "Output", value: "Exclusive", detail: "24-bit · 96 kHz" },
    ],
    readout: ["No resampling", "No requantization", "No attenuation"],
  },
  processed: {
    badge: "Processed",
    tone: "accent",
    stages: [
      { label: "Source", value: "FLAC", detail: "16-bit · 44.1 kHz" },
      { label: "Resample", value: "SoX (libsoxr)", detail: "44.1 → 176.4 kHz" },
      { label: "DSP Engine", value: "Parametric EQ", detail: "Room correction" },
      { label: "Requantize", value: "24-bit", detail: "TPDF dither · −3 dB headroom" },
      { label: "Output", value: "Exclusive", detail: "24-bit · 176.4 kHz" },
    ],
    readout: ["Peak −3.4 dBFS", "0 clipped samples", "Linear phase"],
  },
} satisfies Record<string, Path>;

type Mode = keyof typeof PATHS;

export function SignalPathDiagram() {
  const [mode, setMode] = useState<Mode>("direct");
  const path = PATHS[mode];
  const toneText = path.tone === "signal" ? "text-signal" : "text-accent";
  const toneDot = path.tone === "signal" ? "bg-signal" : "bg-accent";

  return (
    <figure className="glass reveal overflow-hidden rounded-3xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-8">
        <div role="group" aria-label="Playback path" className="inline-flex rounded-full bg-black/40 p-1 ring-1 ring-line">
          {(Object.keys(PATHS) as Mode[]).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={mode === key}
              onClick={() => setMode(key)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                mode === key ? "bg-white text-black" : "text-muted hover:text-text"
              }`}
            >
              {key === "direct" ? "Source-direct" : "Processed"}
            </button>
          ))}
        </div>
        <span className={`inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase ${toneText}`}>
          <span className={`size-1.5 rounded-full ${toneDot} shadow-[0_0_12px_currentColor]`} />
          {path.badge}
        </span>
      </div>

      <ol className="grid gap-0 px-5 py-8 sm:px-8 lg:grid-cols-5 lg:py-12" aria-live="polite">
        {path.stages.map((stage, index) => (
          <li key={`${mode}-${stage.label}`} className="relative flex gap-4 lg:flex-col lg:gap-5">
            {/* Connector to the next stage, with a sample travelling along it. */}
            {index < path.stages.length - 1 ? (
              <>
                <span aria-hidden="true" className="absolute top-8 bottom-0 left-[7px] w-px overflow-hidden bg-line lg:hidden">
                  <span className={`flow-vertical absolute inset-x-0 h-1/4 ${toneDot} opacity-70`} style={{ animationDelay: `${index * 0.3}s` }} />
                </span>
                <span aria-hidden="true" className="absolute top-[7px] right-0 left-6 hidden h-px overflow-hidden bg-line lg:block">
                  <span className={`flow absolute inset-y-0 w-1/4 ${toneDot} opacity-70`} style={{ animationDelay: `${index * 0.3}s` }} />
                </span>
              </>
            ) : null}
            <span aria-hidden="true" className={`relative mt-0.5 size-[15px] shrink-0 rounded-full border-2 border-current ${toneText} bg-black lg:mt-0`} />
            <div className="pb-8 lg:pr-6 lg:pb-0">
              <p className="font-mono text-[0.7rem] tracking-[0.2em] text-faint uppercase">{stage.label}</p>
              <p className="mt-2 text-lg font-medium tracking-tight text-text">{stage.value}</p>
              <p className="mt-1 font-mono text-xs text-muted">{stage.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-line bg-black/30 px-5 py-4 font-mono text-xs text-muted sm:px-8">
        {path.readout.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <figcaption className="sr-only">Illustration of the Signal Path panel in Puros.</figcaption>
    </figure>
  );
}
