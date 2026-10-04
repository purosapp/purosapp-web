import type { Metadata, Viewport } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

// DM Sans is the typeface of the Puros app itself.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "A macOS music player with a serious audio engine: CoreAudio exclusive mode, automatic sample-rate switching, DSD over DoP and a signal path that shows every step from file to DAC.";

export const metadata: Metadata = {
  metadataBase: new URL("https://getpuros.app"),
  title: "Puros — a macOS music player built for audio quality",
  description,
  openGraph: {
    title: "Puros",
    description,
    url: "/",
    siteName: "Puros",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Puros", description },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
