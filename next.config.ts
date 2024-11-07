import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  experimental: {
    optimizePackageImports: ['swiper', 'lineicons'],
  }
};

export default nextConfig;
