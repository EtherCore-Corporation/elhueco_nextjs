import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Directora Creativa",
    company: "Estudio Visual",
    quote:
      "El Hueco transformó nuestra visión en una experiencia audiovisual impresionante. El espacio y el equipo son de primera categoría.",
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/irene.jpg",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Productor Audiovisual",
    company: "FilmLab",
    quote:
      "Hemos realizado tres producciones en El Hueco y siempre quedamos impresionados con la versatilidad del espacio y el soporte técnico.",
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/paolo.jpg",
  },
  {
    id: 3,
    name: "Laura Martínez",
    role: "Organizadora de Eventos",
    company: "EventPro",
    quote:
      "Nuestro evento corporativo fue un éxito total gracias a las instalaciones y el equipo de El Hueco. Definitivamente volveremos.",
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/irene.jpg",
  },
  {
    id: 4,
    name: "Javier López",
    role: "Director de Fotografía",
    company: "Captura Films",
    quote:
      "La iluminación y los espacios de El Hueco son perfectos para sesiones fotográficas profesionales. Un lugar único en la ciudad.",
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/eduardo.jpg",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null)
  const [showMoreTestimonials, setShowMoreTestimonials] = useState(false)

  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, isInView])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handleShowMore = () => {
    setShowMoreTestimonials(true)
  }

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-neutral-950 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-blue-400 font-orbitron mb-2 tracking-widest"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            TESTIMONIOS
          </motion.span>
          <h2 className="text-5xl font-orbitron mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white tracking-wide">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experiencias reales de quienes han confiado en El Hueco para sus proyectos.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial Slider */}
          <div className="relative overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, rotateY: -5, z: -100 }}
                animate={{ opacity: 1, rotateY: 0, z: 0 }}
                exit={{ opacity: 0, rotateY: 5, z: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/10"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                    {/* Profile Image with Animated Border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
                    <div className="absolute inset-[3px] rounded-full overflow-hidden">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4 text-gray-300">
                      <svg 
                        className="w-8 h-8 opacity-50 mb-2" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-xl md:text-2xl italic mb-6">{testimonials[currentIndex].quote}</p>
                    <div>
                      <h4 className="text-lg font-orbitron tracking-wide">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-400">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
              <button
                className="rounded-full bg-black/30 border border-gray-700 text-white hover:bg-black/50 p-2 transition-colors"
                onClick={handlePrev}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
              <button
                className="rounded-full bg-black/30 border border-gray-700 text-white hover:bg-black/50 p-2 transition-colors"
                onClick={handleNext}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Floating Comments */}
          <motion.div 
            className="absolute -top-10 -left-10 md:-top-5 md:-left-5 w-20 h-20 bg-gray-800/70 backdrop-blur-sm rounded-lg p-3 shadow-lg transform rotate-3"
            animate={{ 
              y: [0, 10, 0],
              rotate: [3, 5, 3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <p className="text-xs">¡Increíble experiencia!</p>
          </motion.div>
          <motion.div 
            className="absolute -bottom-8 -right-8 md:-bottom-4 md:-right-4 w-24 h-24 bg-gray-800/70 backdrop-blur-sm rounded-lg p-3 shadow-lg transform -rotate-6"
            animate={{ 
              y: [0, -10, 0],
              rotate: [-6, -8, -6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <p className="text-xs">El mejor estudio de la ciudad sin duda.</p>
          </motion.div>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="mt-12 overflow-x-auto pb-4">
          <div className="flex gap-4 justify-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                animate={hoveredTestimonial === testimonial.id ? { y: -5, scale: 1.05 } : { y: 0, scale: 1 }}
                onHoverStart={() => setHoveredTestimonial(testimonial.id)}
                onHoverEnd={() => setHoveredTestimonial(null)}
                onClick={() => setCurrentIndex(index)}
                className={`relative cursor-pointer flex-shrink-0 transition-all duration-300 ${currentIndex === index ? "ring-2 ring-offset-2 ring-offset-gray-900 ring-blue-500" : ""}`}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                {currentIndex === index && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Show More Button */}
        {!showMoreTestimonials ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <button 
              onClick={handleShowMore} 
              className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              Ver más opiniones
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[...Array(6)].map((_, i) => {
              const randomTestimonial = testimonials[Math.floor(Math.random() * testimonials.length)]
              return (
                <motion.div
                  key={`more-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={randomTestimonial.image}
                        alt={randomTestimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{randomTestimonial.name}</h4>
                      <p className="text-sm text-gray-400">{randomTestimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{randomTestimonial.quote}</p>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </div>
    </section>
  )
} 