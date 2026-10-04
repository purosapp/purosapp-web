import Image from "next/image";
import icon from "@/assets/brand/puros-icon.png";
import { RELEASES_URL, type Release } from "@/lib/release";

const NAV = [
  { href: "#playback", label: "Playback" },
  { href: "#signal-path", label: "Signal Path" },
  { href: "#dsp", label: "DSP" },
  { href: "#library", label: "Library" },
  { href: "#extensibility", label: "Extensibility" },
];

export function SiteHeader({ release }: { release: Release | null }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-black/60 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Puros home">
          <Image src={icon} alt="" width={28} height={28} className="size-7" />
          <span className="font-mono text-sm tracking-[0.3em] text-muted">PUROS</span>
        </a>
        <nav aria-label="Sections" className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-text">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={release?.downloadUrl ?? RELEASES_URL}
          className="inline-flex h-9 items-center rounded-full bg-white px-4 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Download
        </a>
      </div>
    </header>
  );
}
