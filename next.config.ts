import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/pawel-site",
  assetPrefix: "/pawel-site/",
};

export default nextConfig;
