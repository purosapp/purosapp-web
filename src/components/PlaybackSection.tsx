import { SectionHeading } from "./SectionHeading";

const CAPABILITIES = [
  {
    title: "Exclusive mode",
    spec: "Hog mode · mixing off",
    body: "Puros takes the output device for itself and turns off mixing, so no other app or system sound reaches the stream. When the device offers integer, non-mixable formats, Puros uses them.",
  },
  {
    title: "Automatic sample-rate switching",
    spec: "Follows the source",
    body: "The device is reconfigured to each track's own sample rate and bit depth instead of resampling everything to one rate. Consecutive tracks hand off gaplessly.",
  },
  {
    title: "DSD over DoP",
    spec: "DSF · DFF · up to DSD256",
    body: "DSD files reach DoP-capable DACs natively. Outputs without DoP get a configurable DSD-to-PCM conversion instead.",
  },
  {
    title: "Volume that keeps it bit-perfect",
    spec: "Hardware or DSP",
    body: "Use the device's own volume control and the digital stream stays untouched. DSP volume is there when the device has none, and at full scale it does nothing at all.",
  },
  {
    title: "Audio Setup for every device",
    spec: "Per-device configuration",
    body: "See each output's sample rates, bit depths and connection. Cap the bit depth for DACs that over-report it, use the largest or a power-of-two IO buffer, and add a resync delay so S/PDIF, AES and I²S DACs lock before the music starts.",
  },
];

export function PlaybackSection() {
  return (
    <section id="playback" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading eyebrow="Audio engine" title="Built on CoreAudio, not around it.">
            A native engine talks to your output device directly. When nothing needs to change, nothing does: the file
            plays at its own rate and depth, bit for bit.
          </SectionHeading>
        </div>

        <dl className="reveal border-t border-line">
          {CAPABILITIES.map((capability) => (
            <div key={capability.title} className="grid gap-x-8 gap-y-2 border-b border-line py-8 sm:grid-cols-[1fr_auto]">
              <dt className="text-xl font-medium tracking-tight text-text">{capability.title}</dt>
              <dd className="font-mono text-xs tracking-wider text-accent uppercase sm:row-span-2 sm:pt-1.5 sm:text-right">
                {capability.spec}
              </dd>
              <dd className="max-w-xl leading-relaxed text-muted">{capability.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
