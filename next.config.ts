import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  headers: async () => {
    return [
      {
        source: "/favicon.ico",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
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
