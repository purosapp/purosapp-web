import { DspSection } from "@/components/DspSection";
import { ExtensibilitySection } from "@/components/ExtensibilitySection";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { LibrarySection } from "@/components/LibrarySection";
import { PlaybackSection } from "@/components/PlaybackSection";
import { SignalPathSection } from "@/components/SignalPathSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getLatestRelease } from "@/lib/release";

export default async function Home() {
  // Revalidated every 15 minutes; null falls back to the GitHub releases page.
  const release = await getLatestRelease();

  return (
    <>
      <SiteHeader release={release} />
      <main>
        <Hero release={release} />
        <PlaybackSection />
        <SignalPathSection />
        <DspSection />
        <LibrarySection />
        <ExtensibilitySection />
        <FinalCta release={release} />
      </main>
      <SiteFooter />
    </>
  );
}
