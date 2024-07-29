/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  output: "standalone",
  experimental: {
    serverSourceMaps: false
  }
};

export default nextConfig;
