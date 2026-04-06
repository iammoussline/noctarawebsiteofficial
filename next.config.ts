import type { NextConfig } from 'next'
import WebpackObfuscator from 'webpack-obfuscator'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
  webpack(config, { isServer, dev }) {
    // Obfuscation uniquement en production, côté client
    if (!dev && !isServer) {
      config.plugins.push(
        new WebpackObfuscator(
          {
            rotateStringArray: true,
            stringArray: true,
            stringArrayThreshold: 0.75,
            stringArrayEncoding: ['base64'],
            identifierNamesGenerator: 'hexadecimal',
            renameGlobals: false,
            selfDefending: false,
            deadCodeInjection: false,
            debugProtection: false,
            disableConsoleOutput: true,
          },
          // Exclure les chunks Next.js internes pour éviter les conflits
          ['**/node_modules/**', '**/_next/static/chunks/framework-*.js', '**/_next/static/chunks/main-*.js']
        )
      )
    }
    return config
  },
}

export default nextConfig
