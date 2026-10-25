/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  ...(isGitHubPages
    ? {
        output: 'export',
        basePath: '/portfolio',
        assetPrefix: '/portfolio/',
        trailingSlash: true,
      }
    : {}),
  images: {
    domains: ['images.unsplash.com', 'api.dicebear.com'],
    ...(isGitHubPages ? { unoptimized: true } : {}),
  },
};

module.exports = nextConfig;
