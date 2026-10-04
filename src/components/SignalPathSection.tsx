import { SectionHeading } from "./SectionHeading";
import { SignalPathDiagram } from "./SignalPathDiagram";

export function SignalPathSection() {
  return (
    <section id="signal-path" className="relative border-y border-line bg-canvas">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgb(30_64_110/0.25),transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionHeading eyebrow="Signal Path" title="See what happens to the sound." align="center">
          Open Signal Path from the player and Puros lays out every stage between the file and your DAC, with the format
          at each step. Bit-perfect playback is labelled as such, and the moment anything changes the samples, you see
          what changed and why.
        </SectionHeading>

        <div className="mt-16 sm:mt-20">
          <SignalPathDiagram />
          <p className="mt-4 text-center text-sm text-faint">
            Illustration of the in-app panel. It also reports the peak level, clipped samples, dither, the resampling
            filter and whether the output is exclusive, shared or AirPlay.
          </p>
        </div>
      </div>
    </section>
  );
}
