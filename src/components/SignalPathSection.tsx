import { SectionHeading } from "./SectionHeading";
import { SignalPathShowcase } from "./SignalPathShowcase";
import { TierMark, type Tier } from "./TierMark";

// The legend at the foot of the in-app panel.
const LEGEND: { tier: Tier; label: string; body: string }[] = [
  { tier: "lossless", label: "Lossless", body: "The original samples, unchanged" },
  { tier: "enhanced", label: "Enhanced", body: "Processing you switched on" },
  { tier: "high", label: "High quality", body: "High-bitrate lossy, live radio" },
  { tier: "low", label: "Low quality", body: "Low-bitrate lossy sources" },
];

export function SignalPathSection() {
  return (
    <section id="signal-path" className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionHeading eyebrow="Signal Path" title="See what happens to the sound." align="center">
          Open Signal Path from the player and Puros lays out every stage between the source and your DAC, with the
          format at each step. Bit-perfect playback is labelled as such, and the moment anything changes the samples, you
          see what changed and why.
        </SectionHeading>

        <div className="mt-14 sm:mt-16">
          <SignalPathShowcase />
        </div>

        <ul className="reveal mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line md:grid-cols-4">
          {LEGEND.map((item) => (
            <li key={item.tier} className="bg-black/80 px-5 py-4">
              <p className="flex items-center gap-2 text-sm font-medium text-text">
                <TierMark tier={item.tier} />
                {item.label}
              </p>
              <p className="mt-1 text-sm text-faint">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
