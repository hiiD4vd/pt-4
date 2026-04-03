import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const Showcase = () => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Subtle image parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.1])

  const textRef = useRef(null)
  const isTextInView = useInView(textRef, { once: false, margin: "-100px" })

  return (
    <section ref={containerRef} style={{ height: '150vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ position: 'relative', width: '100%', height: '90vh', overflow: 'hidden', borderRadius: '4px' }}>
        
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
            filter: 'grayscale(0.8) contrast(1.2)',
          }}
          whileHover={{ filter: 'grayscale(0) brightness(1.2) contrast(1.1)', scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Dynamic Dark Gradient Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 40%, var(--bg-primary) 100%)', pointerEvents: 'none' }} />

        <div ref={textRef} style={{ position: 'absolute', bottom: '10%', left: '5%', pointerEvents: 'none', overflow: 'hidden' }}>
          <motion.h2 
            initial={{ y: '100%', opacity: 0 }}
            animate={isTextInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            style={{ fontSize: 'clamp(3rem, 7vw, 10rem)', fontFamily: 'var(--font-super)', textShadow: '0 10px 40px rgba(0,0,0,0.9)', margin: 0, lineHeight: 0.9 }}
          >
            PRECISION <br/>
            <span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}>ENGINEERED</span>
          </motion.h2>
        </div>
      </div>
    </section>
  )
}

export default Showcase
