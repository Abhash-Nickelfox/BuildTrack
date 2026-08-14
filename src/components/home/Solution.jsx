import architectureImage from '../../assets/solution-architecture.jpg'

const STEPS = [
  {
    step: 'Step 1',
    title: 'Discovery & Requirements',
    description:
      'Mapped the existing compliance workflow across data submission, payment collection, verification, and project oversight to identify the key gaps and requirements for a centralized digital platform.',
  },
  {
    step: 'Step 2',
    title: 'Secure Auth & RBAC',
    description:
      'Built a secure access flow with OTP-verified registration, email and password login, and password recovery, while giving administrators control over user activation and access.',
  },
  {
    step: 'Step 3',
    title: 'Field User Portal',
    description:
      'Designed a structured user portal for project managers to submit initial and ongoing waste data, with draft saving, confirmation prompts, and a clear view of their submission history.',
  },
  {
    step: 'Step 4',
    title: 'Payments Integration',
    description:
      'Integrated secure online payment processing with an offline payment-slip workflow, bringing payment submission, status tracking, and verification into the same platform.',
  },
  {
    step: 'Step 5',
    title: 'Command Center Admin',
    description:
      'Built a centralized admin workspace giving administrators clear visibility across users, project submissions, payment records, and refund activity, all from one authenticated platform.',
  },
  {
    step: 'Step 6',
    title: 'Global Deployment',
    description:
      'Delivered the platform as a desktop web portal, bringing the complete compliance workflow into a centralized system for project managers and administrators.',
  },
]

export function Solution() {
  return (
    <section id="solution" className="bg-surface-container py-32">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <h2 className="mb-6 text-center text-headline-lg text-primary md:text-display-lg">Solution Architecture</h2>
        <p className="mb-6 text-center text-body-lg text-on-surface-variant">
          BuildTrack was designed to connect the workflows that were previously managed across
          separate channels. A dedicated user panel handles waste-data submissions and payments,
          while the admin panel provides centralized control over users, payment verification,
          project records, and refunds.
        </p>
        <p className="mb-12 text-center text-body-lg text-on-surface-variant">
          Underneath, both experiences are supported by a shared backend, database, and API layer,
          creating a structured flow of information from submission through verification and
          project oversight.
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
