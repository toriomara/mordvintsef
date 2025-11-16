/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://mordvintsef.ru",
          },
        ],
      },
    ];
  },
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "encrypted-tbn0.gstatic.com",
    },
    {
      protocol: "https",
      hostname: "tailwindui.com",
    },
    {
      protocol: "https",
      hostname: "m3.material.io",
    },
    {
      protocol: "https",
      hostname: "media.istockphoto.com",
    },
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
    {
      protocol: "https",
      hostname: "plus.unsplash.com",
    },
    {
      protocol: "https",
      hostname: "firebasestorage.googleapis.com",
    },
    {
      protocol: "https",
      hostname: "hips.hearstapps.com",
    },
  ],
  formats: ["image/avif", "image/webp"],
},
};

export default nextConfig;
