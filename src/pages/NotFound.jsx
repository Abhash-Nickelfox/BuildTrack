import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-margin-mobile text-center md:px-margin-desktop">
      <p className="text-label-sm text-brand-amber">404</p>
      <h1 className="mt-2 text-headline-lg text-primary md:text-display-lg">Page not found</h1>
      <p className="mt-4 max-w-md text-body-md text-on-surface-variant">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-label-sm text-on-primary shadow-sm transition-opacity hover:opacity-80"
      >
        Back to home
      </Link>
    </section>
  )
}

export default NotFound
