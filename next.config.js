/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/helm-website',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
