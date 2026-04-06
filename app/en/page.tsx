import type { Metadata } from 'next'
import { EnHomePage } from './EnHomePage'

export const metadata: Metadata = {
  title: 'Noctara. — Professional Photographer | Clermont-Ferrand',
  description: 'Professional photographer in Clermont-Ferrand, France. Portrait, wedding, corporate, events. Every moment has only one chance.',
  alternates: {
    canonical: 'https://thenoctara.com/en',
    languages: {
      'x-default': 'https://thenoctara.com/',
      'fr': 'https://thenoctara.com/',
      'en': 'https://thenoctara.com/en',
    },
  },
  openGraph: {
    locale: 'en_US',
    title: 'Noctara. — Professional Photographer | Clermont-Ferrand',
    description: 'Portrait, wedding, corporate, events. Every moment has only one chance.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Noctara. — Professional Photographer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noctara. — Professional Photographer | Clermont-Ferrand',
    description: 'Portrait, wedding, corporate, events. Every moment has only one chance.',
    images: ['/og.jpg'],
  },
}

export default function PageEN() {
  return <EnHomePage />
}
