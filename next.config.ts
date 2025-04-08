import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging:{
    fetches:{
      fullUrl:true
    }
  },
  
  sassOptions: {
    implementation: 'sass',
  },
};

export default nextConfig;
