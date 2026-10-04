import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={`reveal ${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="silver mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {children ? (
        <p className={`mt-6 text-lg leading-relaxed text-pretty text-muted sm:text-xl ${centered ? "mx-auto" : ""} max-w-2xl`}>
          {children}
        </p>
      ) : null}
    </div>
  );
}
