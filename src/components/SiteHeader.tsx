import Image from "next/image";
import icon from "@/assets/brand/puros-icon.png";
import { RELEASES_URL, type Release } from "@/lib/release";

const NAV = [
  { href: "#design", label: "Design" },
  { href: "#playback", label: "Playback" },
  { href: "#signal-path", label: "Signal Path" },
  { href: "#dsp", label: "DSP" },
  { href: "#library", label: "Library" },
  { href: "#extensibility", label: "Open Source" },
];

/** A floating glass capsule, like the player bar in the app. */
export function SiteHeader({ release }: { release: Release | null }) {
  return (
    <header className="pointer-events-none sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="glass glass-thick pointer-events-auto mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full pr-2 pl-4 sm:pl-5">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Puros home">
          <Image src={icon} alt="" width={28} height={28} className="size-7" />
          <span className="font-mono text-sm tracking-[0.3em] text-muted">PUROS</span>
        </a>
        <nav aria-label="Sections" className="hidden items-center gap-1 text-sm text-muted lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3 py-1.5 transition hover:bg-white/8 hover:text-text">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={release?.downloadUrl ?? RELEASES_URL}
          className="inline-flex h-10 items-center rounded-full bg-white px-5 text-sm font-medium text-black shadow-[inset_0_-1px_0_rgb(0_0_0/0.12)] transition hover:bg-white/90"
        >
          Download
        </a>
      </div>
    </header>
  );
}
