import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://thenoctara.com/sitemap.xml',
    host: 'https://thenoctara.com',
  }
}
