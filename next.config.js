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
      {
        protocol: 'https',
        hostname: 'cdn.cms.thegentlemansjournal.com',
      },
    ],
  },
  staticPageGenerationTimeout: 60,
}

module.exports = nextConfig
