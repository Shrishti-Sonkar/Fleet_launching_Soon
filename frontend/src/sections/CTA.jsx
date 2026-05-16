import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { subscribeEmail } from '../utils/api'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      const data = await subscribeEmail(email.trim(), 'cta')
      setStatus('success')
      setMessage(data.message)
      setEmail('')
    } catch (err) {
      setStatus('error')
      setMessage(err.message)
    }
  }

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="bg-primary-container rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
        {/* Texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}
        />

        <div className="relative z-10 space-y-8">
          <h2 className="font-headline-xl text-white text-headline-lg-mobile md:text-headline-xl">
            Don&apos;t miss the launch.
          </h2>
          <p className="text-white/80 font-body-lg max-w-2xl mx-auto">
            Be among the first 100 users to get exclusive early-bird discounts and lifetime
            membership perks.
          </p>

          {status === 'success' ? (
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-full">
              <CheckCircle className="text-white w-5 h-5" />
              <span className="text-white font-semibold text-sm">{message}</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto"
            >
              <input
                id="cta-email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === 'loading'}
                className="flex-1 w-full sm:w-auto bg-white/15 border border-white/30 text-white placeholder-white/60 px-6 py-4 rounded-full outline-none focus:bg-white/25 transition-all font-body-md disabled:opacity-60"
              />
              <button
                id="cta-waitlist-btn"
                type="submit"
                disabled={status === 'loading'}
                className="bg-white text-primary-container px-10 py-4 rounded-full font-headline-md text-headline-md hover:scale-105 transition-transform disabled:opacity-70 disabled:hover:scale-100 whitespace-nowrap"
              >
                {status === 'loading' ? 'Joining…' : 'Join Waitlist Now'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-white/80 text-sm">{message}</p>
          )}
        </div>
      </div>
    </section>
  )
}
