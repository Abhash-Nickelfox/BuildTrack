const EXPERIENCES = [
  {
    title: 'Project Manager Portal',
    description:
      'A streamlined interface designed specifically for on-site personnel. We focused on reducing cognitive load and accelerating data entry, allowing users to quickly draft, save, and submit waste records without friction, even in challenging field conditions.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCVi6XVji0xO000elKC0OQ0aXfgm_82YFTzqLhXdxls9K4hSlo_bJPbD-zqqleqLHJdI8IpWRSGOtLFg6QyI6GsYVrFofvi7glye8AOVsD0nowyEn0c2vHiqD1UEf9RaGGV8ksvfBSMSg2tYPK7NKpWi8AJqvumcHE5hBLejPrnUSQG9k18ulvb7wbcQkA4QCx72gw7pB43OqHixHiu6FGKaLvsVZXDgcT_zeiT14_sMZ5BYCqPv9f5ww',
  },
  {
    title: 'Administrator Dashboard',
    description:
      'High-level oversight providing real-time metrics on active projects, total submissions, and compliance statuses at a glance. This dense data view allows administrators to instantly identify non-compliant sites and drill down into specific project histories with enterprise-grade filtering and search capabilities.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAM5FQqJHapTieg3fb4x-QQPyp1UdXVYqhpHljkdquwjMKTIDsnk1d0BW5RhUvgpyePByryjsEB4xiFhujaxHstctm85YQPAj8ySW5VrCU07jZxv8h4yPDKEEkH0ZvU0iuSieRV6P2QzywdIisnR8HohvRm4NK46PoYQpSGy_5iByeFy918nCpsZ6nNaLc_hiQOMBYnpeaYNQKryZaLVan7zIqylN3jUFDBvJLOBOJB5Psmb82IlRerDQ',
  },
  {
    title: 'Payment Verification Queue',
    description:
      'Structured workflows for reviewing and verifying compliance deposits, transforming a messy offline ledger into a clear, actionable digital queue. Financial administrators can now process reimbursements securely and transparently in a fraction of the time.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB411V-j2RB9xKefjnjSVLJEpkpBRvfv2d9n3Ve7VRKxJ6DHmG90UOKyqWE9cnxF71ipDhFRNSiMOk3Vl5Aq0Rz3zECnDC4CsqdDEHW9lmshFqTv4OiRj3QzUZhr0se0NKxUtE8lH3k39WilkgiC0IjSADlrUW7FZjdTkR4babHvbnAPICFEe8a_qNTZLKkWP_xjn42NX0RihgZA96Hzqv5bAD5CcUhekPnpizUlElRA5e5L12RFdaLgA',
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-container-max px-margin-mobile py-32 md:px-margin-desktop">
      <h2 className="mb-6 text-headline-lg text-primary md:text-display-lg">The Digital Ecosystem</h2>
      <p className="mb-16 max-w-3xl text-body-lg text-on-surface-variant">
        Delivering a complex enterprise solution requires meticulous attention to the user
        experience. We crafted distinct interfaces optimized for their specific
        environments—from the rugged, high-contrast needs of mobile field workers to the dense,
        analytical requirements of back-office financial administrators.
      </p>

      <div className="space-y-32">
        {EXPERIENCES.map((item) => (
          <div key={item.title}>
            <h3 className="mb-6 text-headline-lg text-brand-navy">{item.title}</h3>
            <p className="mb-12 max-w-4xl text-body-lg text-on-surface-variant">{item.description}</p>
            <div className="mx-auto max-w-5xl rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-2 shadow-2xl">
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
