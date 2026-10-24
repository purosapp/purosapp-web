export type Tier = "lossless" | "enhanced" | "high" | "low";

const COLOR: Record<Tier, string> = {
  lossless: "text-lossless",
  enhanced: "text-enhanced",
  high: "text-high",
  low: "text-low",
};

/** The in-app quality mark: a glowing sparkle for lossless and enhanced, a glowing dot below that. */
export function TierMark({ tier, className = "" }: { tier: Tier; className?: string }) {
  const sparkle = tier === "lossless" || tier === "enhanced";
  return (
    <span aria-hidden="true" className={`inline-flex size-3 shrink-0 items-center justify-center ${COLOR[tier]} ${className}`}>
      {sparkle ? (
        <svg viewBox="0 0 16 16" className="size-3 drop-shadow-[0_0_4px_currentColor]" fill="currentColor">
          <path d="M8 0c.6 4.6 3.4 7.4 8 8-4.6.6-7.4 3.4-8 8-.6-4.6-3.4-7.4-8-8 4.6-.6 7.4-3.4 8-8Z" />
        </svg>
      ) : (
        <span className="size-1.5 rounded-full bg-current shadow-[0_0_6px_currentColor]" />
      )}
    </span>
  );
}
