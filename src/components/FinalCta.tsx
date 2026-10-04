import Image from "next/image";
import icon from "@/assets/brand/puros-icon.png";
import { LINKS, MINIMUM_MACOS } from "@/lib/links";
import { RELEASES_URL, type Release } from "@/lib/release";
import { DownloadButton, SecondaryLink } from "./buttons";
import { DiscordIcon, GitHubIcon } from "./icons";

export function FinalCta({ release }: { release: Release | null }) {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[560px] bg-[radial-gradient(55%_60%_at_50%_100%,rgb(30_64_110/0.4),transparent_70%)]"
      />
      <div className="reveal relative mx-auto max-w-3xl px-5 py-32 text-center sm:px-8 sm:py-40">
        <Image src={icon} alt="Puros app icon" width={112} height={112} className="mx-auto size-24 drop-shadow-[0_20px_50px_rgb(30_64_110/0.6)] sm:size-28" />
        <h2 className="silver mt-10 text-4xl leading-[1.05] font-semibold tracking-[-0.035em] text-balance sm:text-6xl">
          {release ? `Puros ${release.label} is out now.` : "Puros Alpha is out now."}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
          This is an alpha: expect rough edges and missing pieces, and tell us what breaks. Every build is signed with a
          Developer ID and notarized by Apple.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <DownloadButton release={release} className="w-full sm:w-auto" />
          <SecondaryLink href={release?.notesUrl ?? RELEASES_URL} className="w-full sm:w-auto">
            <GitHubIcon className="size-4" />
            Release on GitHub
          </SecondaryLink>
          <SecondaryLink href={LINKS.discord} className="w-full sm:w-auto">
            <DiscordIcon className="size-4" />
            Discord
          </SecondaryLink>
        </div>
        <p className="mt-6 font-mono text-xs tracking-wide text-faint">
          {[release?.architecture ?? "Apple Silicon", MINIMUM_MACOS].join("  ·  ")}
        </p>
      </div>
    </section>
  );
}
