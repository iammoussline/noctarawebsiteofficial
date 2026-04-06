'use client'

import { useState, useCallback, useLayoutEffect } from 'react'
import { Preloader } from '@/components/Preloader'
import { HomePage } from '@/components/HomePage'
import { en } from '@/lib/content/en'

export function EnHomePage() {
  const [loaded, setLoaded] = useState(false)
  const [showPreloader, setShowPreloader] = useState(true)

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
        <HomePage content={en} />
      </div>
    </>
  )
}
