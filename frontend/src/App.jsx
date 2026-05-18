// Components
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
  return (
    <>
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
    </>
  )
}
