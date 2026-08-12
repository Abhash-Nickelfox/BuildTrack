import { Link } from 'react-router-dom'
import { SITE } from '../../lib/constants'

const FOOTER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#challenge', label: 'Problem' },
  { href: '/#solution', label: 'Solution' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#impact', label: 'Impact' },
  { href: '/discuss', label: 'Contact Us' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-lowest">
      <div className="mx-auto grid max-w-container-max grid-cols-12 gap-gutter px-margin-mobile py-24 md:px-margin-desktop">
        <div className="col-span-12 mb-8 md:col-span-4 md:mb-0">
          <span className="mb-4 block text-headline-lg-mobile font-bold text-primary">{SITE.name}</span>
          <p className="text-body-md text-on-surface-variant">
            &copy; {year} {SITE.legalName}. All rights reserved.
          </p>
        </div>

        <div className="col-span-12 flex flex-wrap justify-start gap-8 md:col-span-8 md:justify-end">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              // Router Links are a no-op when already on the target route
              // (e.g. clicking "Home" while already on "/"), so ScrollToTop's
              // location-change effect never fires. Force it here too.
              onClick={
                link.href === '/'
                  ? () => window.scrollTo({ top: 0, behavior: 'smooth' })
                  : undefined
              }
              className="text-body-md font-body-md text-on-surface-variant transition-colors hover:text-brand-navy"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
