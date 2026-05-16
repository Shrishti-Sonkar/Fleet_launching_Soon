import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const locations = [
  {
    id: 'dehradun',
    name: 'Dehradun',
    tagline: 'The valley of abundance and our main hub.',
    badge: 'HEADQUARTERS',
    badgeStyle: 'bg-primary text-white',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    overlay: 'from-black/70 via-black/30 to-transparent',
  },
  {
    id: 'mussoorie',
    name: 'Mussoorie',
    tagline: 'Experience the misty home of the Queen of Hills.',
    badge: null,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',
    overlay: 'from-black/70 via-black/30 to-transparent',
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    tagline: 'Adventure gateway by the holy Ganges.',
    badge: null,
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80',
    overlay: 'from-black/70 via-black/20 to-transparent',
  },
]

// Dot navigation indicator
const DotNav = ({ total, active, onDot }) => (
  <div className="hidden md:flex flex-col gap-2 fixed right-8 top-1/2 -translate-y-1/2 z-30">
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        id={`location-dot-${i}`}
        onClick={() => onDot(i)}
        aria-label={`Go to location ${i + 1}`}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          i === active
            ? 'bg-primary scale-125'
            : 'bg-on-surface/20 hover:bg-on-surface/40'
        }`}
      />
    ))}
  </div>
)

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Locations() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section id="locations" className="section-padding bg-[#FFF3E8] relative">
      <DotNav total={locations.length} active={activeIdx} onDot={setActiveIdx} />

      <div className="container-custom">
        <AnimatedSection className="mb-12">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-on-surface">
            Starting in the Heart of the Hills
          </h2>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              id={`location-${loc.id}`}
              variants={cardVariants}
              onMouseEnter={() => setActiveIdx(i)}
              className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-float-md"
              style={{ height: '280px' }}
            >
              {/* Ken Burns background image */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                />
              </div>

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${loc.overlay}`} />

              {/* Text watermark (city name large) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[52px] font-black uppercase tracking-widest text-white/10 select-none pointer-events-none">
                  {loc.name.toUpperCase()}
                </p>
              </div>

              {/* Badge */}
              {loc.badge && (
                <div className="absolute top-4 left-4">
                  <span className={`text-[9px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full ${loc.badgeStyle}`}>
                    {loc.badge}
                  </span>
                </div>
              )}

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin size={12} className="text-primary flex-shrink-0" />
                  <h3 className="text-base font-bold text-white">{loc.name}</h3>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">{loc.tagline}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
