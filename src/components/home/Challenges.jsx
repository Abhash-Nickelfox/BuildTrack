const CHALLENGE_BG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCIaRPX53MYqeKiVmSb4EQfz_KCOuvIBhlfr2wT-A2ghZSu4o7OUA-JG8p7sQChJB47Wsok8ddUyHb2SzjsDJ4ZAQMlLB5wEAOBT_vinfZXk3bbVS0Oriufsdaybyz1tw-zc3ZLe0DR0DCC3O_UV91naW297pda7bcRqwPaigP-FqB9my0xMvfmMKbKbwDzo950y2qD73Wg6B50QGk5Zjdlwgohje3QqUm818AbKbGb2bW5rMIdVwv5RQ'

const CHALLENGES = [
  {
    number: '01',
    title: 'No Structured Data',
    description:
      'Relying on unstructured emails, physical forms, and disparate spreadsheets resulted in inconsistent reporting and massive data loss. Field teams lacked a standardized method to capture critical waste metrics, leading to downstream administrative nightmares and compliance risks.',
  },
  {
    number: '02',
    title: 'Manual Payment Tracking',
    description:
      'Reconciling thousands of deposits across multiple offline ledgers was incredibly error-prone. This manual bottleneck delayed contractor reimbursements by weeks, causing unnecessary friction with vendors and tying up critical project cash flow.',
  },
  {
    number: '03',
    title: 'Lack of Visibility',
    description:
      'Administrators had absolutely no real-time overview of compliance status across active sites globally. Generating a simple status report required days of manual aggregation, leaving leadership blind to potential regulatory violations until it was too late.',
  },
]

export function Challenges() {
  return (
    <section id="challenge" className="relative bg-surface py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-multiply"
        style={{ backgroundImage: `url('${CHALLENGE_BG}')` }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <h2 className="mb-6 text-headline-lg text-primary md:text-display-lg">Systemic Friction Points</h2>
        <p className="mb-16 max-w-3xl text-body-lg text-on-surface-variant">
          The construction industry relies heavily on operational efficiency, yet the processes
          managing waste compliance remained stubbornly analog. Field teams and back-office
          administrators alike faced significant daily hurdles, leading to data loss, financial
          delays, and mounting regulatory exposure across multiple active project sites.
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
