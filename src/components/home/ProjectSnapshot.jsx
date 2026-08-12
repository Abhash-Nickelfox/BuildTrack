const SNAPSHOT = [
  { label: 'Industry', value: 'Construction Tech' },
  { label: 'Platform', value: 'Web & Mobile Web' },
  { label: 'Users', value: 'Project Managers, Admins' },
  { label: 'Focus', value: 'Compliance & Payments' },
  { label: 'Tech', value: 'React, Python, Postgres' },
]

export function ProjectSnapshot() {
  return (
    <section className="border-y border-outline-variant/20 bg-surface-container py-16">
      <div className="mx-auto grid max-w-container-max grid-cols-2 gap-8 px-margin-mobile md:grid-cols-5 md:px-margin-desktop">
        {SNAPSHOT.map((item) => (
          <div key={item.label}>
            <p className="mb-1 text-label-sm uppercase tracking-wider text-on-surface-variant">
              {item.label}
            </p>
            <p className="text-title-md text-on-surface">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectSnapshot
