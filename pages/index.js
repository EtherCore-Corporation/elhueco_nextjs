import Head from 'next/head'
import Image from 'next/image'
import Gallery from '../components/Gallery'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <link rel="icon" href="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/servicios//favicon.jpeg" />
        <link rel="apple-touch-icon" href="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/servicios//favicon.jpeg" />
        <meta name="msapplication-TileImage" content="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/servicios//favicon.jpeg" />
        <meta property="og:image" content="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/servicios//favicon.jpeg" />
      </Head>

      <Header />

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-[100vh] flex items-center justify-center relative overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 z-0">
            <Image
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images//Dosier%20El%20Hueco%202025.png"
              alt="El Hueco Studio"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </motion.div>
          
          <motion.div 
            style={{ opacity }}
            className="relative z-20 container mx-auto px-4 flex items-start justify-center min-h-screen pt-40 md:pt-80"
          >
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="max-w-4xl w-full flex flex-col items-center justify-start text-center"
            >
              <motion.div variants={fadeInUp} className="flex justify-center w-full">
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos//ELHUECO_LOGO_Emayuscula_EL-lateral.png"
                  alt="El Hueco Logo"
                  width={150}
                  height={56}
                  className="w-auto h-10 md:h-12 mb-6 drop-shadow-md mt-32 md:mt-16"
                  quality={100}
                  priority
                  unoptimized
                />
              </motion.div>
              <motion.h1 
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.6, -0.05, 0.01, 0.99]
                    }
                  }
                }}
                className="text-2xl md:text-4xl font-helvetica mb-4 tracking-tight text-black text-center w-full"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block"
                >
                  Tu espacio creativo en Madrid
                </motion.span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base md:text-xl text-black/80 mb-10 md:mb-16 text-center max-w-2xl mx-auto font-now"
              >
                Un estudio versátil donde tus producciones cobran vida.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center w-full"
              >
                <a 
                  href="/reservas" 
                  className="group relative bg-black text-white px-6 md:px-8 py-3 text-center"
                >
                  <span className="relative z-10 transition-transform group-hover:translate-x-1">
                    Agenda una reunión →
                  </span>
                </a>
                <a 
                  href="/espacios" 
                  className="group relative border border-black text-black px-6 md:px-8 py-3 text-center"
                >
                  <span className="relative z-10 transition-transform group-hover:translate-x-1">
                    Conoce el espacio →
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Filosofía Section */}
        <section className="bg-white min-h-[100vh] flex items-center">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-helvetica mb-6 md:mb-8 text-black">Nuestra filosofía:</h2>
              
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-helvetica tracking-tight leading-tight text-black mb-8 md:mb-12 text-justify">
                SOMOS UN ESTUDIO CREATIVO PARA MENTES INQUIETAS. MÁS QUE UN PLATÓ, SOMOS UN PUNTO DE ENCUENTRO PARA INNOVAR SIN MOLDES NI FÓRMULAS. NO SOLO CREAMOS, TRANSFORMAMOS.
              </h2>
              
              <div className="relative">
                <h2 className="text-2xl md:text-4xl lg:text-4xl font-helvetica tracking-tight leading-tight text-black text-justify relative z-10">
                  NO SE TRATA DE ENCONTRARLE UN HUECO A LAS IDEAS, SINO DE QUE LAS IDEAS ENCUENTREN SU <span className="relative z-10 lg:hidden font-bold text-red-600">HUECO</span><span className="relative z-10 hidden lg:inline"></span>
                </h2>
                <div className="absolute right-[27%] top-[-32%] z-0 hidden lg:block">
                  <Image 
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/servicios/2.jpg"
                    alt="HUECO"
                    width={300}
                    height={60}
                    className="z-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Hero Section */}
        <section className="relative min-h-[100vh] flex items-center">
            <Image
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/servicios//MiceCatering%202.jpg"
              alt="El Hueco Studio"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          <div className="relative z-10 container mx-auto px-4 flex items-center justify-center md:justify-end h-full py-12 md:py-0">
            <div className="max-w-2xl bg-white/80 backdrop-blur-sm p-6 md:p-0 md:bg-transparent rounded-lg md:rounded-none md:mr-58">
              <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-helvetica mb-4 md:mb-6 text-black whitespace-nowrap"
              >
                Estás en el lugar ideal
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-black mb-6 md:mb-8 max-w-2xl"
              >
                Descubre cada rincón de El Hueco, un estudio diseñado para dar vida a tus ideas creativas. Un lugar donde la tecnología y el diseño se unen para potenciar tu creatividad.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3 md:gap-4"
              >
                <a href="#nuestro-espacio" className="bg-black text-white border-2 border-black px-5 md:px-8 py-2 md:py-3 text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300">
                  Nuestro Espacio
                </a>
                <a href="#servicios" className="border-2 border-black text-black px-5 md:px-8 py-2 md:py-3 text-sm md:text-base hover:bg-black hover:text-white transition-all duration-300">
                  Servicios
                </a>
                <a href="#proyectos" className="border-2 border-black text-black px-5 md:px-8 py-2 md:py-3 text-sm md:text-base hover:bg-black hover:text-white transition-all duration-300">
                  Proyectos
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nuestro Espacio Section */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-helvetica mb-10 md:mb-16 text-black">Descubre nuestro espacio</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {/* Pasarela Técnica */}
              <div className="border-2 border-black overflow-hidden">
                <div className="relative aspect-square">
                <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/servicios/Pasarela%20tecnica.jpg"
                    alt="Pasarela Técnica"
                    fill
                    className="object-cover"
                  />
            </div>
                <div className="p-4 md:p-6 bg-white text-left">
                  <h3 className="text-lg md:text-xl font-helvetica mb-1 text-black">Pasarela Técnica</h3>
                  <p className="text-xs md:text-sm text-black">14 Focos RGB LED | Material Audiovisual</p>
                </div>
              </div>

              {/* Lluvia Artificial */}
              <div className="border-2 border-black overflow-hidden">
                <div className="relative aspect-square">
                <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/servicios//Sistema%20de%20Lluvia%20Artificial.jpg"
                    alt="Lluvia Artificial"
                  fill
                    className="object-cover"
                  />
            </div>
                <div className="p-4 md:p-6 bg-white">
                  <h3 className="text-lg md:text-xl font-helvetica mb-1 text-black">Lluvia Artificial</h3>
                  <p className="text-xs md:text-sm text-black">Sistema de lluvia artificial | Regulador de temperatura | Patio inundable</p>
                </div>
              </div>

              {/* Acceso de Vehículos */}
              <div className="border-2 border-black overflow-hidden">
                <div className="relative aspect-square">
                <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/servicios/Rampa%20de%20acceso.jpg"
                    alt="Acceso de Vehículos"
                    fill
                    className="object-cover"
                  />
          </div>
                <div className="p-4 md:p-6 bg-white">
                  <h3 className="text-lg md:text-xl font-helvetica mb-1 text-black">Acceso de Vehículos</h3>
                  <p className="text-xs md:text-sm text-black">Rampa de acceso de vehículos</p>
                </div>
              </div>

              {/* Montacargas */}
              <div className="border-2 border-black overflow-hidden">
                <div className="relative aspect-square">
                <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/servicios/Monta%20cargas.jpg"
                    alt="Montacargas"
                    fill
                    className="object-cover"
                  />
        </div>
                <div className="p-4 md:p-6 bg-white">
                  <h3 className="text-lg md:text-xl font-helvetica mb-1 text-black">Montacargas</h3>
                  <p className="text-xs md:text-sm text-black">Zona de almacenamiento de material</p>
                </div>
              </div>

              {/* Camerinos */}
              <div className="border-2 border-black overflow-hidden">
                <div className="relative aspect-square">
                <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/servicios/Camerino.jpg"
                    alt="Camerinos"
                    fill
                    className="object-cover"
                  />
            </div>
                <div className="p-4 md:p-6 bg-white">
                  <h3 className="text-lg md:text-xl font-helvetica mb-1 text-black">Camerinos</h3>
                  <p className="text-xs md:text-sm text-black">5 Áreas independientes de maquillaje y estilismo</p>
                </div>
              </div>

              {/* Video Mapping */}
              <div className="border-2 border-black overflow-hidden">
                <div className="relative aspect-square">
                <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/Ultimas/Videomapping.jpg"
                    alt="Video Mapping"
                    fill
                    className="object-cover"
                  />
              </div>
                <div className="p-4 md:p-6 bg-white">
                  <h3 className="text-lg md:text-xl font-helvetica mb-1 text-black">Video Mapping</h3>
                  <p className="text-xs md:text-sm text-black">Sistema de Video Mapping</p>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 text-center">
              <a href="/servicios" className="inline-flex items-center gap-6 border-2 border-black">
                <span className="px-4 md:px-6 py-2 md:py-3 text-black font-helvetica text-sm md:text-base">Ver todos los servicios</span>
                <div className="bg-black p-2 md:p-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Video Feature Sections - 4 sections with video backgrounds */}
        {/* Video Section 1 - Vehicle Access */}
        <motion.section 
          className="relative min-h-[90vh] md:h-screen overflow-hidden bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/videos//video_coche.mp4"
            />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 py-12 md:py-24 min-h-[90vh] md:h-full flex flex-col justify-between relative z-10">
            <motion.h2 
              className="text-3xl md:text-5xl lg:text-6xl font-helvetica text-white mb-6 md:mb-8 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Acceso de vehículos
            </motion.h2>
            <div className="max-w-2xl ml-auto bg-black/30 p-6 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:p-0">
              <motion.p 
                className="text-base md:text-xl text-gray-200 mb-8 md:mb-12 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Nuestro espacio cuenta con una rampa de acceso directo desde la calle, diseñada especialmente para que los vehículos puedan entrar sin complicaciones. Esto permite llevar los coches directamente al plató, facilitando el trabajo y asegurando que todo esté listo para la creación sin obstáculos.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a href="/espacios" className="inline-flex items-center bg-white text-black px-6 md:px-8 py-2 md:py-3 text-sm md:text-base hover:bg-gray-100 transition-colors">
                  <span>Conoce nuestros espacios</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Video Section 2 - Sound Equipment */}
        <motion.section
          className="relative min-h-[90vh] md:h-screen overflow-hidden bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/videos//video_equipo_sonido.mp4"
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-12 md:py-24 min-h-[90vh] md:h-full flex items-center justify-start relative z-10">
            <div className="max-w-2xl bg-black/30 p-6 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:p-0 ml-8 md:ml-16">
              <motion.h2 
                className="text-3xl md:text-5xl lg:text-6xl font-helvetica text-white mb-6 md:mb-8 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Pasarela técnica
              </motion.h2>
              <motion.p 
                className="text-base md:text-xl text-gray-200 mb-8 md:mb-12 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Contamos con una pasarela técnica de iluminación que permite a cada cliente ajustar las luces y crear la atmósfera perfecta para su proyecto. Esta estructura flexible ofrece total libertad para personalizar la iluminación a gusto. Además, el espacio dispone de una mesa de iluminación para controlar la luz, proporcionando un manejo completo de la ambientación en un solo lugar.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-start"
              >
                <a href="/servicios" className="inline-flex items-center bg-white text-black px-6 md:px-8 py-2 md:py-3 text-sm md:text-base hover:bg-gray-100 transition-colors">
                  <span>Ver nuestros servicios</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
                    </div>
                  </div>
        </motion.section>

        {/* Video Section 3 - Artificial Rain */}
        <motion.section 
          className="relative min-h-[90vh] md:h-screen overflow-hidden bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/videos//video_lluvia_artificial(nada).mp4"
            />
            </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-12 md:py-24 min-h-[90vh] md:h-full flex items-center justify-center relative z-10">
            <div className="max-w-2xl text-center bg-black/30 p-6 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:p-0">
              <motion.h2 
                className="text-3xl md:text-5xl lg:text-6xl font-helvetica text-white mb-6 md:mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Sistema de lluvia artificial
              </motion.h2>
              <motion.p 
                className="text-base md:text-xl text-gray-200 mb-8 md:mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Contamos con un sistema de lluvia artificial que permite simular el efecto de la lluvia en todo el plató, un espacio inundable pensado para dar vida a proyectos donde el agua se convierte en protagonista. Además, cuenta con un regulador de temperatura de agua caliente y fría. Este recurso permite a los clientes explorar ideas innovadoras y crear escenas impactantes, transformando el plató en el escenario perfecto para cualquier visión que requiera la magia del agua.
              </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center"
              >
                <a href="/contacto" className="inline-flex items-center bg-white text-black px-6 md:px-8 py-2 md:py-3 text-sm md:text-base hover:bg-gray-100 transition-colors">
                  <span>Solicitar información</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Video Section 4 - Professional Lighting */}
        <motion.section
          className="relative min-h-[90vh] md:h-screen overflow-hidden bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/videos//video_focoluz.mp4"
            />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 py-12 md:py-24 min-h-[90vh] md:h-full flex items-center relative z-10">
            <div className="max-w-2xl mr-auto bg-black/30 p-6 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:p-0 ml-8 md:ml-16">
              <motion.span 
                className="inline-block text-white font-helvetica tracking-widest mb-4 md:mb-6 text-sm md:text-base"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >              </motion.span>
              <motion.h2 
                className="text-3xl md:text-5xl lg:text-6xl font-helvetica text-white mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Camerinos
              </motion.h2>
              <motion.p 
                className="text-base md:text-xl text-gray-200 mb-8 md:mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                 En nuestros camerinos, cada detalle está pensado para potenciar el trabajo creativo.

                Tres áreas independientes permiten organizar el maquillaje y la preparación de varios modelos o artistas al mismo tiempo, maximizando la eficiencia y ofreciendo un espacio exclusivo para que cada profesional se concentre en dar lo mejor de sí.              </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a href="/dossier" className="inline-flex items-center bg-white text-black px-6 md:px-8 py-2 md:py-3 text-sm md:text-base hover:bg-gray-100 transition-colors">
                  <span>Ver dossier completo</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="proyectos"
          className="min-h-screen bg-black relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Queralt Lahoz - YNEPN */}
          <div className="relative min-h-[90vh] md:h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="relative w-full h-full" style={{ paddingTop: '0' }}>
                <video
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/videos//Queralt%20Lahoz%20-%20YNEPN.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </div>
            </div>
            
            {/* Dark overlay with opacity for better contrast */}
            <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
            
            {/* Logo container with improved positioning and quality */}
            <div className="absolute top-6 md:top-12 left-6 md:left-12 z-20">
              <div className="flex flex-col gap-2">
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos/ELHUECO_LOGO_e_EL-lateral_BLANCO.png"
                  alt="El Hueco Logo"
                  width={180}
                  height={60}
                  className="w-auto h-8 md:h-12"
                  priority
                  quality={100}
                  unoptimized
                />
                <span className="text-white text-lg md:text-2xl font-light tracking-wider">proyectos</span>
              </div>
            </div>
            
            {/* Content with improved positioning and text contrast */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 z-20">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-helvetica text-white mb-4 md:mb-8">Queralt Lahoz - YNEPN</h1>
                <p className="text-xl md:text-2xl text-white mb-2 md:mb-4">Donde el cante antiguo se encuentra con la ciudad.</p>
                <p className="text-base md:text-xl text-gray-200">Un viaje visual entre raíces rotas, cuerpos libres y pulsos electrónicos. Una producción de Topo Colectivo.</p>
                <div className="mt-6 md:mt-8">
                  <span className="inline-block text-white/80 text-sm md:text-lg">UNA PRODUCCIÓN DE TOPO COLECTIVO</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Pablo López Project */}
        <motion.section
          className="min-h-screen bg-black relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Pablo López */}
          <div className="relative min-h-[90vh] md:h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="relative w-full h-full" style={{ paddingTop: '0' }}>
                <iframe
                  src="https://iframe.mediadelivery.net/embed/394900/e9d33e84-0332-4492-ba2d-0b461ff610f1?autoplay=true&muted=true&loop=true&background=true"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  frameBorder="0"
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) scale(1.1)',
                    maxWidth: '100vw',
                    maxHeight: '100vh'
                  }}
                  title="Pablo López"
                  loading="eager"
                ></iframe>
              </div>
            </div>
            
            {/* Dark overlay with opacity for better contrast */}
            <div className="absolute inset-0 bg-black/40 md:bg-black/30 z-10" />
            
         

            {/* Content with improved positioning and text contrast */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 z-30">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-helvetica text-white mb-4 md:mb-8">Pablo López</h1>
                <p className="text-xl md:text-2xl text-white mb-2 md:mb-4">El agua también canta.
                Lluvia artificial, luz y sensibilidad para una puesta en escena única.</p>
                <div className="mt-6 md:mt-8">
                  <span className="inline-block text-white/80 text-sm md:text-lg">Una producción de KKREA FILM PRODUCCIONES.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Cold Culture Project */}
        <motion.section
          className="min-h-screen bg-black relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative min-h-[90vh] md:h-screen w-full overflow-hidden">
            <div className="flex flex-col md:flex-row h-full">
              {/* Left Content - Full width on mobile, half on desktop */}
              <div className="w-full md:w-1/2 flex items-center px-6 py-12 md:px-16 md:py-0 z-20 order-2 md:order-1">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-helvetica text-white mb-4 md:mb-8">Cold Culture</h1>
                  <p className="text-xl md:text-2xl text-white mb-2 md:mb-4">Video musical grabado en El Hueco Madrid.</p>
                  <p className="text-base md:text-xl text-gray-200">Contenido vertical para redes sociales.
                  Rodado en un ciclorama blanco de 5 metros de altura, con parrilla técnica para cuelgue de elementos como la motosierra y diseño de luz para generar tensión visual.</p>
                  <div className="mt-6 md:mt-8">
                    <span className="inline-block text-white/80 text-sm md:text-lg">Una producción de Cold Culture.</span>
                  </div>
                </div>
              </div>
              
              {/* Right Video - Full width on mobile with reduced height, half on desktop */}
              <div className="w-full h-[50vh] md:w-1/2 md:h-full relative order-1 md:order-2">
                <video
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/videos//video_motosierra.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Becay Brand Project */}
        <motion.section
          className="min-h-screen bg-black relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative min-h-[90vh] md:h-screen w-full overflow-hidden">
            <div className="flex flex-col md:flex-row h-full">
              {/* Left Video - Full width on mobile with reduced height, half on desktop */}
              <div className="w-full h-[50vh] md:w-1/2 md:h-full relative">
                <video
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/videos//StorySaver.to_AQNpWXVBJJT88dUE3TmqiQ1dkOmg-Y21uqm7M4Rh-CmiU05y_nn1zlgJQiH3_IR4IrRQhZJyayF_TGdT83slpuci6qKP52UaE8ZphhM.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </div>
              
              {/* Right Content - Full width on mobile, half on desktop */}
              <div className="w-full md:w-1/2 flex items-center px-6 py-12 md:px-16 md:py-0 z-20">
                <div className="max-w-2xl mx-auto md:ml-auto">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-helvetica text-white mb-4 md:mb-8 text-left md:text-right">Becay Brand</h1>
                  <p className="text-xl md:text-2xl text-white mb-2 md:mb-4 text-left md:text-right">Papá Noel ya compra en Becay.</p>
                  <p className="text-base md:text-xl text-gray-200 text-left md:text-right">Una serie de vídeos verticales rodados en El Hueco, donde el acceso de vehículos permitieron recibir a Papá Noel con su coche lleno de ropa.
Una producción de Becay Marketing.</p>
                  <div className="mt-6 md:mt-8 text-left md:text-right">
                    <span className="inline-block text-white/80 text-sm md:text-lg">Una producción de Becay Marketing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Dancing Video Project */}
        <motion.section
          className="min-h-screen bg-black relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative min-h-[90vh] md:h-screen w-full overflow-hidden">
            <div className="flex flex-col md:flex-row h-full">
              {/* Left Content - Full width on mobile, half on desktop */}
              <div className="w-full md:w-1/2 flex items-center px-6 py-12 md:px-16 md:py-0 z-20 order-2 md:order-1">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-helvetica text-white mb-4 md:mb-8">Sin Ruido</h1>
                  <p className="text-xl md:text-2xl text-white mb-2 md:mb-4">El cuerpo habla cuando todo calla.
</p>
                  <p className="text-base md:text-xl text-gray-200">Vídeo vertical grabado con lluvia artificial y luz cenital tenue en El Hueco Madrid.</p>
                  <div className="mt-6 md:mt-8">
                    <span className="inline-block text-white/80 text-sm md:text-lg">Una producción de Christian Escribano y Raquel Tamborino</span>
                  </div>
                </div>
              </div>
              
              {/* Right Video - Full width on mobile with reduced height, half on desktop */}
              <div className="w-full h-[50vh] md:w-1/2 md:h-full relative order-1 md:order-2">
                <iframe
                  src="https://iframe.mediadelivery.net/embed/394900/deeaf869-2126-484d-9718-6d56e8f66694?autoplay=true&muted=true&loop=true&background=true"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  frameBorder="0"
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  title="Dance Project"
                  loading="eager"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Lema Section */}
        <section className="bg-black py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-helvetica text-white mb-8 md:mb-12 max-w-4xl mx-auto leading-tight">
              Las ideas normales caben en cualquier parte, las tuyas solo en el hueco
            </h2>
            <a 
              href="/servicios" 
              className="inline-block border-2 border-white text-white px-6 md:px-10 py-3 md:py-4 text-sm md:text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              MÁS INFORMACIÓN
            </a>
          </div>
        </section>

        {/* Equipo Section */}
        <section id="equipo" className="bg-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
                <div>
                    <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos//ELHUECO_LOGO_Emayuscula_EL-lateral.png"
                  alt="El Hueco Logo"
                  width={90}
                  height={30}
                    className="mb-6 md:mb-8"
                  quality={100}
                />
                  <p className="text-xs md:text-sm text-black uppercase tracking-wide">
                  UNA GUÍA DE<br />
                  GENTE NORMAL<br />
                  CON IDEAS NO<br />
                  MUY NORMALES
                </p>
                </div>
                <div className="text-left md:text-right">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-helvetica font-bold text-black mb-2 md:mb-4">GET TO KNOW</h2>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-helvetica font-bold text-black mb-6 md:mb-8">OUR TEAM</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Irene Bona */}
                <div className="space-y-4">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/irene.jpg"
                      alt="Irene Bona"
                      fill
                      className="object-cover object-top grayscale"
                    />
                    </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-helvetica text-black">Irene Bona</h3>
                    <p className="text-xs md:text-sm text-black">Directora de Marketing</p>
                    <div className="flex gap-2 mt-2">
                      <a href="https://www.linkedin.com/in/irene-bona-b76470209/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">IN</a>
                      <a href="https://www.instagram.com/ireenebona_/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">IG</a>
                    </div>
                  </div>
                </div>

                {/* Paolo Zapico */}
                <div className="space-y-4">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/paolo.jpg"
                      alt="Paolo Zapico"
                      fill
                      className="object-cover object-top grayscale"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-helvetica text-black">Paolo Zapico</h3>
                    <p className="text-xs md:text-sm text-black">Director de Logística</p>
                    <div className="flex gap-2 mt-2">
                      <a href="https://www.instagram.com/paolozapico" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">IG</a>
                      <a href="https://www.linkedin.com/in/paolo-zapico-marulli-aa8885233" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">IN</a>
                    </div>
                  </div>
                </div>

                {/* Rodrigo Torrejón */}
                <div className="space-y-4">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/rodrigo.jpg"
                      alt="Rodrigo Torrejón"
                      fill
                      className="object-cover object-[center_5%] grayscale scale-[1.3] transform-gpu"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-helvetica text-black">Rodrigo Torrejón</h3>
                    <p className="text-xs md:text-sm text-black">Director de Producción</p>
                    <div className="flex gap-2 mt-2">
                      <a href="https://www.instagram.com/rodrilocuente/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">IG</a>
                      <a href="https://www.linkedin.com/in/rodrigotorrejonariza/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">IN</a>
                    </div>
                  </div>
                </div>

                {/* Eduardo Gutiérrez */}
                <div className="space-y-4">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team//eduardo.jpg"
                      alt="Eduardo Gutiérrez"
                      width={400}
                      height={600}
                      className="grayscale w-full h-full object-cover object-top scale-[1.4]"
                      style={{ transformOrigin: "80% 90%" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-helvetica text-black">Eduardo Gutiérrez</h3>
                    <p className="text-xs md:text-sm text-black">Director Comercial</p>
                    <div className="flex gap-2 mt-2">
                      <a href="https://www.instagram.com/edu.guti" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">IG</a>
                      <a href="https://www.linkedin.com/in/eduardo-gutiérrez-tebar-5a3b91245" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">IN</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 md:mt-16 flex justify-center md:justify-end">
                <a href="/equipo" className="inline-flex items-center gap-2 text-black hover:text-gray-600">
                  <span>Conoce más sobre nosotros</span>
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto Section */}
        <motion.section
          id="contacto"
          className="bg-white-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 py-16 md:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <Image
                src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos//ELHUECO_LOGO_Emayuscula_EL-lateral.png"
                alt="El Hueco Logo"
                width={75}
                height={30}
                className="mx-auto mb-6 md:mb-8 w-auto h-7 md:h-auto"
                quality={100}
                priority
              />
              <h2 className="text-3xl md:text-4xl font-helvetica mb-6 md:mb-8">¿Listo para dar vida a tu proyecto?</h2>
              <p className="text-lg md:text-xl mb-8 md:mb-12">
                Escríbenos y charlamos sobre lo que necesitas para tu producción.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservas"
                  className="group relative inline-flex items-center justify-center gap-2 bg-black text-white px-6 md:px-8 py-3 btn-dark"
                >
                  <span className="relative z-10 transition-transform group-hover:translate-x-1 text-sm md:text-base">
                    Reservar una llamada
                  </span>
                  <svg 
                    className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" 
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
                  className="group relative inline-flex items-center justify-center gap-2 bg-transparent border-2 border-black text-black px-6 md:px-8 py-3 btn-outlined"
                >
                  <span className="relative z-10 transition-transform group-hover:translate-x-1 text-sm md:text-base">
            Contactar ahora
                  </span>
                  <svg 
                    className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Booking CTA Section */}
        <motion.section
          className="bg-white-section relative overflow-hidden py-16 md:py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Background effect elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {/* Gradient circles */}
            <div className="absolute top-[10%] left-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-purple-200/30 blur-[80px] md:blur-[120px]"></div>
            <div className="absolute bottom-[10%] right-[5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-blue-200/30 blur-[100px] md:blur-[150px]"></div>
            
            {/* Animated circles */}
            <motion.div 
              className="absolute top-[20%] left-[20%] w-24 md:w-48 h-24 md:h-48 rounded-full border border-black/10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-[30%] right-[15%] w-20 md:w-32 h-20 md:h-32 rounded-full border border-black/10"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            ></motion.div>

            {/* Decorative lines */}
            <motion.div 
              className="absolute top-0 left-1/4 w-px h-16 md:h-32 bg-gradient-to-b from-transparent via-black/20 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-0 right-1/4 w-px h-16 md:h-32 bg-gradient-to-b from-transparent via-black/20 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
              <motion.div 
              className="max-w-6xl mx-auto border-2 border-black p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden backdrop-blur-sm bg-white/80"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 md:w-48 h-24 md:h-48 -translate-y-1/2 translate-x-1/2 hidden md:block">
                <motion.div 
                  className="w-full h-full border-t-2 border-r-2 border-black rounded-tr-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ></motion.div>
              </div>
              <motion.div 
                className="absolute top-0 left-0 w-16 md:w-24 h-16 md:h-24 border-t-2 border-l-2 border-black hidden md:block" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-0 right-0 w-20 md:w-32 h-20 md:h-32 border-b-2 border-r-2 border-black hidden md:block" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              ></motion.div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
                  <div className="flex-1">
                    <motion.div 
                      className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-base md:text-lg font-helvetica tracking-widest">RESERVA AHORA</span>
                    </motion.div>

                    <motion.h2 
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-helvetica font-bold tracking-wide text-black mb-4 md:mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Agenda una llamada de 15 minutos
                    </motion.h2>

                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 md:mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-gray-600 text-sm md:text-base">Disponible hoy</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-black"></div>
                        <span className="text-gray-600 text-sm md:text-base">Respuesta inmediata</span>
                      </div>
                    </motion.div>

                    <motion.p 
                      className="text-base md:text-xl text-gray-800 mb-8 md:mb-12"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Reserva una llamada con nuestro equipo para discutir tu proyecto. Disponible de <span className="font-bold">9:00 a 13:00 o de 15:00 a 19:00</span>, de lunes a viernes.
                      <br/><br/>
                      También puedes contactarnos directamente en{' '}
                      <a href="mailto:admin@el-hueco.es" className="text-black hover:text-gray-600 underline">
                        admin@el-hueco.es
                      </a>
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <motion.a 
                        href="/reservas" 
                        className="group relative inline-flex items-center justify-center gap-3 bg-black text-white px-6 md:px-8 py-3 md:py-4 overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="relative z-10 text-base md:text-lg font-medium">
                          Reservar ahora
                        </span>
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        ></motion.div>
                        <motion.svg 
                          className="w-5 h-5 md:w-6 md:h-6 relative z-10" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 3 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </motion.svg>
                      </motion.a>

                      <motion.a 
                        href="tel:+34622018042"
                        className="group relative inline-flex items-center justify-center gap-3 border-2 border-black text-black px-6 md:px-8 py-3 md:py-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="relative z-10 text-base md:text-lg">
                          Llamar ahora
                        </span>
                      </motion.a>
                    </motion.div>
                  </div>

                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="relative"
                      whileHover={{ 
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        translateY: -5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="bg-white border-2 border-black p-6 md:p-8 relative overflow-hidden">
                        <motion.div 
                          className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-200 to-blue-200"
                          animate={{
                            y: [0, 10, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        ></motion.div>
                        
                        <div className="text-center mb-6 md:mb-8 relative">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "60%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="absolute top-0 left-[20%] h-0.5 bg-gradient-to-r from-transparent via-black to-transparent"
                          ></motion.div>
                          <div className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2 pt-3 md:pt-4">Próxima disponibilidad</div>
                          <div className="text-lg md:text-2xl font-helvetica font-bold">Hoy, 9:00 - 13:00 o 15:00 - 19:00</div>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "60%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1 }}
                            className="absolute bottom-0 left-[20%] h-0.5 bg-gradient-to-r from-transparent via-black to-transparent"
                          ></motion.div>
                        </div>
                        
                        <div className="space-y-2 md:space-y-4">
                          {[
                            ['12:00', '12:15', '12:30', '12:45'],
                            ['13:00', '13:15', '13:30', '13:45']
                          ].map((timeGroup, groupIndex) => (
                            <div key={groupIndex} className="grid grid-cols-4 gap-1 md:gap-2">
                              {timeGroup.map((time, index) => (
                            <motion.div 
                              key={index}
                                  className={`p-2 md:p-3 text-center cursor-pointer relative overflow-hidden rounded-sm text-xs md:text-sm ${
                                    groupIndex === 0 && index === 0
                                  ? 'bg-black text-white' 
                                      : 'border border-black text-black hover:bg-black/5 transition-colors'
                              }`}
                              whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                              }}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                                  transition={{ duration: 0.3, delay: 0.7 + (groupIndex * 4 + index) * 0.1 }}
                            >
                                  {groupIndex === 0 && index === 0 && (
                                <motion.div 
                                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500"
                                  animate={{
                                        opacity: [0.6, 1, 0.6],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                ></motion.div>
                              )}
                                  <span className="relative z-10 font-medium">{time}</span>
                            </motion.div>
                              ))}
                            </div>
                          ))}
                        </div>
                        
                            <motion.div 
                          className="mt-6 md:mt-8 pt-4 md:pt-6 border-t-2 border-black/10 text-center"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                          transition={{ delay: 1.2 }}
                            >
                          <span className="text-xs md:text-sm text-gray-600">
                            Duración de la llamada: 15 minutos
                          </span>
                            </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Mapa Section */}
        <motion.section
          className="bg-white-section relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 md:mb-16 text-center"
            >
              <motion.span 
                className="inline-block text-black font-helvetica tracking-widest mb-2 text-sm md:text-base"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                UBICACIÓN
              </motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-helvetica mb-6 md:mb-8 tracking-wide">
                Dónde estamos
              </h2>
              <p className="text-base md:text-xl text-gray-800 max-w-3xl mx-auto">
                Ubicados en el corazón de Madrid, con fácil acceso y parking cercano.
              </p>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
              {/* Forma orgánica para el mapa */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 blur-3xl transform -skew-y-6"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative w-full h-[350px] md:h-[600px] overflow-hidden border-2 border-black">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0475039135396!2d-3.6394612239807257!3d40.44609505446391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f51c8f6a2e7%3A0x3d5652afd3bae678!2sAv.%20de%20Daroca%2C%2034%2C%2028017%20Madrid!5e0!3m2!1ses!2ses!4v1709932008965!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Tarjeta de información */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute bottom-4 md:bottom-8 right-4 md:right-8 bg-white p-4 md:p-6 border-2 border-black max-w-[calc(100%-32px)] md:max-w-sm"
                >
                  <h3 className="text-lg md:text-xl font-helvetica mb-1 md:mb-2">El Hueco</h3>
                  <p className="text-sm md:text-base text-gray-800 font-helvetica mb-3 md:mb-4">Av. de Daroca, 34, 28017 Madrid</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
                    <a 
                      href="tel:+34622018042"
                      className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors text-sm md:text-base"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+34 644 54 48 99 </span>
                    </a>
                    <a 
                      href="https://maps.google.com/?q=El+Hueco+Madrid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors text-sm md:text-base"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-helvetica">Cómo llegar</span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  )
} 