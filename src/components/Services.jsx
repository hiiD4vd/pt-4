import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { id: '01', title: 'Injection Molding Machines', desc: 'Premium grade machinery for high velocity production.' },
  { id: '02', title: 'Overhaul & Maintenance', desc: 'Ensuring zero downtime with expert mechanical servicing.' },
  { id: '03', title: 'Precision Spare Parts', desc: 'Direct sourcing of critical industrial components.' },
  { id: '04', title: 'Factory Installation', desc: 'End-to-end setup of molding infrastructure.' },
]

const Services = () => {
  const containerRef = useRef(null)
  const horizontalRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  // Horizontal scroll transformation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <section 
      ref={containerRef} 
      style={{ height: '300vh', backgroundColor: 'var(--bg-secondary)', position: 'relative' }}
    >
      <div 
        style={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          overflow: 'hidden' 
        }}
      >
        <div className="container" style={{ position: 'absolute', top: '10vh', left: 0, width: '100%' }}>
          <h2 style={{ fontSize: '1rem', color: 'var(--accent)', letterSpacing: '0.2em' }}>CAPABILITIES</h2>
        </div>

        <motion.div 
          ref={horizontalRef}
          style={{ 
            x, 
            display: 'flex', 
            gap: '10vw', 
            padding: '0 4vw',
            width: '400vw'
          }}
        >
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="hover-target"
              style={{
                width: '60vw',
                minWidth: '400px',
                height: '50vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '3rem',
                border: '1px solid var(--border)',
                backgroundColor: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'}
            >
              <div style={{ fontSize: '4rem', fontFamily: 'var(--font-super)', color: 'rgba(255,255,255,0.1)' }}>
                {service.id}
              </div>
              <div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-super)', lineHeight: 1.1 }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>{service.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
