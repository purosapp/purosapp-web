import { LINKS } from "@/lib/links";
import { RELEASES_URL } from "@/lib/release";

const FOOTER_LINKS = [
  { href: RELEASES_URL, label: "Releases" },
  { href: LINKS.sdk, label: "Provider SDK" },
  { href: LINKS.providers, label: "Providers" },
  { href: LINKS.github, label: "GitHub" },
  { href: LINKS.discord, label: "Discord" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          <span className="font-mono tracking-[0.3em] text-muted">PUROS</span>
          <span className="ml-3">A macOS music player built for audio quality.</span>
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-text">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
