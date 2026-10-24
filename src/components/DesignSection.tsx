import nowPlaying from "@/assets/screenshots/now-playing.png";
import playlist from "@/assets/screenshots/playlist.png";
import { AmbientLight } from "./AmbientLight";
import { Screenshot } from "./Screenshot";
import { SectionHeading } from "./SectionHeading";

const DETAILS = [
  {
    title: "Native Liquid Glass",
    body: "On macOS 26 and later the window is real system glass. Earlier versions of macOS get the vibrancy material instead.",
  },
  {
    title: "A player that floats",
    body: "Transport, artwork and a waveform seek bar share one glass capsule that hovers over whatever you are browsing.",
  },
  {
    title: "Now Playing, immersive",
    body: "The artwork fills the window, in a jewel case or flat, next to time-synced lyrics from LRCLIB or Musixmatch and the track's credits.",
  },
];

export function DesignSection() {
  return (
    <section id="design" className="relative isolate overflow-hidden">
      <AmbientLight primary="blue" secondary="teal" className="top-[20%] bottom-[30%]" />
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionHeading eyebrow="Design" title="Liquid Glass, tuned for listening." align="center">
          Puros looks the way a Mac app should now: layered glass, a player that floats over your music, and pages that
          take on the colour of the artwork in front of you.
        </SectionHeading>

        <Screenshot
          src={nowPlaying}
          alt="Puros Now Playing: Fear of a Blank Planet by Porcupine Tree in a jewel case, with time-synced lyrics on a blue backdrop taken from the artwork"
          sizes="(min-width: 1280px) 1216px, 100vw"
          glow={false}
          className="reveal -mx-3 mt-16 sm:mx-0 sm:mt-20"
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

        <div className="relative isolate mt-28 grid items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-16">
          <AmbientLight primary="crimson" className="-inset-x-[20%] -inset-y-[10%]" />
          <div className="reveal lg:col-start-2">
            <p className="eyebrow">Colour from the artwork</p>
            <h3 className="silver mt-4 text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-4xl">
              Every page dressed by its cover.
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Albums and playlists pick up the light of their artwork, and the glass above them picks it up in turn. Dark,
              calm and never the same twice.
            </p>
          </div>
          <Screenshot
            src={playlist}
            alt="A Puros playlist page tinted deep red by its cover art, with Play and Shuffle buttons and the track list below"
            sizes="(min-width: 1024px) 700px, 100vw"
            glow={false}
            className="reveal -mx-3 sm:mx-0 lg:col-start-1 lg:row-start-1"
          />
        </div>
      </div>
    </section>
  );
}
