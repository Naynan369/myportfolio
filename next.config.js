/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir:'.next',
  images: {
    domains: ['images.wondershare.com']
  }
}

module.exports = nextConfig
