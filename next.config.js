/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['upload.wikimedia.org'],
  },
  fontLoaders: [
    { loader: "@next/font/google", options: { subsets: ["latin"] } },
  ],
}

module.exports = nextConfig
