import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import NoiseOverlay from './components/NoiseOverlay'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Only start smooth scrolling after loading is complete
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [isLoading])

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />
      <NoiseOverlay />
      <CustomCursor />
      <div className="main-wrapper" style={{ position: 'relative', zIndex: 1, backgroundColor: 'var(--bg-primary)' }}>
        <Hero />
        <About />
        <Services />
        <Showcase />
      </div>
      <Footer />
    </>
  )
}

export default App
