import overviewImage from '../../assets/overview-image.jpg'

export function Overview() {
  return (
    <section id="overview" className="mx-auto max-w-container-max px-margin-mobile py-32 md:px-margin-desktop">
      <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-2 md:gap-16">
        <div className="overflow-hidden rounded-2xl border border-outline-variant/20 shadow-xl">
          <img
            src={overviewImage}
            alt="Laptop displaying the BuildTrack project dashboard on a construction site desk, next to a hard hat and rolled blueprints"
            className="h-auto w-full object-cover"
          />
        </div>

        <div>
          <h2 className="mb-8 text-headline-lg text-primary md:text-display-lg">
            From Paper Trails to Digital Intelligence
          </h2>
          <p className="mb-6 text-body-lg leading-relaxed text-on-surface-variant">
            Before BuildTrack, the landscape of heavy industrial construction waste management was a
            labyrinth of manual paper trails, fragmented communication, and isolated data silos.
            Project managers spent countless hours tracking down physical tickets, while
            administrators struggled to reconcile deposits across disconnected ledgers. This
            systemic inefficiency led to severe compliance bottlenecks, delaying critical operations
            and holding up vital project capital.
          </p>
          <p className="text-body-lg leading-relaxed text-on-surface-variant">
            The objective was clear: transform an archaic, analog process into a centralized,
            high-density digital ecosystem. By bridging the gap between on-site personnel and
            back-office administrators, we engineered a platform that not only streamlined
            structured data submission but also automated digital payment reconciliation,
            fundamentally changing how compliance is managed globally.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Overview
