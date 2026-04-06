import type { Metadata, Viewport } from 'next'
import { Borel, Outfit, Inter, Unbounded } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LenisProvider } from '@/components/LenisProvider'
import { CustomCursor } from '@/components/CustomCursor'
import { PageTransition } from '@/components/PageTransition'

// ─── next/font — auto-optimisé, servi depuis le même domaine ─────────────────
const borel = Borel({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-borel',
  display: 'swap',
  preload: true,
})
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})
const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  weight: ['400', '700', '900'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thenoctara.com'),
  title: {
    template: '%s | Noctara.',
    default: 'Noctara. — Photographe Professionnel | Clermont-Ferrand',
  },
  description: 'Noctara. — Photographe professionnel à Clermont-Ferrand. Portrait, mariage, corporate et événements. Des images qui capturent chaque instant unique, partout en France et à l\'international.',
  keywords: ['photographe professionnel', 'Clermont-Ferrand', 'portrait', 'mariage', 'photographe corporate', 'événement', 'shooting photo', 'Kandemir Mouhammed', 'Noctara'],
  authors: [{ name: 'Kandemir MOUHAMMED — Noctara.' }],
  creator: 'Noctara.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    url: 'https://thenoctara.com',
    siteName: 'Noctara.',
    title: 'Noctara. — Photographe Professionnel | Clermont-Ferrand',
    description: 'Photographe professionnel à Clermont-Ferrand. Portrait, mariage, corporate, événements. Chaque instant a une seule chance.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Noctara. — Photographe professionnel à Clermont-Ferrand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noctara. — Photographe Professionnel | Clermont-Ferrand',
    description: 'Portrait, mariage, corporate, événements. Partout en France. Chaque instant a une seule chance.',
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: 'https://thenoctara.com',
    languages: {
      'fr': 'https://thenoctara.com',
      'en': 'https://thenoctara.com/en',
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#08080f' },
    { media: '(prefers-color-scheme: light)', color: '#f8f8ff' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`dark ${borel.variable} ${outfit.variable} ${inter.variable} ${unbounded.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Theme init — prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('noctara-theme'),d=window.matchMedia('(prefers-color-scheme: dark)').matches,dark=s?s==='dark':d;document.documentElement.classList.toggle('dark',dark);document.documentElement.classList.toggle('light',!dark);}catch(e){}})();`,
          }}
        />
        {/* Preload LCP hero image */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
          fetchPriority="high"
        />
        {/* JSON-LD Structured Data — ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['ProfessionalService', 'LocalBusiness'],
              name: 'Noctara.',
              legalName: 'KANDEMIR MOUHAMMED — NOCTARA.',
              description: 'Photographe professionnel à Clermont-Ferrand. Portrait, mariage, corporate, événements. Partout en France et à l\'international.',
              url: 'https://thenoctara.com',
              logo: 'https://thenoctara.com/icon.svg',
              image: 'https://thenoctara.com/og.jpg',
              email: 'contact@thenoctara.com',
              foundingDate: '2025',
              founder: {
                '@type': 'Person',
                name: 'Kandemir Mouhammed',
                jobTitle: 'Photographe professionnel',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '17 B Rue Bartholdi, Bâtiment 3, Appartement 313',
                addressLocality: 'Clermont-Ferrand',
                postalCode: '63100',
                addressCountry: 'FR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 45.7797,
                longitude: 3.0863,
              },
              areaServed: [
                { '@type': 'Country', name: 'France' },
                { '@type': 'Continent', name: 'Europe' },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Services photographiques',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Portrait' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mariage' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Événement' } },
                ],
              },
              priceRange: '€€€',
              currenciesAccepted: 'EUR',
              paymentAccepted: 'Carte bancaire, Virement bancaire',
              sameAs: [
                'https://www.instagram.com/thenoctara_/',
                'https://www.linkedin.com/company/noctara',
              ],
            }),
          }}
        />
      </head>
      <body className="dark:bg-dark-bg bg-light-bg dark:text-dark-text text-light-text">
        <div className="noise-overlay" aria-hidden="true" />

        <LenisProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </LenisProvider>

        <CustomCursor />
        <Analytics />
      </body>
    </html>
  )
}
