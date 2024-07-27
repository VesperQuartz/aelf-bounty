/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "s2.coinmarketcap.com",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
