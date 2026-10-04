import { SectionHeading } from "./SectionHeading";

const TOOLS = [
  {
    title: "Resampling",
    body: "SoX (libsoxr), integer-ratio FIR filters or Apple CoreAudio. Linear or minimum phase, apodizing, pass-band and stop-band control, and a separate filter for hi-res sources. Choose the highest rate in the source's family, the lowest rate above it, or a fixed rate.",
  },
  {
    title: "Dither and headroom",
    body: "TPDF, Gaussian and noise-shaped dither whenever the signal is requantized. Optional headroom keeps inter-sample peaks from clipping, and Signal Path reports the peak and any clipped samples.",
  },
  {
    title: "Parametric EQ and AutoEQ",
    body: "A parametric EQ with AutoEQ headphone presets, plus crossfeed for headphone listening.",
  },
  {
    title: "Room correction",
    body: "Convolve the output with your own FIR correction filter for a room or headphones, in 64-bit at the output rate.",
  },
  {
    title: "VST and VST3",
    body: "Run installed VST and VST3 effects in the chain, with their own editors.",
  },
  {
    title: "PCM to DSD",
    body: "Optionally modulate everything to DSD with a delta-sigma modulator and send it as DoP, up to DSD256.",
  },
  {
    title: "CD de-emphasis",
    body: "Early CDs mastered with 50/15 µs pre-emphasis are corrected automatically when the CUE sheet or tags say so.",
  },
];

export function DspSection() {
  return (
    <section id="dsp" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <SectionHeading eyebrow="DSP & resampling" title="Processed only when you ask.">
        Bit-perfect is the default. When you want EQ, room correction or a different output rate, Puros switches to a
        floating-point path with filters you can actually configure, and tells you it did.
      </SectionHeading>

      <div className="reveal mt-16 grid gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line md:grid-cols-2">
        <div className="bg-black p-8 sm:p-10">
          <p className="font-mono text-xs tracking-[0.18em] text-signal uppercase">Source-direct</p>
          <h3 className="mt-4 text-2xl font-medium tracking-tight">The file, exactly.</h3>
          <p className="mt-3 leading-relaxed text-muted">
            The device opens at the file&rsquo;s own sample rate and bit depth. No resampling, no requantization, no
            attenuation; set the level with the device&rsquo;s hardware volume.
          </p>
        </div>
        <div className="bg-black p-8 sm:p-10">
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Processed</p>
          <h3 className="mt-4 text-2xl font-medium tracking-tight">Changes you chose.</h3>
          <p className="mt-3 leading-relaxed text-muted">
            The track is decoded to floating point, resampled if needed, run through EQ, plug-ins and room correction,
            then requantized with dither to the output format.
          </p>
        </div>
      </div>

      <dl className="reveal mt-20 grid gap-x-16 sm:grid-cols-2">
        {TOOLS.map((tool) => (
          <div key={tool.title} className="border-t border-line py-7">
            <dt className="font-medium tracking-tight text-text">{tool.title}</dt>
            <dd className="mt-2 leading-relaxed text-muted">{tool.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
