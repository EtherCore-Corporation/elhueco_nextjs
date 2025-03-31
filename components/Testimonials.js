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
    image: "https://i.pravatar.cc/300?img=1",
    linkedin: "https://linkedin.com/in/maria-gonzalez",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Productor Audiovisual",
    company: "FilmLab",
    quote:
      "Hemos realizado tres producciones en El Hueco y siempre quedamos impresionados con la versatilidad del espacio y el soporte técnico.",
    image: "https://i.pravatar.cc/300?img=3",
    linkedin: "https://linkedin.com/in/carlos-rodriguez",
  },
  {
    id: 3,
    name: "Laura Martínez",
    role: "Organizadora de Eventos",
    company: "EventPro",
    quote:
      "Nuestro evento corporativo fue un éxito total gracias a las instalaciones y el equipo de El Hueco. Definitivamente volveremos.",
    image: "https://i.pravatar.cc/300?img=5",
    linkedin: "https://linkedin.com/in/laura-martinez",
  },
  {
    id: 4,
    name: "Javier López",
    role: "Director de Fotografía",
    company: "Captura Films",
    quote:
      "La iluminación y los espacios de El Hueco son perfectos para sesiones fotográficas profesionales. Un lugar único en la ciudad.",
    image: "https://i.pravatar.cc/300?img=8",
    linkedin: "https://linkedin.com/in/javier-lopez",
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
    <section ref={ref} className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-white font-heading mb-2 tracking-widest"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            TESTIMONIOS
          </motion.span>
          <h2 className="text-5xl font-heading mb-4 text-white tracking-wide">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto">
            Experiencias reales de quienes han confiado en El Hueco para sus proyectos.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial Slider */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, rotateY: -5, z: -100 }}
                animate={{ opacity: 1, rotateY: 0, z: 0 }}
                exit={{ opacity: 0, rotateY: 5, z: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-black p-4 sm:p-8 md:p-12 border-2 border-white"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex-shrink-0 group mx-auto md:mx-0">
                    {/* Profile Image with Border */}
                    <div className="absolute inset-0 border-2 border-white"></div>
                    <div className="absolute inset-[3px] overflow-hidden bg-black">
                      <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          fill
                          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                          priority
                          className="object-cover"
                        />
                        {/* LinkedIn Overlay */}
                        <a
                          href={testimonials[currentIndex].linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300"
                        >
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4 text-white flex justify-center md:justify-start">
                      <svg 
                        className="w-6 h-6 sm:w-8 sm:h-8 opacity-50 mb-2" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl font-sans italic mb-6 leading-relaxed">{testimonials[currentIndex].quote}</p>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <div>
                        <h4 className="text-lg font-heading tracking-wide text-white">{testimonials[currentIndex].name}</h4>
                        <p className="text-gray-400 font-sans text-sm sm:text-base">
                          {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                        </p>
                      </div>
                      <a
                        href={testimonials[currentIndex].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-white hover:bg-white hover:text-black transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-2 sm:left-4 -translate-y-1/2 z-10">
              <button
                className="bg-black border-2 border-white text-white hover:bg-white hover:text-black p-1 sm:p-2 transition-colors"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute top-1/2 -right-2 sm:right-4 -translate-y-1/2 z-10">
              <button
                className="bg-black border-2 border-white text-white hover:bg-white hover:text-black p-1 sm:p-2 transition-colors"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Floating Comments */}
          <motion.div 
            className="absolute -top-10 -left-10 md:-top-5 md:-left-5 w-20 h-20 bg-black border-2 border-white p-3"
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
            className="absolute -bottom-8 -right-8 md:-bottom-4 md:-right-4 w-24 h-24 bg-black border-2 border-white p-3"
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
                className={`relative cursor-pointer flex-shrink-0 transition-all duration-300 group ${
                  currentIndex === index 
                    ? "border-2 border-white" 
                    : ""
                }`}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden bg-black">
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                    {/* LinkedIn Icon Overlay */}
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                {currentIndex === index && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white"></div>
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
              className="bg-black border-2 border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
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
                  className="bg-black border-2 border-white p-6 group hover:bg-white hover:text-black transition-colors duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 overflow-hidden bg-black">
                      <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={randomTestimonial.image}
                          alt={randomTestimonial.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                        {/* LinkedIn Icon Overlay */}
                        <a
                          href={randomTestimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-heading text-white group-hover:text-black">
                          {randomTestimonial.name}
                        </h4>
                        <a
                          href={randomTestimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 border border-white hover:bg-white hover:text-black transition-colors duration-300"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-600">{randomTestimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-800">{randomTestimonial.quote}</p>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </div>
    </section>
  )
} 