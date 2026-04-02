import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Showcase = () => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Subtle image parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1])

  return (
    <section ref={containerRef} style={{ height: '150vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
        
        <motion.div 
          className="hover-target"
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            y: bgY,
            scale,
            backgroundImage: 'url(/assets/precision_gear.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(0.5)',
          }}
          whileHover={{ filter: 'grayscale(0) brightness(1.2)', scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 50%, var(--bg-primary) 100%)' }} />

        <div style={{ position: 'absolute', bottom: '10%', left: '5%', pointerEvents: 'none' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 8rem)', fontFamily: 'var(--font-super)', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
            PRECISION <br/><span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>ENGINEERED</span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Showcase
