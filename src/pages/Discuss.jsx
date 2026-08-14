import { useState } from 'react'
import { Icon } from '../components/shared/Icon'
import { supabase } from '../lib/supabase'
import { SITE_PHOTO } from '../lib/constants'

const INTEREST_AREAS = [
  { value: 'compliance', label: 'Waste & Compliance Tracking' },
  { value: 'payments', label: 'Payment Reconciliation' },
  { value: 'oversight', label: 'Project Oversight Dashboard' },
  { value: 'other', label: 'Other' },
]

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  organization: '',
  interestArea: '',
  message: '',
}

const FIELD_CLASS =
  'mt-2 block w-full rounded-lg border-outline-variant bg-white px-4 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'

function FormField({ id, label, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-on-surface">
        {label}
      </label>
      <input id={id} name={id} className={FIELD_CLASS} {...props} />
    </div>
  )
}

export function Discuss() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')

    const { error } = await supabase.from('discuss_submissions').insert([
      {
        name: form.fullName,
        email: form.email,
        phone: form.phone,
        organization: form.organization,
        interest: form.interestArea,
        message: form.message,
      },
    ])

    if (error) {
      console.error('Failed to submit contact form:', error.message)
      setStatus('error')
      return
    }

    setStatus('success')
  }

  const handleReset = () => {
    setForm(INITIAL_FORM)
    setStatus('idle')
  }

  return (
    <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 md:grid-cols-12">
      {/* Editorial hero */}
      <section className="relative flex min-h-[60vh] flex-col justify-end overflow-hidden bg-surface-container-highest p-margin-mobile md:col-span-5 md:min-h-full md:p-margin-desktop">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${SITE_PHOTO}')` }}
          role="img"
          aria-label="Cinematic dusk view of a heavy industrial construction site with cranes and scaffolding"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />

        <div className="relative z-10 mb-8 max-w-lg text-on-primary md:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-brand-amber" />
            <span className="text-label-sm uppercase tracking-[0.1em] text-brand-amber">Let&apos;s Discuss</span>
          </div>
          <h1 className="mb-6 text-display-lg font-bold leading-tight tracking-tight text-on-primary md:text-display-xl">
            Let&apos;s build a better way to work.
          </h1>
          <p className="max-w-md text-body-lg text-on-primary/90">
            Have a complex process, fragmented workflow, or manual operation that needs
            structure? Let&apos;s talk.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="flex items-center justify-center bg-surface p-margin-mobile md:col-span-7 md:p-margin-desktop lg:p-24">
        <div className="w-full max-w-xl">
          {status === 'success' ? (
            <div className="flex flex-col items-start gap-6 pt-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-amber/15">
                <Icon name="check_circle" className="text-3xl text-brand-amber" fill />
              </div>
              <div>
                <h3 className="mb-2 text-headline-lg-mobile font-semibold text-on-surface md:text-headline-lg">
                  Message Sent.
                </h3>
                <p className="text-body-lg text-on-surface-variant">
                  Thanks for reaching out. We&apos;ll be in touch soon.
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 flex items-center gap-2 text-label-sm uppercase tracking-wider text-primary transition-opacity hover:opacity-70"
              >
                <Icon name="arrow_back" className="text-lg" />
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-gutter">
                <FormField
                  id="fullName"
                  label="Full Name"
                  type="text"
                  placeholder="Jane Doe"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="jane@enterprise.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-gutter">
                <FormField
                  id="phone"
                  label="Phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                />
                <FormField
                  id="organization"
                  label="Organization"
                  type="text"
                  placeholder="Acme Construction"
                  value={form.organization}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="interestArea" className="block text-sm font-semibold text-on-surface">
                  Primary Interest Area
                </label>
                <select
                  id="interestArea"
                  name="interestArea"
                  required
                  value={form.interestArea}
                  onChange={handleChange}
                  className={`${FIELD_CLASS} cursor-pointer`}
                >
                  <option value="" disabled hidden>
                    Select an area…
                  </option>
                  {INTEREST_AREAS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-on-surface">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you streamline your compliance workflow?"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`${FIELD_CLASS} min-h-[120px] resize-y`}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-primary px-10 font-body-md text-on-primary transition-colors hover:bg-on-surface disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending…' : 'Submit'}
                  <Icon name="arrow_forward" className="text-base" />
                </button>

                {status === 'error' && (
                  <p className="mt-3 text-body-md font-bold text-error">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

export default Discuss
