import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

export default function Dossier() {
  return (
    <>
      <Head>
        <title>Dossier 2024 | El Hueco</title>
        <meta name="description" content="El Hueco - Donde las ideas encuentran su espacio perfecto. Un espacio versátil para la creatividad visual y artística en Madrid." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Portada */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/ciclorama1.jpeg"
              alt="El Hueco Studio"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          </div>
          
          <motion.div 
            className="relative z-10 text-center px-4 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos/ELHUECO_LOGO_Emayuscula_EL-lateral_BLANCO.png"
              alt="El Hueco Logo"
              width={300}
              height={112}
              className="mx-auto mb-12"
              priority
            />
            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl mb-8 tracking-wide">
              Donde las ideas encuentran su
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-4">
                espacio perfecto
              </span>
            </h1>
            <p className="font-orbitron text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto tracking-wide">
              Bienvenido a un universo donde la creatividad no conoce límites. 
              Un espacio diseñado para dar vida a tus ideas más ambiciosas.
            </p>
            <p className="font-orbitron text-lg text-gray-400 mb-12 tracking-wide">
              📍 Dossier 2024 - v1.0
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Introducción */}
        <section className="py-24 relative overflow-hidden">
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
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div className="text-center mb-16">
                <motion.span 
                  variants={fadeInUp}
                  className="inline-block text-blue-400 font-orbitron mb-4 tracking-widest"
                >
                  🎬 NUESTRA HISTORIA
                </motion.span>
                <motion.h2 
                  variants={fadeInUp}
                  className="font-orbitron text-4xl md:text-5xl mb-8 tracking-wide"
                >
                  ¿Qué es El Hueco?
                </motion.h2>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="font-orbitron text-xl text-gray-300 mb-16 leading-relaxed space-y-8 tracking-wide"
              >
                <p>
                  Más que un plató, El Hueco es el punto de encuentro donde la magia del cine y la creatividad visual cobran vida. 
                  Nacimos de un sueño: crear un espacio único donde directores, artistas y creadores pudieran dar rienda suelta 
                  a su imaginación sin limitaciones técnicas.
                </p>
                <p>
                  En nuestro espacio, cada detalle ha sido meticulosamente pensado para potenciar la visión creativa. 
                  Desde nuestro impresionante ciclorama inundable hasta nuestro innovador sistema de lluvia artificial, 
                  cada elemento está diseñado para transformar tus ideas en realidad.
                </p>
                <p>
                  Ya sea para un rodaje cinematográfico que requiera efectos especiales, un show en vivo que necesite 
                  una atmósfera única, o una instalación artística que desafíe los límites convencionales, 
                  El Hueco es tu lienzo en blanco, equipado con la más avanzada tecnología y una infraestructura 
                  que se adapta a cualquier desafío creativo.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {[
                  {
                    src: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/ciclorama1.jpeg",
                    alt: "Ciclorama El Hueco"
                  },
                  {
                    src: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/video_mapping1.jpeg",
                    alt: "Video Mapping El Hueco"
                  },
                  {
                    src: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/iluminacion1.jpeg",
                    alt: "Iluminación El Hueco"
                  }
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-square rounded-2xl overflow-hidden group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Características Técnicas */}
        <section className="py-24 bg-neutral-950 relative">
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
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <motion.div className="text-center mb-16">
                <motion.span 
                  variants={fadeInUp}
                  className="inline-block text-blue-400 font-orbitron mb-4 tracking-widest"
                >
                  🏗️ NUESTRO ESPACIO
                </motion.span>
                <motion.h2 
                  variants={fadeInUp}
                  className="font-orbitron text-4xl md:text-5xl mb-8 tracking-wide"
                >
                  Infraestructura y Características
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="font-orbitron text-xl text-gray-300 max-w-3xl mx-auto mb-16 tracking-wide"
                >
                  Descubre un espacio donde la tecnología se encuentra con la creatividad, 
                  ofreciendo posibilidades ilimitadas para tus producciones más ambiciosas.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "📏",
                    title: "Superficie Total",
                    description: "202 m² de espacio modular y versátil para adaptarse a cualquier producción.",
                    delay: 0.1
                  },
                  {
                    icon: "🎬",
                    title: "Ciclorama Inundable",
                    description: "81 m² de ciclorama con 5m de altura, ideal para fondos infinitos y efectos visuales. Capacidad de llenado con agua para escenas de alto impacto.",
                    delay: 0.2
                  },
                  {
                    icon: "💧",
                    title: "Lluvia Artificial",
                    description: "Simula lluvia real en el plató con regulación de agua fría y caliente. Perfecto para rodajes cinematográficos y sesiones fotográficas de alto nivel.",
                    delay: 0.3
                  },
                  {
                    icon: "💡",
                    title: "Iluminación y Video Mapping",
                    description: "Sistema RGB programable, con transiciones suaves y efectos dinámicos. Tecnología de video mapping para proyecciones creativas e inmersivas.",
                    delay: 0.4
                  },
                  {
                    icon: "🚛",
                    title: "Acceso Vehicular",
                    description: "Entrada directa desde la calle, permitiendo el acceso de coches y equipos de gran tamaño. Montacargas integrado, facilitando la logística y el montaje.",
                    delay: 0.5
                  },
                  {
                    icon: "🎭",
                    title: "Camerinos y Pasarela",
                    description: "Camerinos equipados con estaciones de maquillaje y vestuario. Pasarela técnica para ajustes de iluminación y personalización del set.",
                    delay: 0.6
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: feature.delay }}
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
                    
                    <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
                    <span className="text-4xl mb-4 block relative z-10">{feature.icon}</span>
                    <h3 className="font-orbitron text-xl mb-3 relative z-10 group-hover:text-blue-300 transition-colors duration-300 tracking-wide">{feature.title}</h3>
                    <p className="font-orbitron text-gray-400 relative z-10 group-hover:text-gray-300 transition-colors duration-300 tracking-wide">{feature.description}</p>
                    
                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Galería de Imágenes */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <motion.div className="text-center mb-16">
                <motion.span 
                  variants={fadeInUp}
                  className="inline-block text-blue-400 font-orbitron mb-4 tracking-widest"
                >
                  📸 EXPLORA EL HUECO
                </motion.span>
                <motion.h2 
                  variants={fadeInUp}
                  className="font-orbitron text-4xl md:text-5xl mb-8 tracking-wide"
                >
                  Un Viaje por Nuestras Instalaciones
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="font-orbitron text-xl text-gray-300 max-w-3xl mx-auto mb-16 tracking-wide"
                >
                  Cada rincón de El Hueco ha sido diseñado para inspirar y facilitar la creación 
                  de contenido excepcional. Descubre los espacios que darán vida a tus proyectos.
                </motion.p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-12 gap-6"
              >
                <div className="col-span-12 md:col-span-8 relative rounded-3xl overflow-hidden h-[450px] group">
                  <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/ciclorama1.jpeg"
                    alt="Ciclorama"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-8 z-10">
                    <h3 className="text-2xl font-orbitron mb-2 tracking-wide">Ciclorama</h3>
                    <p className="text-gray-300 text-base max-w-md">Espacio versátil para tus producciones con iluminación profesional.</p>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4 relative rounded-3xl overflow-hidden h-[450px] group">
                  <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/camerinos1.jpg"
                    alt="Camerinos"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-8 z-10">
                    <h3 className="text-2xl font-orbitron mb-2 tracking-wide">Camerinos</h3>
                    <p className="text-gray-300 text-base max-w-xs">Espacios cómodos y funcionales para preparación y maquillaje.</p>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 relative rounded-3xl overflow-hidden h-[320px] group">
                  <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/pasarela1.jpg"
                    alt="Pasarela"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <h3 className="text-xl font-orbitron mb-2 tracking-wide">Pasarela</h3>
                    <p className="text-gray-300 text-sm max-w-xs">Amplio espacio para rodajes y producciones de gran formato.</p>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 relative rounded-3xl overflow-hidden h-[320px] group">
                  <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/video_mapping1.jpeg"
                    alt="Video Mapping"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <h3 className="text-xl font-orbitron mb-2 tracking-wide">Video Mapping</h3>
                    <p className="text-gray-300 text-sm max-w-xs">Tecnología avanzada para proyecciones inmersivas.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-neutral-950 relative overflow-hidden">
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
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 relative overflow-hidden">
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
                
                <div className="relative z-10 text-center">
                  <motion.h2 
                    variants={fadeInUp}
                    className="font-orbitron text-3xl md:text-4xl mb-8 tracking-wide"
                  >
                    🎥 Tu Visión, Nuestro Espacio
                  </motion.h2>
                  <motion.div 
                    variants={fadeInUp}
                    className="space-y-6 mb-12"
                  >
                    <p className="font-orbitron text-xl text-gray-300 tracking-wide">
                      El primer paso para crear algo extraordinario es encontrar el espacio perfecto. 
                      En El Hueco, tu visión creativa encontrará todo lo necesario para hacerse realidad.
                    </p>
                    <ul className="font-orbitron text-gray-300 space-y-4 max-w-lg mx-auto text-left tracking-wide">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 text-xl">✨</span>
                        <span>Experimenta la magia de nuestras instalaciones en acción.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 text-xl">🎯</span>
                        <span>Recibe asesoría técnica personalizada para tu proyecto.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 text-xl">🚀</span>
                        <span>Lleva tu creatividad más allá de los límites convencionales.</span>
                      </li>
                    </ul>
                  </motion.div>
                  <motion.div 
                    variants={fadeInUp}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <Link
                      href="/reservas"
                      className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full overflow-hidden hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-orbitron tracking-wider"
                    >
                      <span className="relative z-10 transition-transform group-hover:translate-x-1">
                        🔘 Reservar una visita
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
                    </Link>
                    <a
                      href="tel:+34622018042"
                      className="group relative inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full overflow-hidden hover:bg-white/20 transition-all duration-300 font-orbitron tracking-wider"
                    >
                      <span className="relative z-10 transition-transform group-hover:translate-x-1">
                        📞 Llamar ahora
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                        />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
} 