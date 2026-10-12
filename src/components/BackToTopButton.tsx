import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    const startingPosition = window.scrollY
    const duration = 850
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easedProgress = 1 - (1 - progress) ** 4
      window.scrollTo(0, startingPosition * (1 - easedProgress))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 420)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return <button className="back-to-top" type="button" onClick={scrollToTop} aria-label="Back to top"><ArrowUp size={19} /></button>
}
