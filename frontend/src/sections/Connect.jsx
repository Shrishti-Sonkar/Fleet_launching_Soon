import { useState } from 'react'
import { Key, Store, CheckCircle, AlertCircle } from 'lucide-react'
import { submitContact } from '../utils/api'

const roles = ['Traveler', 'Host', 'Partner']

const defaultForm = { name: '', email: '', role: 'Traveler', message: '' }

export default function Connect() {
  const [form, setForm] = useState(defaultForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [responseMsg, setResponseMsg] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const data = await submitContact(form)
      setStatus('success')
      setResponseMsg(data.message)
      setForm(defaultForm)
    } catch (err) {
      setStatus('error')
      setResponseMsg(err.message || 'Failed to send your message. Please try again.')
    }
  }

  return (
    <section id="connect" className="py-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── Left: Options ── */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">
              Let&apos;s Connect
            </h3>
            <p className="font-body-md text-secondary">
              Choose how you want to be part of the Fleet Mobilities family.
            </p>

            <div className="space-y-4">
              <div
                id="connect-rent"
                onClick={() => setForm((p) => ({ ...p, role: 'Traveler' }))}
                className={`p-6 rounded-2xl border transition-colors cursor-pointer group ${form.role === 'Traveler'
                  ? 'border-primary-container/60 bg-primary-container/5'
                  : 'border-outline-variant/10 bg-surface-container-low hover:border-primary-container/50'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-colors ${form.role === 'Traveler' ? 'bg-primary-container text-white' : 'bg-white group-hover:bg-primary-container group-hover:text-white'
                    }`}>
                    <Key className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-headline-md text-body-md font-bold">Rent a Ride</p>
                    <p className="font-label-sm text-secondary">Join the waitlist for launch.</p>
                  </div>
                </div>
              </div>

              <div
                id="connect-partner"
                onClick={() => setForm((p) => ({ ...p, role: 'Partner' }))}
                className={`p-6 rounded-2xl border transition-colors cursor-pointer group ${form.role === 'Partner'
                  ? 'border-primary-container/60 bg-primary-container/5'
                  : 'border-outline-variant/10 bg-surface-container-low hover:border-primary-container/50'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-colors ${form.role === 'Partner' ? 'bg-primary-container text-white' : 'bg-white group-hover:bg-primary-container group-hover:text-white'
                    }`}>
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-headline-md text-body-md font-bold">Partner with Us</p>
                    <p className="font-label-sm text-secondary">For business collaborations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-black/5 border border-outline-variant/10">

            {/* Success state */}
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <CheckCircle className="w-16 h-16 text-emerald-500" />
                <h4 className="font-headline-md text-headline-md text-on-surface">Message Sent!</h4>
                <p className="text-secondary font-body-md max-w-sm">{responseMsg}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-8 py-3 bg-primary-container text-white rounded-full font-label-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="connect-name" className="font-label-sm uppercase tracking-wider text-secondary block">
                      Name
                    </label>
                    <input
                      id="connect-name"
                      name="name"
                      type="text"
                      placeholder="Your Full Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary-container transition-all outline-none disabled:opacity-60"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="connect-email" className="font-label-sm uppercase tracking-wider text-secondary block">
                      Email
                    </label>
                    <input
                      id="connect-email"
                      name="email"
                      type="email"
                      placeholder="Enter your Email Address"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary-container transition-all outline-none disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Role */}
                <div className="space-y-4">
                  <label className="font-label-sm uppercase tracking-wider text-secondary block">
                    I am a...
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {roles.map((role) => (
                      <button
                        key={role}
                        type="button"
                        id={`role-${role.toLowerCase()}`}
                        onClick={() => setForm((p) => ({ ...p, role }))}
                        className={`px-6 py-2 rounded-full border-2 font-label-sm transition-colors ${form.role === role
                          ? 'border-primary-container bg-primary-container text-white'
                          : 'border-outline text-secondary hover:border-primary-container'
                          }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="connect-message" className="font-label-sm uppercase tracking-wider text-secondary block">
                    Message
                  </label>
                  <textarea
                    id="connect-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us more..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary-container transition-all outline-none resize-none disabled:opacity-60"
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{responseMsg}</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  id="connect-submit-btn"
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary-container text-white py-5 rounded-xl font-headline-md text-headline-md hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
