import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Tracks which section id (from a list of ids) is currently active in the
 * viewport, for use in scrollspy-style navigation highlighting. Resets to
 * null on routes that don't contain any of the given sections (e.g. the
 * Navbar stays mounted across routes, so without this it would keep
 * showing the last-active in-page link as "active" on other pages).
 */
export function useActiveSection(sectionIds = [], { rootMargin = '-40% 0px -55% 0px' } = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null)
  const { pathname } = useLocation()

  useEffect(() => {
    if (!sectionIds.length || typeof IntersectionObserver === 'undefined') return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) {
      setActiveId(null)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds, rootMargin, pathname])

  return activeId
}

export default useActiveSection
