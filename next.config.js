const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',

  // GitHub Pages lives at /lines
  basePath: '/lines',

  eslint: {
    // Allows production builds to successfully complete even if your project
    // has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

/** @type {import('next-pwa').PWAConfig} */
const pwaConfig = {
  dest: 'public',
  // Disable PWA in development.
  disable: process.env.NODE_ENV === 'development',
}

module.exports = withPWA(pwaConfig)(nextConfig)
