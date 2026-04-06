'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      bar.style.width = `${progress * 100}%`
    }

    // Lenis fires scroll events on window — on écoute les deux
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] pointer-events-none dark:bg-dark-border/40 bg-light-border/40"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full bg-primary transition-none"
        style={{ width: '0%' }}
      />
    </div>
  )
}
