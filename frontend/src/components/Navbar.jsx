import { useState, useEffect } from 'react'
import { Zap } from 'lucide-react'

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      setScrollProgress((winScroll / height) * 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 h-0.5 bg-primary-container z-[100] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {['#hero', '#how-it-works', '#services', '#cities', '#about'].map((href, i) => (
          <a
            key={href}
            href={href}
            aria-label={`Navigate to section ${i + 1}`}
            className={`w-3 h-3 rounded-full border-2 transition-colors ${
              i === 0
                ? 'bg-primary-container border-primary-container'
                : 'bg-transparent border-outline hover:border-primary-container'
            }`}
          />
        ))}
      </div>

      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group" id="nav-logo">
            <Zap className="text-primary w-6 h-6 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
            <span className="font-extrabold text-[17px] tracking-tight text-on-surface">
              Fleet <span className="text-primary-container">Mobilities</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <a className="text-primary font-bold font-body-md" href="#hero">Home</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#about">About</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#services">Services</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#connect">Contact</a>
          </nav>

          {/* CTA */}
          <a
            href="#hero"
            id="nav-early-access-btn"
            className="bg-primary-container text-white px-6 py-2 rounded-full font-label-sm uppercase tracking-wider hover:opacity-90 hover:scale-105 transition-all"
          >
            Launching Soon !
          </a>
        </div>
      </header>
    </>
  )
}
