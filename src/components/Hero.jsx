import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Deep Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section 
      ref={containerRef} 
      style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <motion.div 
        style={{ 
          position: 'absolute', 
          top: -30, left: -30, right: -30, bottom: -30, 
          y: imageY,
          backgroundImage: 'url(/assets/hero_machine.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) contrast(1.1) saturate(0.8)', // Darker, more industrial
          zIndex: -1
        }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />

      <div className="container" style={{ width: '100%', position: 'relative' }}>
        <motion.div 
          style={{ y: textY, opacity }}
          className="hero-content"
        >
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <h1 className="text-super hover-target" style={{ margin: 0, textShadow: '0 10px 40px rgba(0,0,0,0.8)' }}>
                {/* Line 1 */}
                <span className="line-mask">
                  <motion.span 
                    style={{ display: 'inline-block' }}
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
                  >
                    PRECISION
                  </motion.span>
                </span>
                <br/>
                {/* Line 2 */}
                <span className="line-mask">
                  <motion.span 
                    style={{ display: 'inline-block', color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
                  >
                    INJECTION
                  </motion.span>
                </span>
                <br/>
                {/* Line 3 */}
                <span className="line-mask">
                  <motion.span 
                    style={{ display: 'inline-block' }}
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.7 }}
                  >
                    MOLDING
                  </motion.span>
                </span>
              </h1>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '3vw' }}>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  style={{ maxWidth: '400px', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}
                >
                  PT. Pratama Sinarindo Teknik. Empowering Indonesia's plastic industry with high-velocity infrastructure since 2015.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: '1.5rem', 
                    fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' 
                  }}
                  className="magnetic-wrap"
                >
                  <span style={{ pointerEvents: 'none' }}>Scroll</span>
                  <div className="magnetic" style={{ padding: '1rem' }}>
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      style={{ 
                        width: '50px', height: '50px', borderRadius: '50%', 
                        border: '1px solid rgba(255,255,255,0.2)', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        backdropFilter: 'blur(5px)'
                      }}
                    >
                      <ArrowDownRight size={20} color="var(--text-primary)" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default Hero
