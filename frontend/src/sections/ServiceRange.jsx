import { motion } from 'framer-motion'
import { Bike, Zap, MonitorSmartphone, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const categories = [
  {
    id: 'cruisers',
    icon: Bike,
    title: 'Cruisers',
    description: 'Classic 350s and Himalayan 411s for the long rides.',
    badge: 'AVAILABLE AT LAUNCH',
    badgeStyle: 'bg-primary/10 text-primary border border-primary/20',
    cardStyle: 'bg-white',
    dark: false,
  },
  {
    id: 'city-scooters',
    icon: MonitorSmartphone,
    title: 'City Scooters',
    description: 'Nimble and fuel-efficient rides for local commutes.',
    badge: 'AVAILABLE AT LAUNCH',
    badgeStyle: 'bg-primary/10 text-primary border border-primary/20',
    cardStyle: 'bg-white',
    dark: false,
  },
  {
    id: 'electric-fleet',
    icon: Zap,
    title: 'Electric Fleet',
    description: 'Zero-emission rides with 120km+ range for eco-tourists.',
    badge: 'COMING SOON',
    badgeStyle: 'bg-primary text-white',
    cardStyle: 'bg-white',
    dark: false,
  },
  {
    id: 'host-your-ride',
    icon: null,
    title: 'Host Your Ride',
    description: 'Earn by listing your idle vehicle on our platform.',
    badge: 'COMING SOON',
    badgeStyle: 'bg-primary text-white',
    cardStyle: 'bg-[#1b1c1c]',
    dark: true,
    logo: true,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function ServiceRange() {
  return (
    <section id="services" className="section-padding bg-surface-low">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-on-surface">
              Our Service Range
            </h2>
            <p className="text-body-md text-on-surface/55 mt-2 max-w-[380px]">
              Tailored for the winding roads of the hills and the busy streets of the valley.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-highest text-xs font-semibold tracking-wider uppercase text-on-surface/60 border border-outline-variant/30">
              4 Categories
            </span>
          </div>
        </AnimatedSection>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.id}
                id={`service-${cat.id}`}
                variants={cardVariants}
                className={`${cat.cardStyle} rounded-xl p-6 shadow-float flex flex-col gap-4 group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float-hover border ${cat.dark ? 'border-white/10' : 'border-surface-high'}`}
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.dark ? 'bg-white/10' : 'bg-primary/10'}`}>
                  {cat.logo ? (
                    <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                      <Zap size={13} className="text-white fill-white" />
                    </div>
                  ) : (
                    <Icon size={20} className={cat.dark ? 'text-primary' : 'text-primary'} />
                  )}
                </div>

                {/* Title & desc */}
                <div className="flex-1">
                  <h3 className={`text-base font-semibold mb-1.5 ${cat.dark ? 'text-white' : 'text-on-surface'}`}>
                    {cat.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${cat.dark ? 'text-white/55' : 'text-on-surface/55'}`}>
                    {cat.description}
                  </p>
                </div>

                {/* Badge */}
                <div className="pt-2 border-t border-surface-high/30">
                  <span className={`text-[9px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full inline-block ${cat.badgeStyle}`}>
                    {cat.badge}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
