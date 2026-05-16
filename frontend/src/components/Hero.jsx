import { useState } from 'react'
import { ShieldCheck, Infinity, CheckCircle } from 'lucide-react'
import { subscribeEmail } from '../utils/api'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      const data = await subscribeEmail(email.trim(), 'hero')
      setStatus('success')
      setMessage(data.message)
      setEmail('')
    } catch (err) {
      setStatus('error')
      setMessage(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen pt-24 flex items-center relative overflow-hidden bg-warm-cream"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ── Left Content ── */}
        <div className="space-y-8 z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-primary-container/30 shadow-[0_0_25px_rgba(255,107,0,0.4)] hover:shadow-[0_0_35px_rgba(255,107,0,0.6)] transition-all duration-300 cursor-default">
            <div className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-80"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary-container shadow-[0_0_10px_rgba(255,107,0,0.8)]"></span>
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-on-surface">
              Launching Soon
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface leading-tight">
            Rent · Ride · <span className="text-primary-container">Repeat</span>
          </h2>

          {/* Body */}
          <p className="font-body-lg text-secondary max-w-md">
            Explore your city with ease rent bikes instantly and ride on your terms.
          </p>

          {/* Email form */}
          {status === 'success' ? (
            <div className="flex items-center gap-3 px-6 py-4 bg-emerald-50 border border-emerald-200 rounded-2xl max-w-lg">
              <CheckCircle className="text-emerald-500 flex-shrink-0 w-5 h-5" />
              <p className="text-emerald-700 font-medium text-sm">{message}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-full shadow-lg border border-outline-variant/20 max-w-lg"
            >
              <input
                id="hero-email-input"
                aria-label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
                className="flex-1 bg-transparent border-none focus:ring-0 px-6 font-body-md outline-none disabled:opacity-60"
                placeholder="Enter your email"
              />
              <button
                id="hero-notify-btn"
                type="submit"
                disabled={status === 'loading'}
                className="bg-primary-container text-white px-8 py-4 rounded-full font-headline-md text-body-md hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? 'Joining…' : 'Notify Me'}
              </button>
            </form>
          )}

          {/* Error message */}
          {status === 'error' && (
            <p className="text-red-500 text-sm font-medium -mt-4 pl-2">{message}</p>
          )}

          {/* Trust badges */}
          <div className="flex flex-wrap xl:flex-nowrap gap-2 sm:gap-3 pt-4 w-full">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/50 rounded-lg border border-outline-variant/10 whitespace-nowrap">
              <ShieldCheck className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-label-sm">Trusted Insurance</span>
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/50 rounded-lg border border-outline-variant/10 whitespace-nowrap">
              <Infinity className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-label-sm">Unlimited Km</span>
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/50 rounded-lg border border-outline-variant/10 whitespace-nowrap">
              <CheckCircle className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-label-sm">Trusted by many</span>
            </div>
          </div>
        </div>

        {/* ── Right: App Mockup ── */}
        <div className="relative h-[600px] hidden md:flex items-center justify-center">
          <div className="absolute w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-3xl" />

          {/* Main card */}
          <div className="relative glass-card w-72 rounded-[2rem] shadow-2xl p-6 border border-white/50 z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex justify-between items-center mb-6">
              <span className="font-headline-md text-body-md font-bold">Find a Ride</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="11" y1="18" x2="13" y2="18" />
              </svg>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-3 shadow-sm border border-outline-variant/10">
                <img alt="Classic 350 Motorcycle" className="w-full h-32 object-cover rounded-xl mb-3"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA15ibcWcvgQml0kdjPSR-9y5D0dNLUAOLQkSBZYZuBTL0z5pkMlf7DBKMV-lMx30aPNMtMgTomEO-j_E-I_-FbqRDVphvX0X8ypOMoM4SJvojvAHAt2rR8siN5pQb_vML9ZQiCOF1Ubmu02YnjlhppWe0nP45SQg0ML-T7Dn6xPGTlNpZCE7b4tiL3HCZ6-oxLqMxZluVx8SgDvybwAefLfrvQyEqsqlk38aj38piNDex0oCswdy839P9kzJBXKwC4GoQqKYzBPFEr" />
                <div className="flex justify-between items-center">
                  <span className="font-label-sm font-bold">Classic 350</span>
                  <span className="text-primary-container font-bold">₹799/d</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-3 shadow-sm border border-outline-variant/10">
                <img alt="Fleet Electric Scooter" className="w-full h-32 object-cover rounded-xl mb-3"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUdQ65SyjXkR9Ks7Q6BDwuxt467zXJG9p-ecViJuYobAjwD763iSjYdMz_R7gjvpq1rfzi5SJBRrSYxxpgeMjUJeqssuYRrsQmOdEDPl7i5Z3tJvz7CHhsD5i8wP0VfxNeq3lgIgzCXkTS4f0r-UopnH5hT8WiORsMvnJEI4sVG-tOLp2RnsNz_Po1wMXCRXTLXV0uUOmmTwuS2nw1b3CInAUEIel9Z7-CaH7PhrVt0Ji_plTlEBDv40WPgiEwGNVqEL5j_ShcOrwN" />
                <div className="flex justify-between items-center">
                  <span className="font-label-sm font-bold">Fleet Electric</span>
                  <span className="text-primary-container font-bold">₹499/d</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat */}
          <div className="absolute top-1/4 -right-10 glass-card p-4 rounded-2xl shadow-xl z-30 transform translate-x-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-container rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M13 2L4.09 12.97H11L10 22l8.91-10.97H13L13 2z" /></svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-secondary uppercase tracking-wider">Fleet Status</p>
                <p className="text-sm font-bold text-on-surface">Ready to Ride ⚡</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
