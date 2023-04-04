/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
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
        hostname: 'gentlemans-journal.local',
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
      {
        protocol: 'https',
        hostname: 'cdn.cms.thegentlemansjournal.com',
      }
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  staticPageGenerationTimeout: 60000,
}

module.exports = nextConfig
