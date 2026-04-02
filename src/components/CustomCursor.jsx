import React, { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let speed = 0.15; // smooth factor

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    const render = () => {
      // Linear interpolation
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
    window.addEventListener('mousemove', onMouseMove)

    // Interactive element detection
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, .hover-target')) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <div 
      ref={cursorRef} 
      className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
    />
  )
}

export default CustomCursor
