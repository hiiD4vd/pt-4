import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const textEl = textRef.current
    if (!textEl) return

    // Split text logic manually for simplicity, or use GSAP ScrollTrigger on complete block
    const words = textEl.innerText.split(' ')
    textEl.innerHTML = ''
    words.forEach(word => {
      const span = document.createElement('span')
      span.innerText = word + ' '
      span.style.opacity = 0.1
      textEl.appendChild(span)
    })

    const spans = textEl.querySelectorAll('span')

    gsap.to(spans, {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 40%',
        scrub: 1,
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
        padding: '15vw 0', 
        backgroundColor: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <h2 
          ref={textRef}
          className="title-lg"
          style={{ 
            maxWidth: '1200px', 
            textAlign: 'left',
            lineHeight: 1.2,
            textTransform: 'none',
            fontFamily: 'var(--font-super)'
          }}
        >
          We are the architects of industrial capability. Specializing in high-performance injection molding machines, we deliver robust solutions that shape the future of manufacturing.
        </h2>
      </div>

      {/* Decorative metal texture background element */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          backgroundImage: 'url(/assets/dark_metal.png)',
          backgroundSize: 'cover',
          opacity: 0.1,
          pointerEvents: 'none',
          filter: 'blur(20px) grayscale(1)',
          zIndex: 0
        }}
      />
    </section>
  )
}

export default About
