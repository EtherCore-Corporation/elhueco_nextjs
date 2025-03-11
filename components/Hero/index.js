import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import MagneticButton from '../MagneticButton'

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
      console.log('Video element:', videoRef.current)
      console.log('Video source:', videoRef.current.currentSrc)
      videoRef.current.addEventListener('error', (e) => {
        console.error('Error loading video:', e)
      })
    }
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden -mt-16">
      {/* Video de fondo */}
      <div className="absolute inset-0 bg-gray-900/40 z-10" /> {/* Overlay más ligero */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-0 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src="https://player.vimeo.com/external/403155936.sd.mp4?s=d5670d1dd8b5e6169dd3687d14f2dcd57cd927ff&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Contenido */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            animate={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Un hueco para cada proyecto
            <br />
            <span className="text-accent-400">un espacio para cada visión</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
            animate={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Descubre un espacio único donde tus ideas cobran vida.
            Desde rodajes hasta performances, aquí todo es posible.
          </motion.p>

          <MagneticButton />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </div>
  )
}

export default Hero 