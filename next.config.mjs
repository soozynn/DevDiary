/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: '/',
      },
    ]
  },
};

export default nextConfig;
