import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "avatar.iran.liara.run",
        protocol: "https",
        port: "",
      },
      {
        hostname: "api.dicebear.com",
        protocol: "https",
        port: "",
      },
    ],
    dangerouslyAllowSVG: true,
    // },
    // experimental: {
    //   serverActions: {
    //     bodySizeLimit: "2mb",
    //   },
  },
};

export default nextConfig;
