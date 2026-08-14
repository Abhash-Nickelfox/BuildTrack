import overviewImage from '../../assets/overview-image.jpg'

export function Overview() {
  return (
    <section id="overview" className="mx-auto max-w-container-max px-margin-mobile py-32 md:px-margin-desktop">
      <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-2 md:gap-16">
        <div className="overflow-hidden rounded-2xl border border-outline-variant/20 shadow-[0_0_28px_rgba(148,152,163,0.45)]">
          <img
            src={overviewImage}
            alt="Laptop displaying the BuildTrack project dashboard on a construction site desk, next to a hard hat and rolled blueprints"
            className="h-auto w-full object-cover"
          />
        </div>

        <div>
          <h2 className="mb-8 text-headline-lg text-primary md:text-display-lg">
            From Manual Workflows to One Connected Platform
          </h2>
          <p className="mb-6 text-body-lg leading-relaxed text-on-surface-variant">
            Construction waste management was spread across emails, spreadsheets, manual
            submissions, and payment records. Project managers had to manage their data across
            different channels, while administrators spent time tracking submissions, verifying
            payments, and maintaining project records. BuildTrack brought the entire process into
            one place, making it easier for project managers to submit and track data while giving
            administrators a clear view of projects, payments, and compliance.
          </p>
          <p className="text-body-lg leading-relaxed text-on-surface-variant">
            With structured submissions, draft saving, integrated payments, payment verification,
            and centralized project oversight, BuildTrack connects every important step of the
            workflow. What was once a fragmented and manual process becomes a simpler, more
            transparent, and accountable digital workflow, giving every stakeholder better
            visibility and greater control.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Overview
