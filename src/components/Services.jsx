import React, { useRef, useState, useEffect } from 'react'
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

const ServiceCard = ({ service }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  return (
    <div 
      ref={cardRef}
      className="hover-target"
      onMouseMove={handleMouseMove}
      style={{
        width: '55vw',
        minWidth: '450px',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '4rem',
        border: '1px solid var(--border)',
        backgroundColor: 'rgba(255,255,255,0.01)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.4s ease'
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
      onMouseLeave={(e) => { 
        e.currentTarget.style.borderColor = 'var(--border)'
        setMousePosition({ x: -1000, y: -1000 })
      }}
    >
      {/* Interactive Spotlight Effect */}
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 40%)`,
          pointerEvents: 'none',
          transition: 'background 0.1s ease',
          zIndex: 0
        }}
      />
      {/* Decorative corner accents */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '20px', borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', opacity: 0.5 }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', opacity: 0.5 }} />
      
      <div style={{ position: 'relative', zIndex: 1, fontSize: '4rem', fontFamily: 'var(--font-super)', color: 'rgba(255,255,255,0.1)' }}>
        {service.id}
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>{service.title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '80%' }}>{service.desc}</p>
      </div>
    </div>
  )
}

const Services = () => {
  const containerRef = useRef(null)
  const horizontalRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]) // adjust based on item count

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
        <div className="container" style={{ position: 'absolute', top: '15vh', left: 0, width: '100%' }}>
          <h2 style={{ fontSize: '1rem', color: 'var(--text-secondary)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Core Capabilities
          </h2>
        </div>

        <motion.div 
          ref={horizontalRef}
          data-cursor="DRAG"
          style={{ 
            x, 
            display: 'flex', 
            gap: '8vw', 
            padding: '0 10vw',
            width: 'max-content'
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
