import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Shield, Infinity, ChevronRight, ArrowRight, Zap, Battery } from 'lucide-react'

// Floating phone mockup data
const phoneRides = [
  {
    name: 'Classic 350',
    price: '₹799/d',
    tag: 'POPULAR',
    tagColor: 'bg-primary text-white',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80',
    rating: '4.9',
  },
  {
    name: 'Fleet Electric',
    price: '₹499/d',
    tag: 'ECO',
    tagColor: 'bg-emerald-500 text-white',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&q=80',
    rating: '4.8',
  },
]

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#FFF3E8] overflow-hidden flex items-center pt-16"
    >
      {/* Background decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-primary/8 blur-3xl pointer-events-none" />

      <div className="container-custom w-full py-16 md:py-0 md:min-h-[calc(100vh-68px)] md:flex md:items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center w-full">

          {/* Left – Text Content */}
          <div className="flex flex-col items-start">
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-white rounded-full border border-primary/30 shadow-[0_0_25px_rgba(255,107,0,0.4)] hover:shadow-[0_0_35px_rgba(255,107,0,0.6)] transition-all duration-300 cursor-default"
            >
              <div className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-80"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary shadow-[0_0_10px_rgba(255,107,0,0.8)]"></span>
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-on-surface">
                Launching Soon
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[52px] md:text-[64px] font-extrabold leading-[1.08] tracking-[-0.04em] text-on-surface mb-2"
            >
              Rent&nbsp;·&nbsp;Ride&nbsp;·
              <br />
              <span className="text-primary">Repeat</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[15px] text-on-surface/60 leading-relaxed mt-4 mb-8 max-w-[340px]"
            >
              Mountain-born adventure meets urban convenience. The premium vehicle rental platform built for the Himalayas.
            </motion.p>

            {/* Email form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-[380px]"
            >
              {submitted ? (
                <div className="flex items-center gap-2 px-5 py-3 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium">
                  <Zap size={14} className="fill-emerald-500 text-emerald-500" />
                  You're on the list! We'll notify you.
                </div>
              ) : (
                <>
                  <input
                    id="hero-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 bg-white/80 border border-outline-variant/40 rounded-full px-5 py-3 text-sm text-on-surface placeholder-on-surface/40 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                  <button
                    id="hero-notify-btn"
                    type="submit"
                    className="btn-primary whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </>
              )}
            </motion.form>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-6 mt-8"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white shadow-float flex items-center justify-center">
                  <Shield size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-on-surface">Fully</p>
                  <p className="text-xs text-on-surface/50">Insured</p>
                </div>
              </div>
              <div className="w-px h-8 bg-outline-variant/40" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white shadow-float flex items-center justify-center">
                  <Infinity size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-on-surface">Unlimited</p>
                  <p className="text-xs text-on-surface/50">Km</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right – Phone Mockup */}
          <div className="flex items-center justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Instant Booking floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-6 z-20 bg-white rounded-2xl shadow-float-md px-4 py-2.5 flex items-center gap-2.5 min-w-[130px]"
              >
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <Zap size={14} className="text-white fill-white" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-on-surface/50 uppercase tracking-wider">Fleet Status</p>
                  <p className="text-sm font-bold text-on-surface">Ready to Ride ⚡</p>
                </div>
              </motion.div>

              {/* Phone card */}
              <div className="w-[280px] md:w-[310px] bg-white rounded-[28px] shadow-float-lg p-4 space-y-3 border border-surface-high">
                {/* Card header */}
                <div className="flex items-center justify-between px-1 pb-1 border-b border-surface-high">
                  <p className="text-sm font-semibold text-on-surface">Find a Ride</p>
                  <div className="w-6 h-6 rounded-full bg-surface-low flex items-center justify-center">
                    <ChevronRight size={13} className="text-on-surface/50" />
                  </div>
                </div>

                {/* Ride cards */}
                {phoneRides.map((ride, i) => (
                  <motion.div
                    key={ride.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.12 }}
                    className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-all duration-200 hover:shadow-float ${
                      i === 0 ? 'bg-surface-low' : 'bg-white border border-surface-high'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-surface-mid flex-shrink-0">
                      <img
                        src={ride.image}
                        alt={ride.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-on-surface truncate">{ride.name}</p>
                      <p className="text-xs text-on-surface/50 mt-0.5">{ride.price}</p>
                    </div>
                    <span className={`text-[9px] font-bold px-2 py-1 rounded-full ${ride.tagColor}`}>
                      {ride.tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
