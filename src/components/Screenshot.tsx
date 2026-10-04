import Image, { type StaticImageData } from "next/image";

/**
 * A real Puros screenshot. The captures already include the macOS window
 * frame and shadow on pure black, so they sit directly on the page.
 */
export function Screenshot({
  src,
  alt,
  sizes,
  preload = false,
  className = "",
  glow = true,
}: {
  src: StaticImageData;
  alt: string;
  sizes: string;
  preload?: boolean;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      {glow ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[12%] top-[18%] bottom-[18%] -z-10 rounded-[40%] bg-[radial-gradient(closest-side,rgb(141_180_230/0.22),transparent)] blur-3xl"
        />
      ) : null}
      <Image src={src} alt={alt} sizes={sizes} quality={90} preload={preload} placeholder="blur" className="h-auto w-full" />
    </div>
  );
}
