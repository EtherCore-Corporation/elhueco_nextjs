import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';

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
        <title>Dossier | El Hueco</title>
        <meta name="description" content="Explora nuestro dossier de servicios y capacidades en El Hueco." />
      </Head>

      <Header />

      <div className="min-h-screen bg-white text-black">
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
            <div className="absolute inset-0 bg-black/50" />
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 font-heading text-white">
              Donde las ideas encuentran su
              <span className="block mt-4">
                espacio perfecto
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Bienvenido a un universo donde la creatividad no conoce límites. 
              Un espacio diseñado para dar vida a tus ideas más ambiciosas.
            </p>
            <p className="text-lg text-gray-300 mb-12">
              Dossier 2024 - v1.0
            </p>
          </motion.div>
        </section>

        {/* Introducción */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div className="text-center mb-16">
                <motion.h2 
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl mb-8 font-heading"
                >
                  ¿Qué es El Hueco?
                </motion.h2>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="text-xl text-gray-600 mb-16 leading-relaxed space-y-8"
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
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-1"
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
                    className="relative aspect-square overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Características Técnicas */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <motion.div className="text-center mb-16">
                <motion.h2 
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl mb-8 font-heading"
                >
                  Infraestructura y Características
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-gray-300 max-w-3xl mx-auto mb-16"
                >
                  Descubre un espacio donde la tecnología se encuentra con la creatividad, 
                  ofreciendo posibilidades ilimitadas para tus producciones más ambiciosas.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Superficie Total",
                    description: "202 m² de espacio modular y versátil para adaptarse a cualquier producción."
                  },
                  {
                    title: "Ciclorama Inundable",
                    description: "81 m² de ciclorama con 5m de altura, ideal para fondos infinitos y efectos visuales."
                  },
                  {
                    title: "Lluvia Artificial",
                    description: "Simula lluvia real en el plató con regulación de agua fría y caliente."
                  },
                  {
                    title: "Iluminación y Video Mapping",
                    description: "Sistema RGB programable, con transiciones suaves y efectos dinámicos."
                  },
                  {
                    title: "Acceso Vehicular",
                    description: "Entrada directa desde la calle, permitiendo el acceso de coches y equipos."
                  },
                  {
                    title: "Camerinos y Pasarela",
                    description: "Camerinos equipados con estaciones de maquillaje y vestuario."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-2 border-white p-8 group hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    <h3 className="text-xl font-heading mb-4">{feature.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Galería de Imágenes */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <motion.div className="text-center mb-16">
                <motion.h2 
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl mb-8 font-heading"
                >
                  Un Viaje por Nuestras Instalaciones
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-gray-600 max-w-3xl mx-auto mb-16"
                >
                  Cada rincón de El Hueco ha sido diseñado para inspirar y facilitar la creación 
                  de contenido excepcional.
                </motion.p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-12 gap-1"
              >
                <div className="col-span-12 md:col-span-8 relative h-[450px] group">
                  <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/ciclorama1.jpeg"
                    alt="Ciclorama"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl font-heading mb-2">Ciclorama</h3>
                      <p className="text-gray-200 text-base max-w-md">Espacio versátil para tus producciones con iluminación profesional.</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4 relative h-[450px] group">
                  <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/camerinos1.jpg"
                    alt="Camerinos"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl font-heading mb-2">Camerinos</h3>
                      <p className="text-gray-200 text-base max-w-xs">Espacios cómodos y funcionales para preparación y maquillaje.</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 relative h-[320px] group">
                  <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/pasarela1.jpg"
                    alt="Pasarela"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl font-heading mb-2">Pasarela</h3>
                      <p className="text-gray-200 text-base max-w-xs">Amplio espacio para rodajes y producciones de gran formato.</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 relative h-[320px] group">
                  <Image
                    src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/video_mapping1.jpeg"
                    alt="Video Mapping"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl font-heading mb-2">Video Mapping</h3>
                      <p className="text-gray-200 text-base max-w-xs">Tecnología avanzada para proyecciones inmersivas.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <div className="border-2 border-white p-12">
                <div className="text-center">
                  <motion.h2 
                    variants={fadeInUp}
                    className="text-3xl md:text-4xl mb-8 font-heading"
                  >
                    Tu Visión, Nuestro Espacio
                  </motion.h2>
                  <motion.div 
                    variants={fadeInUp}
                    className="space-y-6 mb-12"
                  >
                    <p className="text-xl text-gray-300">
                      El primer paso para crear algo extraordinario es encontrar el espacio perfecto. 
                      En El Hueco, tu visión creativa encontrará todo lo necesario para hacerse realidad.
                    </p>
                  </motion.div>
                  <motion.div 
                    variants={fadeInUp}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <Link
                      href="/reservas"
                      className="bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors"
                    >
                      Reservar una visita
                    </Link>
                    <a
                      href="tel:+34622018042"
                      className="border-2 border-white px-8 py-3 hover:bg-white hover:text-black transition-colors"
                    >
                      Llamar ahora
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