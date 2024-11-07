import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    optimizePackageImports: ['swiper', 'lineicons'],
  }
};

export default nextConfig;
