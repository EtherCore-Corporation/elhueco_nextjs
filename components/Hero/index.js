import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const Hero = () => {
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
      {/* Fondo */}
      <div className="absolute inset-0">
        <Image
          src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images//camerinos1.jpg"
          alt="El Hueco Studio"
          fill
          className="object-cover brightness-125 contrast-75"
          priority
          quality={100}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-20 h-full flex flex-col items-start justify-center px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="w-full max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <Image
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos/ELHUECO_LOGO_Emayuscula_EL-lateral_BLANCO.png"
              alt="El Hueco Logo"
              width={150}
              height={56}
              priority
              quality={100}
              className="w-auto h-12 mb-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-5xl font-heading mb-4 text-black">
              Tu espacio<br />
              creativo en Madrid
            </h1>
            <p className="text-xl text-black/80 font-sans">
              Un estudio versátil donde tus producciones cobran vida.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#contacto" 
              className="group relative bg-black text-white px-8 py-3"
            >
              <span className="relative z-10 transition-transform group-hover:translate-x-1">
                Agenda una reunión →
              </span>
            </a>
            <a 
              href="#espacios" 
              className="group relative border border-black text-black px-8 py-3"
            >
              <span className="relative z-10 transition-transform group-hover:translate-x-1">
                Conoce el espacio →
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="text-center">
          <p className="text-black mb-2">Descubre más</p>
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-black rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero 