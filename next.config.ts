import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  experimental: {
    optimizePackageImports: [
      "@remixicon/react",
      "lucide-react",
      "motion",
      "react-photo-view",
    ],
  },

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1440, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
