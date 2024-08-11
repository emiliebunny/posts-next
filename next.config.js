/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    basePath: '/posts-next',
  },
  basePath: '/posts-next',
  output: 'export',
  distDir: 'docs',
  images: { unoptimized: true }
};

module.exports = nextConfig;
