import Head from 'next/head'
import Image from 'next/image'
import Gallery from '../components/Gallery'
import TestimonialsSection from '../components/Testimonials'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroRef = useRef(null);

  // Parallax effect for hero section
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Head>
        <title>El Hueco</title>
        <meta name="description" content="Un espacio creativo en Madrid, donde tus producciones cobran vida." />
      </Head>

      {/* Fixed Header - Reemplazamos el header existente en Layout.js */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos/ELHUECO_LOGO_e_EL-lateral_BLANCO.png"
              alt="El Hueco Logo"
              width={180}
              height={60}
              className="w-auto h-12"
              priority
              quality={100}
            />
          </motion.div>
          <nav className="hidden md:flex gap-8">
            {['inicio', 'espacio', 'servicios', 'equipo', 'contacto'].map((item, index) => (
              <motion.a
                key={item}
                href={item === 'inicio' ? '/' : `#${item}`}
                className="text-white hover:text-gray-300 transition-colors capitalize"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-[100vh] flex items-center relative overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-10" />
            <Image
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/ciclorama1.jpeg"
              alt="El Hueco Studio"
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </motion.div>
          
          <motion.div 
            style={{ opacity }}
            className="relative z-20 container mx-auto px-4 py-20 mt-16"
          >
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="max-w-4xl"
            >
              <motion.div variants={fadeInUp}>
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos/ELHUECO_LOGO_Emayuscula_EL-lateral_BLANCO.png"
                  alt="El Hueco Logo"
                  width={400}
                  height={150}
                  className="w-auto h-32 mb-8"
                  quality={100}
                  priority
                />
              </motion.div>
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              >
                Tu espacio creativo en Madrid
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-300 mb-12"
              >
                Un estudio versátil donde tus producciones cobran vida.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="#contacto" 
                  className="group relative bg-white text-black px-8 py-3 rounded-full overflow-hidden"
                >
                  <span className="relative z-10 transition-transform group-hover:translate-x-1">
                    Agenda una reunión →
                  </span>
                  <div className="absolute inset-0 bg-gray-200 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
                </a>
                <a 
                  href="#espacio" 
                  className="group relative border-2 border-white px-8 py-3 rounded-full overflow-hidden"
                >
                  <span className="relative z-10 transition-transform group-hover:translate-x-1">
                    Conoce el espacio →
                  </span>
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <a href="#espacio" className="text-white flex flex-col items-center">
              <span className="text-sm mb-2">Descubre más</span>
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </a>
          </motion.div>
        </section>

        {/* Rest of the sections with enhanced animations */}
        <motion.section
          id="espacio"
          className="py-24 bg-black relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
              animate={{ 
                x: [0, 30, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
              animate={{ 
                x: [0, -40, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
          
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 relative z-10"
            >
              <motion.span 
                className="inline-block text-blue-400 font-medium mb-2 font-orbitron tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                DESCUBRE
              </motion.span>
              <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-white font-orbitron tracking-wide">Nuestro Espacio</h2>
              <p className="text-xl text-gray-400 max-w-3xl">
                Descubre cada rincón de El Hueco, un estudio diseñado para dar vida a tus ideas creativas.
                Un lugar donde la tecnología y el diseño se unen para potenciar tu creatividad.
              </p>
            </motion.div>
            
            {/* Masonry-style gallery with different shapes */}
            <div className="grid grid-cols-12 gap-6 mb-12">
              {/* Primera fila - Asimétrica */}
              <motion.div 
                className="col-span-12 md:col-span-8 relative rounded-3xl overflow-hidden h-[450px] group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/ciclorama1.jpeg"
                  alt="Ciclorama"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-8 z-10">
                  <h3 className="text-2xl font-bold mb-2 font-orbitron tracking-wide">Ciclorama</h3>
                  <p className="text-gray-300 text-base max-w-md">Espacio versátil para tus producciones con iluminación profesional.</p>
            </div>
              </motion.div>

              <motion.div 
                className="col-span-12 md:col-span-4 relative rounded-3xl overflow-hidden h-[450px] group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/camerinos1.jpg"
                  alt="Camerinos"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-8 z-10">
                  <h3 className="text-2xl font-bold mb-2 font-orbitron tracking-wide">Camerinos</h3>
                  <p className="text-gray-300 text-base max-w-xs">Espacios cómodos y funcionales para preparación y maquillaje.</p>
          </div>
              </motion.div>

              {/* Segunda fila - Tres elementos de diferentes tamaños */}
              <motion.div 
                className="col-span-12 md:col-span-3 relative rounded-3xl overflow-hidden h-[320px] group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/iluminacion1.jpeg"
                  alt="Iluminación"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="text-xl font-bold mb-2 font-orbitron tracking-wide">Iluminación</h3>
                  <p className="text-gray-300 text-sm max-w-xs">Equipado con la última tecnología.</p>
        </div>
              </motion.div>

              <motion.div 
                className="col-span-12 md:col-span-6 relative rounded-3xl overflow-hidden h-[320px] group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/pasarela1.jpg"
                  alt="Pasarela"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="text-xl font-bold mb-2 font-orbitron tracking-wide">Pasarela</h3>
                  <p className="text-gray-300 text-sm max-w-xs">Amplio espacio para rodajes y producciones de gran formato.</p>
            </div>
              </motion.div>

              <motion.div 
                className="col-span-12 md:col-span-3 relative rounded-3xl overflow-hidden h-[320px] group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/ciclorama2.jpeg"
                  alt="Ciclorama 2"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="text-xl font-bold mb-2 font-orbitron tracking-wide">Ciclorama</h3>
                  <p className="text-gray-300 text-sm max-w-xs">Sistema RGB versátil.</p>
              </div>
              </motion.div>

              {/* Tercera fila - Dos elementos iguales */}
              <motion.div 
                className="col-span-12 md:col-span-6 relative rounded-3xl overflow-hidden h-[380px] group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/video_mapping1.jpeg"
                  alt="Video Mapping"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="text-xl font-bold mb-2 font-orbitron tracking-wide">Video Mapping</h3>
                  <p className="text-gray-300 text-sm max-w-xs">Tecnología avanzada para proyecciones inmersivas.</p>
              </div>
              </motion.div>

              <motion.div 
                className="col-span-12 md:col-span-6 relative rounded-3xl overflow-hidden h-[380px] group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/montacargas.jpg"
                  alt="Montacargas"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="text-xl font-bold mb-2 font-orbitron tracking-wide">Montacargas</h3>
                  <p className="text-gray-300 text-sm max-w-xs">Acceso fácil para equipos y materiales pesados.</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <a 
                href="/espacios" 
                className="group relative inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-full overflow-hidden hover:bg-white/20 transition-all duration-300 font-orbitron tracking-wider"
              >
                <span className="relative z-10 transition-transform group-hover:translate-x-1">
                  Ver galería completa
                </span>
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Servicios Section with enhanced animations */}
        <motion.section
          id="servicios"
          className="py-24 bg-neutral-950 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute top-40 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
              animate={{ 
                x: [0, -30, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute -bottom-32 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
              animate={{ 
                x: [0, 40, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center relative z-10"
            >
              <motion.span 
                className="inline-block text-blue-400 font-medium mb-2 font-orbitron tracking-widest"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                TECNOLOGÍA AVANZADA
              </motion.span>
              <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-white font-orbitron tracking-wide">Servicios</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Todo lo que necesitas para tu producción en un solo espacio.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  id: "01",
                  title: "Equipamiento",
                  description: "WiFi de alta velocidad con fibra óptica para tus producciones en streaming.",
                  icon: (
                    <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  delay: 0.1
                },
                {
                  id: "02",
                  title: "Iluminación RGB",
                  description: "Sistema de iluminación RGB completo y versátil para cada necesidad.",
                  icon: (
                    <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  delay: 0.2
                },
                {
                  id: "03",
                  title: "Post-producción",
                  description: "Estación de trabajo con las mejores herramientas para edición.",
                  icon: (
                    <svg className="w-10 h-10 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  ),
                  delay: 0.3
                }
              ].map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: service.delay }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.2 }
                  }}
                  className="relative bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 overflow-hidden group"
                >
                  {/* Animated background gradient */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        "linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))",
                        "linear-gradient(to right, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))",
                        "linear-gradient(to right, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />

                  {/* Service number */}
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
                  <div className="relative z-10 mb-6 flex items-center">
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-orbitron mr-4">
                      {service.id}
                    </span>
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800/50 border border-white/10">
                      {service.icon}
                    </div>
                  </div>

                  {/* Service content */}
                  <h3 className="text-2xl font-bold mb-4 font-orbitron tracking-wide group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Additional services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <a 
                href="/servicios" 
                className="group relative inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-full overflow-hidden hover:bg-white/20 transition-all duration-300 font-orbitron tracking-wider"
              >
                <span className="relative z-10 transition-transform group-hover:translate-x-1">
                  Ver todos los servicios
                </span>
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Equipo Section with enhanced animations */}
        <motion.section
          id="equipo"
          className="py-24 bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8">Nuestro Equipo</h2>
              <p className="text-xl text-gray-400 max-w-3xl">
                Un equipo multidisciplinar con amplia experiencia en el sector audiovisual.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Paolo Zapico",
                  role: "Logística",
                  bio: "Licenciado en Comunicación Audiovisual",
                  image: "paolo.jpg"
                },
                {
                  name: "Irene Bona",
                  role: "Marketing",
                  bio: "Especialista en gestión de talento y artes",
                  image: "irene.jpg"
                },
                {
                  name: "Rodrigo Torrejón",
                  role: "Técnico",
                  bio: "Con amplia trayectoria en televisión y eventos",
                  image: "rodrigo.jpg"
                },
                {
                  name: "Eduardo Gutiérrez",
                  role: "Ventas",
                  bio: "Con formación en Derecho y experiencia",
                  image: "eduardo.jpg"
                }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group space-y-4"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-900">
                    <Image
                      src={`https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/${member.image}`}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-center px-4">{member.bio}</p>
                    </div>
              </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contacto Section */}
        <motion.section
          id="contacto"
          className="py-24 bg-neutral-950"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <Image
                src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos/ELHUECO_LOGO_Emayuscula_EL-lateral_BLANCO.png"
                alt="El Hueco Logo"
                width={200}
                height={80}
                className="mx-auto mb-8"
                quality={100}
                priority
              />
              <h2 className="text-4xl font-bold mb-8">¿Listo para dar vida a tu proyecto?</h2>
              <p className="text-xl text-gray-400 mb-12">
                Escríbenos y charlamos sobre lo que necesitas para tu producción.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservas"
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full overflow-hidden hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-orbitron tracking-wider"
                >
                  <span className="relative z-10 transition-transform group-hover:translate-x-1">
                    Reservar una llamada
                  </span>
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </a>
                <a
                  href="mailto:admin@el-hueco.es"
                  className="group relative inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-full overflow-hidden hover:bg-white/20 transition-all duration-300 font-orbitron tracking-wider"
                >
                  <span className="relative z-10 transition-transform group-hover:translate-x-1">
            Contactar ahora
                  </span>
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Booking CTA Section */}
        <motion.section
          className="py-24 bg-black relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute top-1/4 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
              animate={{ 
                x: [0, -30, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
              animate={{ 
                x: [0, 40, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 relative overflow-hidden">
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
                animate={{
                  background: [
                    "linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.05))",
                    "linear-gradient(to right, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05))",
                    "linear-gradient(to right, rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <motion.span 
                      className="inline-block text-blue-400 font-medium mb-2 font-orbitron tracking-widest"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      RESERVA AHORA
                    </motion.span>
                    <motion.h2 
                      className="text-3xl md:text-4xl font-bold mb-4 font-orbitron tracking-wide"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Agenda una llamada de 15 minutos
                    </motion.h2>
                    <motion.p 
                      className="text-gray-400 text-lg mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Reserva una llamada con nuestro equipo para discutir tu proyecto. Disponible de 12:00 a 14:00, de lunes a viernes. 
                      También puedes contactarnos directamente en <span className="text-blue-400">admin@el-hueco.es</span>.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <a 
                        href="/reservas" 
                        className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full overflow-hidden hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-orbitron tracking-wider"
                      >
                        <span className="relative z-10 transition-transform group-hover:translate-x-1">
                          Reservar ahora
                        </span>
                        <svg 
                          className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                          />
                        </svg>
                      </a>
                    </motion.div>
                  </div>
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="relative"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30"></div>
                      <div className="relative bg-black rounded-2xl overflow-hidden p-6">
                        <div className="text-center mb-4">
                          <div className="text-sm text-gray-400 mb-1">Próxima disponibilidad</div>
                          <div className="text-xl font-bold font-orbitron">Hoy, 12:00 - 14:00</div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 mb-4">
                          {['12:00', '12:15', '12:30', '12:45'].map((time, index) => (
                            <div 
                              key={index}
                              className={`p-2 text-center rounded-lg text-sm ${
                                index === 0 
                                  ? 'bg-gray-800/50 border border-gray-700/50 text-gray-500' 
                                  : 'bg-black/30 border border-white/10 text-gray-300'
                              }`}
                            >
                              {time}
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          {['13:00', '13:15', '13:30', '13:45'].map((time, index) => (
                            <div 
                              key={index}
                              className="p-2 text-center rounded-lg text-sm bg-black/30 border border-white/10 text-gray-300"
                            >
                              {time}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  )
} 