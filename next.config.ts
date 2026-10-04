import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 keeps text in the app screenshots sharp; 75 is the default for everything else.
    qualities: [75, 90],
  },
};

export default nextConfig;
