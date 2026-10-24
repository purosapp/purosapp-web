import restore from "@/assets/screenshots/restore.png";
import { AmbientLight } from "./AmbientLight";
import { Screenshot } from "./Screenshot";
import { SectionHeading } from "./SectionHeading";

// What the Restore screenshot shows, stage by stage.
const RESTORE_READOUT = ["Vorbis · 320 kbps", "Top end rebuilt above 20.5 kHz", "−3 dB auto headroom", "No clipping"];

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
    title: "64-bit throughout",
    body: "Every processing stage runs in 64-bit floating point, and Signal Path shows each conversion into and out of it.",
  },
  {
    title: "CD de-emphasis",
    body: "Early CDs mastered with 50/15 µs pre-emphasis are corrected automatically when the CUE sheet or tags say so.",
  },
];

export function DspSection() {
  return (
    <section id="dsp" className="relative isolate mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <SectionHeading eyebrow="DSP & resampling" title="Processed only when you ask.">
        Bit-perfect is the default. When you want EQ, room correction or a different output rate, Puros switches to a
        64-bit floating-point path with filters you can actually configure, and tells you it did.
      </SectionHeading>

      <div className="glass reveal mt-16 grid overflow-hidden rounded-3xl md:grid-cols-2 md:divide-x md:divide-line">
        <div className="p-8 sm:p-10">
          <p className="font-mono text-xs tracking-[0.18em] text-signal uppercase">Source-direct</p>
          <h3 className="mt-4 text-2xl font-medium tracking-tight">The file, exactly.</h3>
          <p className="mt-3 leading-relaxed text-muted">
            The device opens at the file&rsquo;s own sample rate and bit depth. No resampling, no requantization, no
            attenuation; set the level with the device&rsquo;s hardware volume.
          </p>
        </div>
        <div className="border-t border-line p-8 sm:p-10 md:border-t-0">
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Processed</p>
          <h3 className="mt-4 text-2xl font-medium tracking-tight">Changes you chose.</h3>
          <p className="mt-3 leading-relaxed text-muted">
            The track is widened to 64-bit floating point, resampled if needed, run through EQ, plug-ins, Restore and room correction,
            then requantized with dither to the output format.
          </p>
        </div>
      </div>

      <div className="relative isolate mt-28 grid items-center gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
        <AmbientLight primary="violet" secondary="blue" className="-inset-x-[15%] -inset-y-[15%]" />
        <div className="reveal">
          <p className="eyebrow">Puros Restore</p>
          <h3 className="silver mt-4 text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-4xl">
            A second life for compressed sources.
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Lossy files and streams lose their top end to the codec&rsquo;s low-pass and smear sharp attacks. Restore
            rebuilds a plausible top end above the cutoff, smooths coding artifacts and sharpens transients. On Auto it
            engages only for lossy sources, so lossless playback stays bit-perfect.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-faint">
            It cannot recover what the encoder discarded. Its latency is compensated, so timing is unchanged.
          </p>
        </div>
        <div className="reveal">
          <Screenshot
            src={restore}
            alt="Signal Path for a 320 kbps Ogg Vorbis stream with Puros Restore on Auto: top end rebuilt above 20.5 kHz, 3 dB of automatic headroom, no clipping"
            sizes="(min-width: 1024px) 700px, 100vw"
            glow={false}
            className="-mx-3 sm:mx-0"
          />
          <ul className="mt-4 flex flex-wrap justify-center gap-2" aria-label="What the screenshot shows">
            {RESTORE_READOUT.map((item) => (
              <li key={item} className="glass rounded-full px-3 py-1 font-mono text-xs text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <dl className="reveal mt-28 grid gap-x-16 sm:grid-cols-2">
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
