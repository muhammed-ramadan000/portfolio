import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Add real remote hosts here if project screenshots are served externally
    remotePatterns: [],
  },
};

export default nextConfig;
