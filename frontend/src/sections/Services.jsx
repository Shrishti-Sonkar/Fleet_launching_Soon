import { Bike, Wallet, Mountain, IndianRupee } from 'lucide-react'

const features = [
  {
    id: 'instant-rentals',
    icon: Bike,
    title: 'Instant Bike Rentals',
    description: 'Book bikes near you. No paperwork, no waiting.',
    badge: 'Available at Launch',
  },
  {
    id: 'earn-vehicle',
    icon: IndianRupee,
    title: 'Earn with Your Vehicle',
    description: 'List your bike and start earning when you’re not using it.',
    badge: 'Available at Launch',
  },
  {
    id: 'daily-rides',
    icon: Wallet,
    title: 'Affordable Daily Rides',
    description: 'Perfect for college, work, or errands. Pay only for what you use.',
  },
  {
    id: 'long-trips',
    icon: Mountain,
    title: 'Long Trip Ready',
    description: 'Plan your hill rides or weekend trips with reliable bikes and flexible rentals.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold font-label-sm uppercase tracking-widest block">
            What You Can Do with Fleet
          </span>
          <h3 className="font-headline-lg text-headline-lg-mobile md:text-[40px] font-extrabold tracking-tight text-on-surface">
            Everything You Need to Ride Smarter
          </h3>
          <p className="font-body-lg text-secondary">
            From quick city rides to long trips. Fleet makes renting simple, fast, and reliable.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                className="group relative p-8 rounded-[2rem] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-container/20 flex flex-col h-full border border-outline-variant/20 shadow-sm hover:border-primary-container/50 hover:ring-1 hover:ring-primary-container/50"
              >
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${feature.isPrimary
                    ? 'bg-primary-container text-white shadow-md'
                    : 'bg-surface-container-high text-primary group-hover:bg-primary-container group-hover:text-white'
                    }`}
                >
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="flex-grow space-y-3">
                  <h4 className="font-headline-md text-[22px] font-bold text-on-surface leading-tight">
                    {feature.title}
                  </h4>
                  <p className="font-body-md text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Badge (if exists) */}
                {feature.badge && (
                  <div className="mt-8 pt-4 border-t border-outline-variant/10">
                    <span
                      className={`inline-block px-3 py-1 rounded-full font-label-sm text-[11px] font-bold uppercase tracking-wider ${feature.isPrimary
                        ? 'bg-primary-container/10 text-primary-container'
                        : 'bg-surface-container-high text-secondary'
                        }`}
                    >
                      {feature.badge}
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
