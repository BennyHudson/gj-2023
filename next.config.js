/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.thegentlemansjournal.com',
      },
      {
        protocol: 'https',
        hostname: 'dev.thegentlemansjournal.com',
      }
    ]
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  staticPageGenerationTimeout: 600,
}

module.exports = nextConfig
