import experiencePmPortal from '../../assets/experience-pm-portal.jpg'
import experienceAdminDashboard from '../../assets/experience-admin-dashboard.jpg'
import experiencePaymentQueue from '../../assets/experience-payment-queue.jpg'

const EXPERIENCES = [
  {
    title: 'Project Manager Portal',
    description:
      'A structured workspace that gives project managers a clear view of their submissions and project activity. From initial and ongoing waste-data submissions to draft saving and payment management, everything is organized within one centralized portal.',
    image: experiencePmPortal,
  },
  {
    title: 'Administrator Dashboard',
    description:
      'A centralized workspace for managing users, monitoring project submissions, reviewing payment activity, and maintaining project records. The dashboard brings key administrative tasks into one place, giving administrators a clear view of the overall compliance workflow.',
    image: experienceAdminDashboard,
  },
  {
    title: 'Payment Verification Queue',
    description:
      'A structured workspace for reviewing submitted payments, checking payment details and supporting documents, and updating payment status. Administrators can manage payment verification alongside the broader project and compliance workflow.',
    image: experiencePaymentQueue,
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-container-max px-margin-mobile py-32 md:px-margin-desktop">
      <h2 className="mb-6 text-headline-lg text-primary md:text-display-lg">The BuildTrack Experience</h2>
      <p className="mb-16 max-w-5xl text-body-lg text-on-surface-variant">
        BuildTrack brings two sides of the compliance workflow together in one connected
        platform. Project managers get a structured space to submit and track waste data, manage
        payments, and view their submission status, while administrators have centralized tools
        for user management, payment verification, project oversight, and refunds.
      </p>

      <div className="space-y-32">
        {EXPERIENCES.map((item) => (
          <div key={item.title} className="mx-auto max-w-5xl">
            <h3 className="mb-6 text-headline-lg text-brand-navy">{item.title}</h3>
            <p className="mb-12 text-body-lg text-on-surface-variant">{item.description}</p>
            <div className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-2 shadow-2xl">
              <img
                src={item.image}
                alt={`${item.title} interface`}
                className="h-auto w-full rounded-lg object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
