import { useState, useEffect } from 'react'
import { Zap, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 h-0.5 bg-primary-container z-[100] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-3 md:py-4 max-w-container-max mx-auto">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-1.5 md:gap-2 group flex-shrink-0" id="nav-logo" onClick={closeMobileMenu}>
            <img src="/LOGO.png" alt="Fleet Mobilities" className="h-6 md:h-8 w-auto group-hover:scale-110 transition-transform object-contain" />
            <span className="font-extrabold text-[15px] md:text-[17px] tracking-tight text-on-surface whitespace-nowrap">
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

          {/* Right Section: CTA & Hamburger */}
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            {/* CTA */}
            <a
              href="#hero"
              id="nav-early-access-btn"
              onClick={closeMobileMenu}
              className="bg-primary-container text-white px-3 py-1.5 md:px-6 md:py-2 rounded-full text-[10px] sm:text-[11px] md:font-label-sm uppercase tracking-wider hover:opacity-90 hover:scale-105 transition-all font-bold"
            >
              Launching Soon<span className="hidden sm:inline"> !</span>
            </a>

            {/* Hamburger Button (Mobile) */}
            <button
              className="md:hidden p-1 text-on-surface hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-outline-variant/20 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="flex flex-col px-margin-mobile gap-1">
            <a className="text-on-surface font-headline-md text-[18px] py-3 border-b border-outline-variant/10 hover:text-primary transition-colors" href="#hero" onClick={closeMobileMenu}>Home</a>
            <a className="text-on-surface-variant font-headline-md text-[18px] py-3 border-b border-outline-variant/10 hover:text-primary transition-colors" href="#about" onClick={closeMobileMenu}>About</a>
            <a className="text-on-surface-variant font-headline-md text-[18px] py-3 border-b border-outline-variant/10 hover:text-primary transition-colors" href="#services" onClick={closeMobileMenu}>Services</a>
            <a className="text-on-surface-variant font-headline-md text-[18px] py-3 hover:text-primary transition-colors" href="#connect" onClick={closeMobileMenu}>Contact</a>
          </div>
        </div>
      </header>
    </>
  )
}
