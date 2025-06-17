import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',


  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;
