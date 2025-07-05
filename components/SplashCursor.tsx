'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function SplashCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-primary/20 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isClicking ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.5,
        }}
      />
      
      {/* Click splash effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 bg-primary/30 rounded-full pointer-events-none z-30"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
          }}
        />
      )}
    </>
  )
} 