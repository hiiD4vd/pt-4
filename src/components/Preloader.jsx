import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Hide overflow during load
    document.body.style.overflow = 'hidden'

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoaded(true), 400) // Small pause at 100%
          return 100
        }
        // Random increment for a "realistic" loading feel
        return prev + Math.floor(Math.random() * 15) + 1
      })
    }, 100)

    return () => {
      clearInterval(interval)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence 
      onExitComplete={() => {
        document.body.style.overflow = ''
        if (onComplete) onComplete()
      }}
    >
      {!isLoaded && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'var(--bg-primary)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'var(--text-primary)',
          }}
          initial={{ y: 0 }}
          exit={{ y: '-100vh' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} 
        >
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <motion.h1 
              style={{ 
                fontFamily: 'var(--font-super)', 
                fontSize: 'clamp(4rem, 15vw, 15rem)', 
                lineHeight: 0.9,
                margin: 0,
                color: 'var(--text-primary)'
              }}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {Math.min(progress, 100)}%
            </motion.h1>
          </div>
          
          <div style={{ position: 'absolute', bottom: '10%', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            System Initialization
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
