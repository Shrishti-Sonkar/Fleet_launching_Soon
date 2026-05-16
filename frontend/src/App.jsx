import { useState } from 'react'

// Components
import IntroAnimation from './components/IntroAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

// Sections
import HowItWorks from './sections/HowItWorks'
import Services from './sections/Services'
import Cities from './sections/Cities'
import About from './sections/About'
import Team from './sections/Team'
import Connect from './sections/Connect'
import CTA from './sections/CTA'

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {/* ── Intro animation overlay (shown first, slides up when done) ── */}
      <IntroAnimation onDone={() => setIntroDone(true)} />

      {/* ── Main site (rendered underneath; becomes interactive after intro) ── */}
      <div className={`transition-opacity duration-500 ${introDone ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />

        <main>
          <Hero />
          <HowItWorks />
          <Services />
          <Cities />
          <About />
          <Team />
          <Connect />
          <CTA />
        </main>

        <Footer />
      </div>
    </>
  )
}
