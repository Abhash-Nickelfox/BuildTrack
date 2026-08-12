import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to the element matching the URL hash on route change (needed
 * because React Router's <Link to="/#id"> does not trigger the browser's
 * native same-page anchor scroll), otherwise scrolls to the top.
 * Mount once near the root, inside the router.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
