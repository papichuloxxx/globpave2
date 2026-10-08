import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    // Photos are pre-resized by scripts/optimize-images.mjs; see app/image-loader.ts
    loader: "custom",
    loaderFile: "./app/image-loader.ts",
    deviceSizes: [384, 640, 828, 1080, 1280],
    imageSizes: [256],
  },
};

export default nextConfig;
