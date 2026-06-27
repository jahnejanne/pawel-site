import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/pawel-site" : "",
  assetPrefix: isProd ? "/pawel-site/" : "",
};

export default nextConfig;
