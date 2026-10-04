import type { ReactNode } from "react";
import { RELEASES_URL, type Release } from "@/lib/release";
import { DownloadIcon } from "./icons";

const base =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium transition duration-200";

/** Primary download CTA. Falls back to the releases page when GitHub could not be reached. */
export function DownloadButton({ release, className = "" }: { release: Release | null; className?: string }) {
  return (
    <a
      href={release?.downloadUrl ?? RELEASES_URL}
      className={`${base} bg-white text-black shadow-[0_8px_30px_rgb(255_255_255/0.12)] hover:bg-white/90 hover:shadow-[0_8px_40px_rgb(255_255_255/0.2)] ${className}`}
    >
      <DownloadIcon className="size-4" />
      {release ? `Download ${release.label}` : "Download Alpha"}
    </a>
  );
}

export function SecondaryLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} glass text-text hover:border-line-strong hover:bg-white/10 ${className}`}
    >
      {children}
    </a>
  );
}
