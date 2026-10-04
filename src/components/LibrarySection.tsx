import albums from "@/assets/screenshots/albums.png";
import liveRadio from "@/assets/screenshots/liveradio.png";
import { Screenshot } from "./Screenshot";
import { SectionHeading } from "./SectionHeading";

// The library scanner's supported file types.
const FORMATS = ["FLAC", "ALAC", "AIFF", "WAV", "MP3", "AAC", "DSF", "DFF"];

const DETAILS = [
  {
    title: "Know what is playing",
    body: "Format badges in the player show the codec, bit depth and sample rate, and flag DSD and MQA.",
  },
  {
    title: "Browse it your way",
    body: "Artists, albums, tracks and genres from full metadata indexing, with M3U playlists, pins and listening history.",
  },
  {
    title: "At home on macOS",
    body: "Now Playing and media keys, Last.fm scrobbling, Discord Rich Presence and a MilkDrop-style visualizer.",
  },
];

export function LibrarySection() {
  return (
    <section id="library" className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionHeading eyebrow="Library" title="A library that respects your files.">
          Point Puros at your music folders. It indexes full metadata, keeps your files where they are, and shows the real
          format of every track.
        </SectionHeading>

        <ul className="reveal mt-10 flex flex-wrap gap-2" aria-label="Supported file formats">
          {FORMATS.map((format) => (
            <li key={format} className="glass rounded-lg px-3 py-1.5 font-mono text-sm text-text">
              {format}
            </li>
          ))}
        </ul>

        <Screenshot
          src={albums}
          alt="Puros album grid with cover art, titles, artists and years"
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="reveal -mx-3 mt-16 sm:mx-0"
        />

        <dl className="reveal mt-16 grid gap-10 sm:grid-cols-3">
          {DETAILS.map((detail) => (
            <div key={detail.title}>
              <div className="hairline mb-6" />
              <dt className="font-medium tracking-tight text-text">{detail.title}</dt>
              <dd className="mt-2 leading-relaxed text-muted">{detail.body}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-28 grid items-center gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">Live radio</p>
            <h3 className="silver mt-4 text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-4xl">
              Radio, without another app.
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Browse stations from Radio Browser by genre and country, or keep your own streams. They play through the
              same engine, with the stream&rsquo;s real codec and bitrate on display.
            </p>
          </div>
          <Screenshot
            src={liveRadio}
            alt="Puros Live Radio view: Polish stations from Radio Browser, with codec and bitrate for each stream"
            sizes="(min-width: 1024px) 700px, 100vw"
            glow={false}
            className="reveal -mx-3 sm:mx-0"
          />
        </div>
      </div>
    </section>
  );
}
