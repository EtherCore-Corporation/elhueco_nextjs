import { motion, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'

const MagneticButton = () => {
  const buttonRef = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top
      
      const centerX = width / 2
      const centerY = height / 2
      
      const deltaX = (x - centerX) * 0.2
      const deltaY = (y - centerY) * 0.2

      controls.start({
        x: deltaX,
        y: deltaY,
        transition: { type: "spring", stiffness: 150, damping: 15 }
      })
    }

    const handleMouseLeave = () => {
      controls.start({
        x: 0,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [controls])

  return (
    <motion.div
      ref={buttonRef}
      animate={controls}
      className="inline-block"
    >
      <button className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-50">
        Reserva ahora
      </button>
    </motion.div>
  )
}

export default MagneticButton 