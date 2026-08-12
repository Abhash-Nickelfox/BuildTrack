import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element with a fade/slide-in effect once it scrolls into view.
 * Usage: const [ref, isVisible] = useReveal(); <div ref={ref} className={isVisible ? 'opacity-100' : 'opacity-0'} />
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, isVisible]
}
