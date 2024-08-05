const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',

  // set from env so it can conditionally be set when deploying to GitHub Pages
  basePath: process.env.NEXT_BASE_PATH,

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
