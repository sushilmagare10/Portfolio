/** @type {import('next').NextConfig} */
const nextConfig = {
   distDir: "build",
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