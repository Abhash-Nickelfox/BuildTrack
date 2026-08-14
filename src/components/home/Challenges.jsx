import challengeBg from '../../assets/challenge-bg-image.jpg'

const CHALLENGES = [
  {
    number: '01',
    title: 'Unstructured Data',
    description:
      'Waste data was shared through emails and spreadsheets, making submissions inconsistent and difficult to track. Without structured forms or a central submission history, project managers had limited visibility and administrators had to manage information manually.',
  },
  {
    number: '02',
    title: 'Manual Payment Tracking',
    description:
      'Compliance payments were handled through bank transfers and manual receipts, with payment status tracked outside the platform. This created reconciliation delays and made it difficult to maintain a clear, reliable record of payment activity.',
  },
  {
    number: '03',
    title: 'Lack of Visibility',
    description:
      'Administrators had no single view of users, project submissions, waste records, and payment history. Information had to be cross-referenced across different sources, making project oversight slower and more difficult to manage.',
  },
]

export function Challenges() {
  return (
    <section id="challenge" className="relative bg-surface py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-multiply"
        style={{ backgroundImage: `url('${challengeBg}')` }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <h2 className="mb-6 text-headline-lg text-primary md:text-display-lg">Where the Process Breaks Down</h2>
        <p className="mb-16 max-w-3xl text-body-lg text-on-surface-variant">
          Construction waste compliance depended on disconnected processes, from data submission
          and payment collection to verification and project tracking. Without a structured
          system, project managers and administrators faced unnecessary manual work, limited
          visibility, and gaps in the overall workflow.
        </p>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.map((challenge) => (
            <div
              key={challenge.number}
              className="flex flex-col rounded-xl border border-outline-variant/20 bg-surface-container-lowest/90 p-8 shadow-sm backdrop-blur-sm"
            >
              <span className="mb-4 block text-display-lg text-brand-amber">{challenge.number}</span>
              <h4 className="mb-4 text-title-md text-on-surface">{challenge.title}</h4>
              <p className="flex-grow text-body-md text-on-surface-variant">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Challenges
