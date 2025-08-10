import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
