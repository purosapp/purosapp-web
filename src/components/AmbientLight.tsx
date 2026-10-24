const TONES = {
  navy: "rgb(40 84 150 / 0.5)",
  blue: "rgb(52 96 200 / 0.42)",
  crimson: "rgb(150 34 34 / 0.42)",
  violet: "rgb(120 78 190 / 0.36)",
  teal: "rgb(28 120 118 / 0.3)",
} as const;

export type Tone = keyof typeof TONES;

/**
 * Soft coloured light behind a section, like the artwork tint the app paints
 * behind a page. It gives the glass above it something to refract. The parent
 * must be positioned and isolated (`relative isolate`).
 */
export function AmbientLight({
  primary,
  secondary,
  className = "",
}: {
  primary: Tone;
  secondary?: Tone;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div
        className="drift absolute top-0 left-[5%] h-[80%] w-[65%]"
        style={{ background: `radial-gradient(closest-side, ${TONES[primary]}, transparent)` }}
      />
      {secondary ? (
        <div
          className="drift-slow absolute top-[20%] right-0 h-[80%] w-[55%]"
          style={{ background: `radial-gradient(closest-side, ${TONES[secondary]}, transparent)` }}
        />
      ) : null}
    </div>
  );
}
