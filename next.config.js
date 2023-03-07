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
      },
      {
        protocol: 'http',
        hostname: 'thegentlemansjournal.local',
      },
      {
        protocol: 'https',
        hostname: 'www.thegentlemansjournal.com',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
      {
        protocol: 'https',
        hostname: 'cms.thegentlemansjournal.com',
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  staticPageGenerationTimeout: 6000,
}

module.exports = nextConfig
