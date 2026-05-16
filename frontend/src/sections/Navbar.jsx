import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#locations' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-float border-b border-outline-variant/30'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-16 md:h-[68px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group" id="nav-logo">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-orange-glow group-hover:scale-105 transition-transform duration-200">
              <Zap size={16} className="text-white fill-white" />
            </div>
            <span className="text-[17px] font-bold tracking-tight text-on-surface">
              Fleet
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-on-surface/70 hover:text-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button id="nav-waitlist-btn" className="btn-primary text-sm px-5 py-2.5">
              Join Waitlist
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="nav-mobile-menu-btn"
            className="md:hidden p-2 rounded-lg text-on-surface hover:bg-surface-mid transition-colors"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed top-16 left-0 right-0 z-40 glass-nav border-b border-outline-variant/30 px-5 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-base font-medium text-on-surface/80 hover:text-primary transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <button id="nav-mobile-waitlist-btn" className="btn-primary mt-2 self-start">
              Join Waitlist
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
