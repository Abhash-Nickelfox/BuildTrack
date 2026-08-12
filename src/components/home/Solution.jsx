import architectureImage from '../../assets/solution-architecture.jpg'

const STEPS = [
  {
    step: 'Step 1',
    title: 'Discovery & Requirements',
    description:
      'Extensive field research with project managers and back-office staff to map the existing fragmented workflows and define critical data points required for regulatory compliance.',
  },
  {
    step: 'Step 2',
    title: 'Secure Auth & RBAC',
    description:
      'Implemented a robust Role-Based Access Control (RBAC) system, ensuring field teams only see relevant project data while administrators maintain secure, global oversight.',
  },
  {
    step: 'Step 3',
    title: 'Field User Portal',
    description:
      'Designed a mobile-responsive, high-efficiency data entry portal tailored for on-site environments, minimizing clicks and validating data at the point of entry.',
  },
  {
    step: 'Step 4',
    title: 'Payments Integration',
    description:
      'Developed a secure API layer to interface with existing financial systems, enabling automated reconciliation and triggering instant reimbursement workflows.',
  },
  {
    step: 'Step 5',
    title: 'Command Center Admin',
    description:
      'Built a dense, data-rich command center providing real-time telemetry on compliance metrics, aggregate waste tracking, and financial reconciliation statuses.',
  },
  {
    step: 'Step 6',
    title: 'Global Deployment',
    description:
      'Executed a phased rollout strategy across multiple international sites, complete with digital training modules and continuous iteration based on live user feedback.',
  },
]

export function Solution() {
  return (
    <section id="solution" className="bg-surface-container py-32">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <h2 className="mb-6 text-headline-lg text-primary md:text-display-lg">Solution Architecture</h2>
        <p className="mb-12 max-w-3xl text-body-lg text-on-surface-variant">
          We designed a comprehensive digital ecosystem to address these systemic issues from the
          ground up. By focusing on a seamless flow of data from the muddy construction site to
          the sophisticated back-office ledger, our architecture ensures high integrity, instant
          visibility, and robust security at every touchpoint.
        </p>

        <div className="mb-16 w-full overflow-hidden rounded-2xl border border-outline-variant/20 shadow-xl">
          <img
            src={architectureImage}
            alt="Connected digital workflow architecture diagram"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="rounded-lg border-t-4 border-brand-amber bg-surface-container-lowest p-8 shadow-sm"
            >
              <span className="mb-4 block text-label-sm uppercase tracking-wider text-outline">
                {item.step}
              </span>
              <h5 className="mb-4 text-headline-lg-mobile text-on-surface">{item.title}</h5>
              <p className="text-body-md text-on-surface-variant">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solution
