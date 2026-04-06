'use client'

import { useState, useCallback, useLayoutEffect } from 'react'
import { Preloader } from '@/components/Preloader'
import { HomePage } from '@/components/HomePage'
import { fr } from '@/lib/content/fr'

export default function PageFR() {
  const [loaded, setLoaded] = useState(false)
  const [showPreloader, setShowPreloader] = useState(true)

  // Avant le premier rendu visible : si l'animation a déjà été vue cette session,
  // on ne montre pas le preloader du tout (zéro flash)
  useLayoutEffect(() => {
    if (sessionStorage.getItem('noctara-loaded')) {
      setShowPreloader(false)
      setLoaded(true)
    }
  }, [])

  const handleLoaded = useCallback(() => {
    setLoaded(true)
    setShowPreloader(false)
  }, [])

  return (
    <>
      {showPreloader && <Preloader onComplete={handleLoaded} />}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        <HomePage content={fr} />
      </div>
    </>
  )
}
