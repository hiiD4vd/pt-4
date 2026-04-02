import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section 
      ref={containerRef} 
      style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <motion.div 
        style={{ 
          position: 'absolute', 
          top: -20, left: -20, right: -20, bottom: -20, 
          y: imageY,
          backgroundImage: 'url(/assets/hero_machine.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5) contrast(1.2)',
          zIndex: -1
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
      />

      <div className="container" style={{ width: '100%', position: 'relative' }}>
        <motion.div 
          style={{ y: textY, opacity }}
          className="hero-content"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.33, 1, 0.68, 1] }}
            style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}
          >
            <div style={{ flex: 1 }}>
              <h1 className="text-super hover-target" style={{ margin: 0, textShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
                PRECISION<br/>
                <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>INJECTION</span><br/>
                MOLDING
              </h1>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '2vw' }}>
                <p style={{ maxWidth: '400px', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  PT. Pratama Sinarindo Teknik. Empowering Indonesia's plastic industry since 2015.
                </p>
                <div style={{ 
                  display: 'flex', alignItems: 'center', gap: '1rem', 
                  fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' 
                }}>
                  <span>Scroll to explore</span>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <ArrowDownRight size={16} />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}

export default Hero
