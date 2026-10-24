"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import bitPerfect from "@/assets/screenshots/signal-path-bit-perfect.png";
import dsd from "@/assets/screenshots/signal-path-dsd.png";
import enhanced from "@/assets/screenshots/signal-path-enhanced.png";
import { TierMark, type Tier } from "./TierMark";

type View = {
  id: string;
  label: string;
  tier: Tier;
  image: StaticImageData;
  alt: string;
  caption: string;
  /** Ambient light behind the section, taken from the artwork on screen. */
  tint: string;
};

const VIEWS: View[] = [
  {
    id: "bit-perfect",
    label: "Bit-perfect",
    tier: "lossless",
    image: bitPerfect,
    alt: "Signal Path panel reading Bit-perfect: a 24-bit / 44.1 kHz FLAC source, native decoder and a FiiO K5 Pro in exclusive mode",
    caption:
      "A 24-bit FLAC stream goes from source to decoder to DAC in exclusive mode. Three stages, nothing in between, every one marked lossless.",
    tint: "rgb(34 120 86 / 0.28)",
  },
  {
    id: "dsd",
    label: "DSD over DoP",
    tier: "lossless",
    image: dsd,
    alt: "Signal Path panel reading Bit-perfect for a local DSD256 album: native DoP decoding and exclusive output at 705.6 kHz",
    caption:
      "A local DSD256 album reaches the DAC as native DoP at 705.6 kHz. Exclusive mode, no detour through PCM, still bit-perfect.",
    tint: "rgb(160 44 40 / 0.36)",
  },
  {
    id: "processed",
    label: "Processed",
    tier: "enhanced",
    image: enhanced,
    alt: "Signal Path panel reading Enhanced: bit depth conversion to 64-bit float, headroom check, custom EQ with crossfeed, and TPDF dither back to the output format",
    caption:
      "With EQ and crossfeed on, samples are widened to 64-bit float, checked for headroom (peak −1.4 dBFS, no clipping) and dithered back to the DAC's format. Changed on purpose, and shown.",
    tint: "rgb(64 92 210 / 0.36)",
  },
];

export function SignalPathShowcase() {
  const [active, setActive] = useState(VIEWS[0].id);
  const view = VIEWS.find((candidate) => candidate.id === active) ?? VIEWS[0];

  return (
    <>
      {/* One light per view, crossfaded: gradients themselves cannot transition. Positioned against the section. */}
      {VIEWS.map((candidate) => (
        <div
          key={candidate.id}
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-[25%] bottom-0 -z-10 transition-opacity duration-700 ${
            candidate.id === active ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: `radial-gradient(50% 45% at 50% 50%, ${candidate.tint}, transparent)` }}
        />
      ))}

      <div className="reveal flex justify-center">
        <div role="group" aria-label="Signal Path example" className="glass glass-thick inline-flex rounded-full p-1">
          {VIEWS.map((candidate) => (
            <button
              key={candidate.id}
              type="button"
              aria-pressed={candidate.id === active}
              onClick={() => setActive(candidate.id)}
              className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm transition sm:px-5 ${
                candidate.id === active ? "bg-white text-black shadow-sm" : "text-muted hover:text-text"
              }`}
            >
              <span className="hidden sm:contents">
                <TierMark tier={candidate.tier} />
              </span>
              {candidate.label}
            </button>
          ))}
        </div>
      </div>

      <div className="reveal -mx-3 mt-10 grid sm:mx-0">
        {VIEWS.map((candidate) => (
          <Image
            key={candidate.id}
            src={candidate.image}
            alt={candidate.alt}
            aria-hidden={candidate.id !== active}
            sizes="(min-width: 1280px) 1216px, 100vw"
            quality={90}
            className={`[grid-area:1/1] h-auto w-full transition-opacity duration-500 ${
              candidate.id === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <p aria-live="polite" className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-pretty text-muted">
        {view.caption}
      </p>
    </>
  );
}
