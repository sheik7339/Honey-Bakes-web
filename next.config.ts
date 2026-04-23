import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'assets.mixkit.co',
      },
      {
        protocol: 'https',
        hostname: 'reddessertdive.com',
      },
      {
        protocol: 'https',
        hostname: 'www.fnp.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.giftalove.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'brownbearbakers.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.bloomsflora.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      }
    ],
  },
};

export default nextConfig;
