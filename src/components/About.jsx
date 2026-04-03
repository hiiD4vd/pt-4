import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const textContainerRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const textEl = textContainerRef.current
    if (!textEl) return

    // Cleanly split text into lines (faux split for simplicity & performance without split-type lib)
    const text = "We are the architects of industrial capability. Specializing in high-performance injection molding machines, we deliver robust solutions that shape the future of manufacturing."
    const words = text.split(' ')
    
    textEl.innerHTML = ''
    
    // Group words into lines based on pure width heuristics or simply wrap every word in a mask
    // Wrapping every word in a mask is a reliable way to get that split effect without library overhead
    words.forEach(word => {
      const mask = document.createElement('span')
      mask.className = 'line-mask'
      mask.style.marginRight = '0.4em'
      mask.style.lineHeight = '1.3'
      
      const inner = document.createElement('span')
      inner.innerText = word
      inner.style.display = 'inline-block'
      inner.style.transform = 'translateY(110%)' // initial hidden state
      
      mask.appendChild(inner)
      textEl.appendChild(mask)
    })

    const inners = textEl.querySelectorAll('.line-mask > span')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        end: 'center center',
        scrub: false,
        toggleActions: "play none none reverse"
      }
    })

    tl.to(inners, {
      y: '0%',
      duration: 0.8,
      stagger: 0.02,
      ease: 'power3.out'
    })

    // Parallax background
    gsap.to(bgRef.current, {
      y: '40%',
      rotation: 15,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section 
      ref={sectionRef} 
      style={{ 
        padding: '20vw 0', 
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'flex-start', position: 'relative', zIndex: 1 }}>
        <h2 
          ref={textContainerRef}
          className="title-lg"
          style={{ 
            maxWidth: '1200px', 
            textAlign: 'left',
            lineHeight: 1.3,
            textTransform: 'none',
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 5rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em'
          }}
        >
          {/* Populated by JS */}
        </h2>
      </div>

      {/* Decorative metal texture background element */}
      <div 
        ref={bgRef}
        style={{
          position: 'absolute',
          top: '0%',
          right: '-5%',
          width: '60vw',
          height: '60vw',
          backgroundImage: 'url(/assets/dark_metal.png)',
          backgroundSize: 'cover',
          opacity: 0.15,
          pointerEvents: 'none',
          filter: 'blur(10px) grayscale(1) contrast(1.5)',
          zIndex: 0
        }}
      />
    </section>
  )
}

export default About
