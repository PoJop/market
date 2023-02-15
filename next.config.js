/** @type {import('next').NextConfig} */
const path = require('path')
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  appDir: true,
  i18n,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    domains: ['cdn.shopify.com'],
  },
}

module.exports = nextConfig
