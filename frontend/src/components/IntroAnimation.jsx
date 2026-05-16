import { useEffect, useRef, useState } from 'react'

export default function IntroAnimation({ onDone }) {
  const containerRef = useRef(null)
  const bikeRef = useRef(null)
  const bubbleRef = useRef(null)
  const textRef = useRef(null)
  const overlayRef = useRef(null)

  const [showSkip, setShowSkip] = useState(true)
  const [isDone, setIsDone] = useState(false)

  const reqRef = useRef()
  const stateRef = useRef({ stage: 0, startTime: null })

  // Custom Easing functions as requested
  const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  const easeInCubic = (t) => t * t * t

  const startAnimation = () => {
    cancelAnimationFrame(reqRef.current)
    stateRef.current = { stage: 0, startTime: window.performance.now() }
    setShowSkip(true)

    // Reset styles
    if (bikeRef.current) {
      bikeRef.current.style.transform = `translateX(-100vw)`
      bikeRef.current.style.filter = 'none'
    }
    if (bubbleRef.current) {
      bubbleRef.current.style.opacity = '0'
      bubbleRef.current.style.transform = `scale(0.8) translateY(20px)`
    }
    if (textRef.current) {
      textRef.current.style.opacity = '0'
      textRef.current.style.transform = `translateY(20px)`
    }
    if (overlayRef.current) {
      overlayRef.current.style.transform = 'translateY(0)'
      overlayRef.current.style.opacity = '1'
    }

    const animate = (time) => {
      const state = stateRef.current
      if (!state.startTime) state.startTime = time
      const elapsed = time - state.startTime

      if (state.stage === 0) {
        // Stage 0: Bike Entry (1s)
        const duration = 1000
        const progress = Math.min(elapsed / duration, 1)
        const ease = easeInOutQuad(progress)

        if (bikeRef.current) {
          bikeRef.current.style.transform = `translateX(${-100 + (ease * 100)}vw)`
        }

        if (progress === 1) {
          state.stage = 1
          state.startTime = time
        }
      }
      else if (state.stage === 1) {
        // Stage 1: Bubble pop up (0.5s)
        const duration = 500
        const progress = Math.min(elapsed / duration, 1)
        const ease = easeInOutQuad(progress)

        if (bubbleRef.current) {
          bubbleRef.current.style.opacity = progress
          bubbleRef.current.style.transform = `scale(${0.8 + ease * 0.2}) translateY(${20 - ease * 20}px)`
        }

        if (progress === 1) {
          state.stage = 2
          state.startTime = time
        }
      }
      else if (state.stage === 2) {
        // Stage 2: Pause (2s)
        if (elapsed > 2000) {
          state.stage = 3
          state.startTime = time
        }
      }
      else if (state.stage === 3) {
        // Stage 3: Exit animation (0.8s)
        const duration = 800
        const progress = Math.min(elapsed / duration, 1)
        const ease = easeInCubic(progress) // Accelerate out

        if (bikeRef.current) {
          bikeRef.current.style.transform = `translateX(${ease * 150}vw)`
          bikeRef.current.style.filter = `blur(${ease * 10}px)`
        }
        if (bubbleRef.current) {
          bubbleRef.current.style.opacity = 1 - progress
        }

        if (progress === 1) {
          state.stage = 4
          state.startTime = time
        }
      }
      else if (state.stage === 4) {
        // Stage 4: Brand Reveal (1s)
        const duration = 1000
        const progress = Math.min(elapsed / duration, 1)
        const ease = easeInOutQuad(progress)

        if (textRef.current) {
          textRef.current.style.opacity = progress
          textRef.current.style.transform = `translateY(${20 - ease * 20}px)`
        }

        if (progress === 1) {
          state.stage = 5
          state.startTime = time
          setShowReplay(true) // Show replay just before exit logic
        }
      }
      else if (state.stage === 5) {
        // Stage 5: Wait 1.5s then fade out the whole splash
        if (elapsed > 1500) {
          exitSplash()
          return
        }
      }

      reqRef.current = requestAnimationFrame(animate)
    }

    reqRef.current = requestAnimationFrame(animate)
  }

  const exitSplash = () => {
    cancelAnimationFrame(reqRef.current)
    setShowSkip(false)
    setShowReplay(false)
    if (overlayRef.current) {
      overlayRef.current.style.transform = 'translateY(-100vh)'
      overlayRef.current.style.opacity = '0'
    }
    setTimeout(() => {
      setIsDone(true)
      onDone?.()
    }, 800) // Match transition duration
  }

  useEffect(() => {
    startAnimation()
    return () => cancelAnimationFrame(reqRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isDone) return null

  return (
    <div
      ref={overlayRef}
      id="intro-overlay"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#E84C3D] overflow-hidden transition-all duration-800 ease-in-out"
      style={{ transitionProperty: 'transform, opacity', transitionDuration: '800ms' }}
    >
      {/* SKIP button */}
      {showSkip && (
        <button
          onClick={exitSplash}
          className="absolute top-6 right-6 px-5 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full font-bold text-sm backdrop-blur-md transition-colors border border-white/30 z-[10000]"
        >
          SKIP
        </button>
      )}



      <div className="relative w-full max-w-3xl h-[500px] flex items-center justify-center">

        {/* Bike & Bubble Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">

          {/* Intro Text */}
          <div
            ref={bubbleRef}
            className="mb-6 transition-none"
            style={{ opacity: 0, transform: 'scale(0.8) translateY(20px)' }}
          >
            <h2 className="text-white font-black text-4xl md:text-5xl text-center leading-tight drop-shadow-xl font-sans tracking-tight">
              Smarter Way to Travel ?
            </h2>
          </div>

          {/* Bike removed per user request */}

        </div>

        {/* Brand Reveal Text */}
        <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center transition-none z-20 pointer-events-none" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-2 drop-shadow-xl text-center font-sans">
            Fleet Mobilities
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-medium mb-8 text-center drop-shadow-md">
            Rent. Ride. Repeat.
          </p>
          <div className="bg-white text-[#E84C3D] px-8 py-3 rounded-full font-extrabold text-sm md:text-base uppercase tracking-wider shadow-2xl">
            🚀 Launching Soon
          </div>
        </div>

      </div>
    </div>
  )
}
