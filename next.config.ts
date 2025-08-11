import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  headers: async () => {
    return [
      {
        source: "/favicon.ico",
        headers: [
          { key: "Cache-Control", value: "no-store" },
        ],
      },
      {
        source: "/images/logo.png",
        headers: [
          { key: "Cache-Control", value: "no-store" },
        ],
      },
    ];
  },
  rewrites: async () => {
    return [
      {
        source: "/favicon.ico",
        destination: "/images/logo.png",
      },
    ];
  },
  redirects: async () => {
    const apex = process.env.NEXT_PUBLIC_SITE_URL || "https://nexustalk.online";
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nexustalk.online" }],
        destination: `${apex}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
