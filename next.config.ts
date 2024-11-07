import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    optimizePackageImports: ['swiper', 'lineicons'],
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
