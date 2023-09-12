/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'm.media-amazon.com',
      },
    ],
  },
};

module.exports = nextConfig;