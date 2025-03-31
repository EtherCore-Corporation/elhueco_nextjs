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
      </Head>

      <Header />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-[100vh] flex items-center justify-center relative overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-white/70 z-10" />
            <Image
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images//Dosier%20El%20Hueco%202025.png"
              alt="El Hueco Studio"
              fill
              className="object-cover brightness-110 contrast-90"
              priority
              quality={100}
            />
          </motion.div>
          
          <motion.div 
            style={{ opacity }}
            className="relative z-20 container mx-auto px-4 flex items-center justify-center min-h-screen"
          >
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="max-w-4xl w-full flex flex-col items-center justify-center text-center"
            >
              <motion.div variants={fadeInUp} className="flex justify-center w-full">
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos//ELHUECO_LOGO_Emayuscula_EL-lateral.png"
                  alt="El Hueco Logo"
                  width={250}
                  height={94}
                  className="w-auto h-24 mb-12 drop-shadow-md"
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
                className="text-5xl md:text-7xl font-serif mb-6 tracking-tight text-black text-center w-full"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block mb-2"
                >
                  Tu espacio
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block text-black"
                >
                  creativo en Madrid
                </motion.span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-black/80 mb-16 text-center max-w-2xl mx-auto"
              >
                Un estudio versátil donde tus producciones cobran vida.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-6 justify-center w-full"
              >
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
            <a href="#espacios" className="text-black flex flex-col items-center">
              <span className="text-sm mb-2 font-medium">Descubre más</span>
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

        {/* Filosofía Section */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-24">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif mb-12 text-black">Nuestra filosofía:</h2>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-black mb-20">
                SOMOS UN ESTUDIO CREATIVO PARA MENTES INQUIETAS. MÁS QUE UN PLATÓ, SOMOS UN PUNTO DE ENCUENTRO PARA INNOVAR SIN MOLDES NI FÓRMULAS. NO SOLO CREAMOS, TRANSFORMAMOS.
              </h1>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-black">
                NO SE TRATA DE ENCONTRARLE UN HUECO A LAS IDEAS, SINO DE QUE LAS IDEAS ENCUENTREN SU <span className="font-serif">HUECO</span>.
              </h1>
          </div>
          </div>
        </section>

        {/* New Hero Section */}
        <section className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images//camerinos1.jpg"
              alt="El Hueco Studio"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-black/25"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl">
              <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                className="text-6xl md:text-7xl font-serif mb-6 text-white"
              >
                Estás en el lugar ideal
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl"
              >
                Descubre cada rincón de El Hueco, un estudio diseñado para dar vida a tus ideas creativas. Un lugar donde la tecnología y el diseño se unen para potenciar tu creatividad.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#nuestro-espacio" className="bg-white text-black border-2 border-white px-8 py-3 hover:bg-black hover:text-white transition-all duration-300">
                  Nuestro Espacio
                </a>
                <a href="#servicios" className="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300">
                  Servicios
                </a>
                <a href="#proyectos" className="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300">
                  Proyectos
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nuestro Espacio Section */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-24">
            <h2 className="text-4xl font-serif mb-16 text-black">Descubre nuestro espacio</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pasarela Técnica */}
              <div className="relative group border-2 border-black">
                <div className="aspect-square relative overflow-hidden">
                <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images//pasarela1.jpg"
                    alt="Pasarela Técnica"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-serif mb-2">Pasarela Técnica</h3>
                    <p className="text-sm">14 Focos RGB LED | Material Audiovisual</p>
            </div>
                </div>
              </div>

              {/* Ciclorama */}
              <div className="relative group border-2 border-black">
                <div className="aspect-square relative overflow-hidden">
                <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images//ciclorama1.jpeg"
                  alt="Ciclorama"
                  fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-serif mb-2">Ciclorama</h3>
                    <p className="text-sm">Ciclorama profesional | Iluminación LED</p>
            </div>
                </div>
              </div>

              {/* Acceso de Vehículos */}
              <div className="relative group border-2 border-black">
                <div className="aspect-square relative overflow-hidden">
                <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images//entrada_coches1.jpeg"
                    alt="Acceso de Vehículos"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-serif mb-2">Acceso de Vehículos</h3>
                    <p className="text-sm">Rampa de acceso de vehículos</p>
          </div>
                </div>
              </div>

              {/* Montacargas */}
              <div className="relative group border-2 border-black">
                <div className="aspect-square relative overflow-hidden">
                <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images//montacargas.jpg"
                    alt="Montacargas"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-serif mb-2">Montacargas</h3>
                    <p className="text-sm">Zona de almacenamiento de material</p>
        </div>
                </div>
              </div>

              {/* Camerinos */}
              <div className="relative group border-2 border-black">
                <div className="aspect-square relative overflow-hidden">
                <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images//camerinos1.jpg"
                    alt="Camerinos"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-serif mb-2">Camerinos</h3>
                    <p className="text-sm">5 Áreas independientes de maquillaje y estilismo</p>
            </div>
                </div>
              </div>

              {/* Iluminación */}
              <div className="relative group border-2 border-black">
                <div className="aspect-square relative overflow-hidden">
                <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images//iluminacion1.jpeg"
                    alt="Iluminación"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-serif mb-2">Iluminación</h3>
                    <p className="text-sm">Sistema de iluminación profesional</p>
              </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a href="/servicios" className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 border-2 border-black">
                <span>Ver todos los servicios</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

      
        {/* Projects Section */}
        <motion.section
          id="proyectos"
          className="min-h-screen bg-black relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
        >
          {/* Queralt Lahoz - YNEPN */}
          <div className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0">
              <video
                src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/videos//Queralt%20Lahoz%20-%20YNEPN.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
            
            {/* Dark overlay with opacity for better contrast */}
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Logo container with improved positioning and quality */}
            <div className="absolute top-12 left-12 z-20">
              <div className="flex items-center gap-6">
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos/ELHUECO_LOGO_e_EL-lateral_BLANCO.png"
                  alt="El Hueco Logo"
                  width={180}
                  height={60}
                  className="w-auto h-12"
                  priority
                  quality={100}
                  unoptimized
                />
                <span className="text-white text-2xl font-light tracking-wider">proyectos</span>
              </div>
            </div>
            
            {/* Content with improved positioning and text contrast */}
            <div className="absolute bottom-0 left-0 w-full p-16 z-20">
              <div className="max-w-4xl">
                <h1 className="text-8xl font-serif text-white mb-8">Queralt Lahoz - YNEPN</h1>
                <p className="text-2xl text-white mb-4">Tu nuevo lugar favorito para almorzar llega a Jerez.</p>
                <p className="text-xl text-gray-200">Únete a nuestra lista de correo para disfrutar de todas ver nuestras promociones anticipadas.</p>
                <div className="mt-8">
                  <span className="inline-block text-white/80 text-lg">UNA PRODUCCIÓN DE TOPO COLECTIVO</span>
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
          <div className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0">
              <div className="relative w-full h-full" style={{ paddingTop: '0' }}>
                <iframe
                  src="https://iframe.mediadelivery.net/embed/394900/e9d33e84-0332-4492-ba2d-0b461ff610f1?autoplay=true&muted=true&loop=true&background=true"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  frameBorder="0"
                  style={{ 
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) scale(1.1)',
                    minWidth: '100%',
                    minHeight: '100%'
                  }}
                  title="Pablo López"
                  loading="eager"
                ></iframe>
              </div>
            </div>
            
            {/* Dark overlay with opacity for better contrast */}
            <div className="absolute inset-0 bg-black/30 z-10" />
            
            {/* Logo container with improved positioning and quality */}
            <div className="absolute top-12 left-12 z-30">
              <div className="flex items-center gap-6">
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos/ELHUECO_LOGO_e_EL-lateral_BLANCO.png"
                  alt="El Hueco Logo"
                  width={180}
                  height={60}
                  className="w-auto h-12"
                  priority
                  quality={100}
                  unoptimized
                />
                <span className="text-white text-2xl font-light tracking-wider">proyectos</span>
                </div>
            </div>

            {/* Content with improved positioning and text contrast */}
            <div className="absolute bottom-0 left-0 w-full p-16 z-30">
              <div className="max-w-4xl">
                <h1 className="text-8xl font-serif text-white mb-8">Pablo López - Videoclip</h1>
                <p className="text-2xl text-white mb-4">Sesión musical en vivo desde El Hueco Madrid.</p>
                <p className="text-xl text-gray-200">Experiencia audiovisual exclusiva con interpretaciones únicas de sus mejores temas.</p>
                <div className="mt-8">
                  <span className="inline-block text-white/80 text-lg">UNA PRODUCCIÓN DE EL HUECO STUDIOS</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Video Feature Sections - Added 4 new sections with video backgrounds */}
        {/* Video Section 1 - Vehicle Access */}
        <motion.section 
          className="relative h-screen overflow-hidden bg-black"
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
            <div className="absolute inset-0 bg-black/25"></div>
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 py-24 h-full flex items-center relative z-10">
            <div className="max-w-2xl">
              <motion.span 
                className="inline-block text-white font-serif tracking-widest mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                ACCESO DE VEHÍCULOS
              </motion.span>
              <motion.h2 
                className="text-5xl md:text-6xl font-serif text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Facilidad de acceso para cualquier producción
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-200 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
Nuestro espacio cuenta con una rampa de acceso directo desde la calle, diseñada especialmente para que los vehículos puedan entrar sin complicaciones.

Esto permite llevar los coches directamente al plató, facilitando el trabajo y asegurando que todo esté listo para la creación sin obstáculos.              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a href="/espacios" className="inline-flex items-center bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors">
                  <span>Conoce nuestros espacios</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Video Section 2 - Sound Equipment */}
        <motion.section
          className="relative h-screen overflow-hidden bg-black"
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
            <div className="absolute inset-0 bg-black/25"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-24 h-full flex items-center relative z-10">
            <div className="max-w-2xl ml-auto">
              <motion.span 
                className="inline-block text-white font-serif tracking-widest mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
              </motion.span>
              <motion.h2 
                className="text-5xl md:text-6xl font-serif text-white mb-8 text-right"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
PASARELA TÉCNICA              </motion.h2>
              <motion.p 
                className="text-xl text-gray-200 mb-12 text-right"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
Contamos con una pasarela técnica de iluminación que permite a cada cliente ajustar las luces y crear la atmósfera perfecta para su proyecto.

Esta estructura flexible ofrece total libertad para personalizar la iluminación a gusto.

Además, el espacio dispone de una mesa de iluminación para controlar la luz, proporcionando un manejo completo de la ambientación en un solo lugar.              </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-end"
              >
                <a href="/servicios" className="inline-flex items-center bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors">
                  <span>Ver nuestros servicios</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
                    </div>
                  </div>
        </motion.section>

        {/* Video Section 3 - Artificial Rain */}
        <motion.section 
          className="relative h-screen overflow-hidden bg-black"
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
            <div className="absolute inset-0 bg-black/25"></div>
            </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-24 h-full flex items-center relative z-10">
            <div className="max-w-2xl">
              <motion.span 
                className="inline-block text-white font-serif tracking-widest mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
              </motion.span>
              <motion.h2 
                className="text-5xl md:text-6xl font-serif text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
SISTEMA DE LLUVIA ARTIFICIAL              </motion.h2>
              <motion.p 
                className="text-xl text-gray-200 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
"Contamos con un sistema de lluvia artificial que permite simular el efecto de la lluvia en todo el plató, un espacio inundable pensado para dar vida a proyectos donde el agua se convierte en protagonista. Además, cuenta con un regulador de temperatura de agua caliente y fría.

Este recurso permite a los clientes explorar ideas innovadoras y crear escenas impactantes, transformando el plató en el escenario perfecto para cualquier visión que requiera la magia del agua."              </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex"
              >
                <a href="/contacto" className="inline-flex items-center bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors">
                  <span>Solicitar información</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Video Section 4 - Professional Lighting */}
        <motion.section
          className="relative h-screen overflow-hidden bg-black"
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
            <div className="absolute inset-0 bg-black/25"></div>
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 py-24 h-full flex items-center relative z-10">
            <div className="max-w-2xl mr-auto">
              <motion.span 
                className="inline-block text-white font-serif tracking-widest mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >              </motion.span>
              <motion.h2 
                className="text-5xl md:text-6xl font-serif text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                CAMERINOS
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-200 mb-12"
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
                <a href="/dossier" className="inline-flex items-center bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors">
                  <span>Ver dossier completo</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Equipo Section */}
        <section id="equipo" className="bg-white">
          <div className="container mx-auto px-4 py-24">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                    <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos//ELHUECO_LOGO_Emayuscula_EL-lateral.png"
                  alt="El Hueco Logo"
                  width={90}
                  height={30}
                  className="mb-8"
                  quality={100}
                />
                <h2 className="text-6xl font-serif text-black mb-4">GET TO KNOW</h2>
                <h2 className="text-6xl font-serif text-black mb-8">OUR TEAM</h2>
                <p className="text-sm text-black uppercase tracking-wide">
                  UNA GUÍA DE<br />
                  GENTE NORMAL<br />
                  CON IDEAS NO<br />
                  MUY NORMALES
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Irene Bona */}
                <div className="space-y-4">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/irene.jpg"
                      alt="Irene Bona"
                      fill
                      className="object-cover grayscale"
                    />
                    </div>
                  <div>
                    <h3 className="text-xl font-serif text-black">Irene Bona</h3>
                    <p className="text-sm text-black">Directora de Marketing</p>
                    <div className="flex gap-2 mt-2">
                      <a href="#" className="text-black hover:text-gray-600">IG</a>
                      <a href="#" className="text-black hover:text-gray-600">IN</a>
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
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-black">Paolo Zapico</h3>
                    <p className="text-sm text-black">Director de Logística</p>
                    <div className="flex gap-2 mt-2">
                      <a href="#" className="text-black hover:text-gray-600">IG</a>
                      <a href="#" className="text-black hover:text-gray-600">IN</a>
                    </div>
                  </div>
                </div>

                {/* Rodrigo Torrejón */}
                <div className="space-y-4">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/rodrigo.jpg"
                      alt="Rodrigo Torrejón"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-black">Rodrigo Torrejón</h3>
                    <p className="text-sm text-black">Director de Producción</p>
                    <div className="flex gap-2 mt-2">
                      <a href="#" className="text-black hover:text-gray-600">IG</a>
                      <a href="#" className="text-black hover:text-gray-600">IN</a>
                    </div>
                  </div>
                </div>

                {/* Eduardo Gutiérrez */}
                <div className="space-y-4">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/eduardo.jpg"
                      alt="Eduardo Gutiérrez"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-black">Eduardo Gutiérrez</h3>
                    <p className="text-sm text-black">Director Comercial</p>
                    <div className="flex gap-2 mt-2">
                      <a href="#" className="text-black hover:text-gray-600">IG</a>
                      <a href="#" className="text-black hover:text-gray-600">IN</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex justify-end">
                <a href="/equipo" className="inline-flex items-center gap-2 text-black hover:text-gray-600">
                  <span>Conoce más sobre nosotros</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="container mx-auto px-4 py-24 text-center">
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
                className="mx-auto mb-8"
                quality={100}
                priority
              />
              <h2 className="text-4xl font-serif mb-8">¿Listo para dar vida a tu proyecto?</h2>
              <p className="text-xl mb-12">
                Escríbenos y charlamos sobre lo que necesitas para tu producción.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservas"
                  className="group relative inline-flex items-center gap-2 bg-black text-white px-8 py-3 btn-dark"
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
                  className="group relative inline-flex items-center gap-2 bg-transparent border-2 border-black text-black px-8 py-3 btn-outlined"
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
          className="bg-white-section relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Background effect elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-gray-400 blur-[120px]"></div>
            <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-gray-400 blur-[100px]"></div>
            <motion.div 
              className="absolute top-[40%] left-[30%] w-32 h-32 rounded-full border border-black/30"
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
              className="absolute bottom-[20%] right-[25%] w-24 h-24 rounded-full border border-black/20"
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
          </div>

          <div className="container mx-auto px-4 relative z-10">
              <motion.div 
              className="max-w-5xl mx-auto border-2 border-black p-8 md:p-12 relative overflow-hidden backdrop-blur-sm bg-white/60"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 -translate-y-1/2 translate-x-1/2">
                <motion.div 
                  className="w-full h-full border-t-2 border-r-2 border-black rounded-tr-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ></motion.div>
              </div>
              <motion.div 
                className="absolute top-0 left-0 w-16 h-16 border-t border-l border-black" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-black" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              ></motion.div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <motion.span 
                      className="inline-block text-black font-serif tracking-widest mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <span className="relative">
                      RESERVA AHORA
                        <motion.span 
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-black" 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        ></motion.span>
                      </span>
                    </motion.span>
                    <motion.h2 
                      className="text-3xl md:text-4xl font-serif tracking-wide text-black mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Agenda una llamada de 15 minutos
                    </motion.h2>
                    <motion.p 
                      className="text-gray-800 text-lg mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Reserva una llamada con nuestro equipo para discutir tu proyecto. Disponible de 12:00 a 14:00, de lunes a viernes. 
                      También puedes contactarnos directamente en <a href="mailto:admin@el-hueco.es" className="text-black hover:text-gray-600 underline">admin@el-hueco.es</a>
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <motion.a 
                        href="/reservas" 
                        className="group relative inline-flex items-center gap-2 bg-black text-white px-8 py-3 overflow-hidden"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="relative z-10 font-medium">
                          Reservar ahora
                        </span>
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        ></motion.div>
                        <motion.svg 
                          className="w-5 h-5 relative z-10" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                          />
                        </motion.svg>
                      </motion.a>
                    </motion.div>
                  </div>
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="relative"
                      whileHover={{ 
                        boxShadow: "0 0 30px rgba(0,0,0,0.2)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="bg-white backdrop-blur-md border-2 border-black p-6 relative overflow-hidden">
                        {/* Floating decoration */}
                        <motion.div 
                          className="absolute -top-6 -right-6 w-12 h-12 rounded-full border border-black"
                          animate={{
                            y: [0, 10, 0],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        ></motion.div>
                        
                        <div className="text-center mb-6 relative">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "40%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="absolute top-0 left-[30%] h-0.5 bg-gradient-to-r from-transparent via-black to-transparent"
                          ></motion.div>
                          <div className="text-sm text-gray-800 mb-1 pt-2">Próxima disponibilidad</div>
                          <div className="text-xl font-serif">Hoy, 12:00 - 14:00</div>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "40%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1 }}
                            className="absolute bottom-0 left-[30%] h-0.5 bg-gradient-to-r from-transparent via-black to-transparent"
                          ></motion.div>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-2 mb-4">
                          {['12:00', '12:15', '12:30', '12:45'].map((time, index) => (
                            <motion.div 
                              key={index}
                              className={`p-2 text-center text-sm cursor-pointer relative overflow-hidden ${
                                index === 0 
                                  ? 'bg-black text-white' 
                                  : 'border border-black text-black hover:bg-black/10 transition-colors'
                              }`}
                              whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                              }}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                            >
                              {index === 0 && (
                                <motion.div 
                                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
                                  animate={{
                                    opacity: [0.5, 1, 0.5],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                ></motion.div>
                              )}
                              <span className="relative z-10">{time}</span>
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-4 gap-2">
                          {['13:00', '13:15', '13:30', '13:45'].map((time, index) => (
                            <motion.div 
                              key={index}
                              className="p-2 text-center text-sm border border-black text-black hover:bg-black/10 transition-colors cursor-pointer"
                              whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                              }}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                            >
                              {time}
                            </motion.div>
                          ))}
                        </div>
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
          <div className="container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <motion.span 
                className="inline-block text-black font-serif tracking-widest mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                UBICACIÓN
              </motion.span>
              <h2 className="text-5xl font-serif mb-8 tracking-wide">
                Dónde estamos
              </h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
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
                <div className="relative w-full h-[600px] overflow-hidden border-2 border-black">
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
                  className="absolute bottom-8 right-8 bg-white p-6 border-2 border-black max-w-sm"
                >
                  <h3 className="text-xl font-serif mb-2">El Hueco</h3>
                  <p className="text-gray-800 font-serif mb-4">Av. de Daroca, 34, 28017 Madrid</p>
                  <div className="flex items-center gap-4">
                    <a 
                      href="tel:+34622018042"
                      className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+34 622 018 042</span>
                    </a>
                    <a 
                      href="https://maps.google.com/?q=El+Hueco+Madrid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-serif">Cómo llegar</span>
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