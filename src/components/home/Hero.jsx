import { Link } from 'react-router-dom'
import { Icon } from '../shared/Icon'
import { SITE, SITE_PHOTO } from '../../lib/constants'
import heroDashboardPreview from '../../assets/hero-dashboard-preview.png'

export function Hero() {
  return (
    <section className="relative flex min-h-[720px] w-full items-center justify-center overflow-hidden bg-surface-container-lowest pb-12">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${SITE_PHOTO}')` }}
          role="img"
          aria-label="Cinematic dusk view of a heavy industrial construction site with cranes and scaffolding"
        />
        <div className="absolute inset-0 w-3/5 bg-gradient-to-r from-brand-navy/95 via-brand-navy/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
        <div className="flex flex-col justify-center md:col-span-7">
          <h1 className="-mt-4 mb-6 max-w-3xl text-display-lg text-on-primary lg:text-display-xl">
            {SITE.taglineBase} <span className="text-brand-amber">{SITE.taglineAccent}</span>
          </h1>

          <p className="mb-8 max-w-xl text-body-lg text-on-primary/90">{SITE.description}</p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/discuss"
              className="flex items-center gap-2 rounded-lg bg-brand-amber px-8 py-4 font-body-md font-bold text-brand-navy shadow-lg transition-colors hover:bg-brand-amber/90"
            >
              Explore the Platform
              <Icon name="arrow_forward" className="text-base" />
            </Link>
          </div>
        </div>

        <div className="relative hidden md:col-span-5 md:block">
          <div className="absolute right-0 top-1/2 w-full max-w-[420px] -translate-y-1/2 overflow-hidden rounded-xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-label-sm uppercase tracking-widest text-on-primary/80">
                Project Oversight
              </span>
              <Icon name="monitoring" className="text-brand-amber" />
            </div>

            <div className="relative mb-5 h-40 overflow-hidden rounded-lg">
              <img
                src={heroDashboardPreview}
                alt="BuildTrack admin dashboard preview"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-sm font-medium text-on-primary/80">Active Projects</span>
                <span className="text-sm font-bold text-on-primary">124</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-sm font-medium text-on-primary/80">Submissions</span>
                <span className="text-sm font-bold text-brand-amber">3,502</span>
              </div>
              <div className="mt-4 flex h-12 items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4">
                <span className="text-xs font-medium text-on-primary/80">Status</span>
                <div className="flex items-center gap-1.5 rounded-md bg-brand-amber/15 px-2.5 py-1 text-brand-amber">
                  <Icon name="check_circle" className="text-base" fill />
                  <span className="text-xs font-bold">Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
