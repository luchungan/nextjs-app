import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging:{
    fetches:{
      fullUrl:true
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
        pathname: '/images/**',
      },
    ],
  },
 allowedDevOrigins: [
    'http://localhost:3000',],
  sassOptions: {
    implementation: 'sass',
  },
};

export default nextConfig;
