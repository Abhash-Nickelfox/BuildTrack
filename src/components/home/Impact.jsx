import impactBg from '../../assets/impact-bg-image.jpg'

const STATS = [
  {
    metric: '100%',
    title: 'Full Digitization of Forms',
    description:
      'Completely eliminated physical paper trails across all active sites, ensuring structured, queryable data and drastically reducing submission errors.',
  },
  {
    metric: 'Instant',
    title: 'Payment Reconciliation',
    description:
      'Reduced processing time by 80%, transforming weeks of manual ledger checking into a seamless, API-driven automated reconciliation workflow.',
  },
  {
    metric: 'Global',
    title: 'Compliance Visibility',
    description:
      'Provided executive leadership and administrators with an unprecedented real-time overview of compliance status, mitigating regulatory risk globally.',
  },
]

export function Impact() {
  return (
    <section id="impact" className="relative w-full overflow-hidden py-20 md:py-24">
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url('${impactBg}')` }}
        role="img"
        aria-label="Wide-angle photograph of a completed modern bridge infrastructure project at sunrise"
      />
      <div className="absolute inset-0 bg-[#0F1C2E]/80 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
        <h2 className="mb-4 text-display-lg text-on-primary md:text-display-xl">Operational Impact</h2>
        <p className="mx-auto mb-10 max-w-3xl text-body-lg text-on-primary/90">
          The deployment of BuildTrack transformed an error-prone, fragmented system into a
          unified engine of operational efficiency. The downstream effects on cash flow,
          regulatory compliance, and team morale have fundamentally elevated the
          organization&apos;s capabilities.
        </p>

        <div className="grid grid-cols-1 gap-6 border-t border-white/20 pt-10 text-left md:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h4 className="mb-4 text-display-lg text-brand-amber">{stat.metric}</h4>
              <p className="mb-4 text-title-md font-bold text-on-primary">{stat.title}</p>
              <p className="text-body-md text-on-primary/80">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact
