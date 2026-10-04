import home from "@/assets/screenshots/home.png";
import { MINIMUM_MACOS } from "@/lib/links";
import { RELEASES_URL, type Release } from "@/lib/release";
import { DownloadButton, SecondaryLink } from "./buttons";
import { ArrowRightIcon, GitHubIcon } from "./icons";
import { Screenshot } from "./Screenshot";

export function Hero({ release }: { release: Release | null }) {
  const requirements = [release?.architecture ?? "Apple Silicon", MINIMUM_MACOS, "Signed and notarized"];
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Restrained backlight in the navy of the app icon. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[720px] bg-[radial-gradient(60%_60%_at_50%_0%,rgb(30_64_110/0.45),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 pt-14 sm:px-8 sm:pt-20 lg:pt-24">
        <div className="rise mx-auto max-w-4xl text-center">
          <a
            href={release?.notesUrl ?? RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass group inline-flex items-center gap-2 rounded-full py-1.5 pr-3 pl-1.5 text-sm text-muted transition hover:text-text"
          >
            <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[0.7rem] tracking-wider text-accent uppercase">
              New
            </span>
            {release ? `Puros ${release.label} is out now` : "Puros Alpha is out now"}
            <ArrowRightIcon className="size-3.5 transition group-hover:translate-x-0.5" />
          </a>

          <h1 className="silver mt-7 text-5xl leading-[0.98] font-semibold tracking-[-0.045em] text-balance sm:text-7xl lg:text-[5.5rem]">
            Every bit, accounted for.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-muted sm:text-xl">
            Puros is a macOS music player with a serious audio engine. It takes exclusive control of your DAC,
            follows every track&rsquo;s sample rate, and shows you the whole signal path from file to output.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <DownloadButton release={release} className="w-full sm:w-auto" />
            <SecondaryLink href={release?.notesUrl ?? RELEASES_URL} className="w-full sm:w-auto">
              <GitHubIcon className="size-4" />
              Release notes
            </SecondaryLink>
          </div>
          <p className="mt-5 font-mono text-xs tracking-wide text-faint">{requirements.join("  ·  ")}</p>
        </div>

        <Screenshot
          src={home}
          alt="Puros home screen: recently played playlists and a FLAC 24-bit / 48 kHz track in the player bar"
          sizes="(min-width: 1280px) 1216px, 100vw"
          preload
          className="rise-delayed -mx-3 mt-12 sm:mx-0 sm:mt-14"
        />
      </div>
    </section>
  );
}
