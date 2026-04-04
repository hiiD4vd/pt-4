import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [cursorText, setCursorText] = useState('')

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor) return

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let speed = 0.2;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    const render = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      if (dot) {
        // dot follows exactly
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
    window.addEventListener('mousemove', onMouseMove)

    // Interactive element detection & Magnetic effect
    const interactables = document.querySelectorAll('a, button, input, .hover-target, .magnetic-wrap')
    
    const handleMouseEnter = (e) => {
      setIsHovered(true)
      if (e.currentTarget.dataset.cursor) {
        setCursorText(e.currentTarget.dataset.cursor)
      }
    }

    const handleMouseLeave = (e) => {
      setIsHovered(false)
      setCursorText('')
      const magneticEl = e.currentTarget.querySelector('.magnetic')
      if (magneticEl) {
        gsap.to(magneticEl, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: 'elastic.out(1, 0.3)'
        })
      }
    }

    const handleMagneticMove = (e) => {
      const el = e.currentTarget
      const magneticEl = el.querySelector('.magnetic')
      if (!magneticEl) return

      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(magneticEl, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.2,
        ease: 'power2.out'
      })
    }

    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
      if (el.classList.contains('magnetic-wrap')) {
        el.addEventListener('mousemove', handleMagneticMove)
      }
    })

    // Additional global listener just in case dom updates (MutationObserver is better but this is a simpler approach for static)
    const globalMouseOver = (e) => {
      if (e.target.closest('a, button, input, .hover-target, .magnetic-wrap')) {
         setIsHovered(true)
         const targetWithCursor = e.target.closest('[data-cursor]')
         if (targetWithCursor) {
            setCursorText(targetWithCursor.dataset.cursor)
         } else {
            setCursorText('')
         }
      } else {
         setIsHovered(false)
         setCursorText('')
      }
    }
    window.addEventListener('mouseover', globalMouseOver)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', globalMouseOver)
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
        if (el.classList.contains('magnetic-wrap')) {
          el.removeEventListener('mousemove', handleMagneticMove)
        }
      })
    }
  }, [])

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`custom-cursor ${isHovered ? 'hovered' : ''} ${cursorText ? 'has-text' : ''}`}
      >
        <span className="cursor-text">{cursorText}</span>
      </div>
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}

export default CustomCursor
