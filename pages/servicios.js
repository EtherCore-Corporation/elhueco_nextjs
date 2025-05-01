import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';

const services = [
  {
    id: 1,
    title: "Estudio Fotográfico",
    description: "Espacio versátil con ciclorama y equipamiento profesional para tus sesiones fotográficas.",
    features: [
      "Ciclorama de 6x4 metros",
      "Iluminación profesional",
      "Fondos de diferentes colores",
      "Camerinos con espejo",
    ],
<<<<<<< HEAD
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/servicios//Dosier%20El%20Hueco%202025.jpg",
=======
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/servicios//Camerinos%20Independientes.jpg",
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Producción Audiovisual",
    description: "Equipo técnico y espacio adaptado para rodajes y producciones audiovisuales.",
    features: [
      "Sistema de iluminación RGB",
      "Equipo de sonido profesional",
      "Montacargas para material",
      "Zona de control técnico",
    ],
<<<<<<< HEAD
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/Ultimas/Producciones%20audiovisuales.jpg",
=======
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/servicios//Sistema%20de%20Lluvia%20Artificial.jpg",
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Eventos y Presentaciones",
    description: "Espacio multifuncional para eventos corporativos y presentaciones.",
    features: [
      "Capacidad hasta 50 personas",
      "Sistema de video mapping",
      "Equipo de sonido",
      "Catering disponible",
    ],
<<<<<<< HEAD
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/espacio/Whats_App_Image_2022_11_24_at_11_11_31_6deeeb24b0.jpeg",
=======
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/servicios//Eventos%20y%20Presentaciones.jpg",
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Streaming y Directos",
    description: "Infraestructura completa para transmisiones en vivo y streaming.",
    features: [
      "Fibra óptica dedicada",
      "Equipamiento para streaming",
      "Set virtual disponible",
      "Soporte técnico",
    ],
<<<<<<< HEAD
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/Ultimas/FOTO%20STREAMING.jpg",
=======
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/servicios//Streaming%20y%20Directos.jpg",
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
<<<<<<< HEAD
  },
  {
    id: 5,
    title: "Montacargas y Logística",
    description: "Sistema de montacargas y acceso logístico para equipos y materiales de gran volumen.",
    features: [
      "Montacargas industrial",
      "Acceso directo desde la calle",
      "Capacidad para equipos pesados",
      "Personal de asistencia",
    ],
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images//montacargas.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Sistema de Lluvia Artificial",
    description: "Plató inundable con sistema de lluvia artificial para escenas con agua.",
    features: [
      "Control de intensidad de lluvia",
      "Regulador de temperatura",
      "Plató inundable y drenaje eficiente",
      "Iluminación especial para agua",
    ],
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/servicios//Sistema%20de%20Lluvia%20Artificial.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
=======
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
  }
];

export default function Servicios() {
  return (
    <>
      <Head>
        <title>Servicios | El Hueco</title>
        <meta name="description" content="Descubre nuestros servicios profesionales de fotografía, video y eventos en El Hueco." />
      </Head>

      <Header />

      <div className="min-h-screen bg-white text-black pt-32 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.span 
<<<<<<< HEAD
              className="inline-block text-black font-medium mb-2 font-helvetica tracking-widest"
=======
              className="inline-block text-black font-medium mb-2 font-serif tracking-widest"
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              NUESTROS SERVICIOS
            </motion.span>
<<<<<<< HEAD
            <h1 className="text-5xl font-helvetica mb-6">
=======
            <h1 className="text-5xl font-serif mb-6">
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
              Todo lo que necesitas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Ofrecemos servicios integrales para tus producciones creativas, con el mejor equipamiento y soporte técnico.
            </p>
          </motion.div>

          {/* Servicios Destacados - Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-sm overflow-hidden mb-20 border-2 border-black"
          >
            <div className="relative h-96 overflow-hidden">
              <Image
<<<<<<< HEAD
                src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/servicios/Pasarela tecnica.jpg"
=======
                src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/servicios//Sistema%20de%20Lluvia%20Artificial.jpg"
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
                alt="Servicios destacados en El Hueco"
                fill
                className="object-cover"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl px-4">
<<<<<<< HEAD
                  <h2 className="text-4xl md:text-5xl font-helvetica mb-6">
=======
                  <h2 className="text-4xl md:text-5xl font-serif mb-6">
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
                    Equipamiento profesional y experiencia
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 font-sans">
                    Descubre nuestros servicios especializados para producciones fotográficas y audiovisuales
                  </p>
                  <a 
                    href="#contacto" 
                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 hover:bg-black hover:text-white transition-colors border border-white font-sans"
                  >
                    <span>Solicitar presupuesto</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative border-2 border-black overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Service Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={90}
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<<<<<<< HEAD
                    <h3 className="text-2xl font-helvetica mb-2">{service.title}</h3>
=======
                    <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
                    <p className="text-white/90 text-sm font-sans">{service.description}</p>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8 bg-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 border border-black text-black bg-white/90">
                      {service.icon}
                    </div>
<<<<<<< HEAD
                    <h3 className="text-2xl font-helvetica">{service.title}</h3>
=======
                    <h3 className="text-2xl font-serif">{service.title}</h3>
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
                  </div>
                  <p className="text-gray-600 mb-6 font-sans">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600 font-sans">
                        <svg className="w-5 h-5 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 text-right">
                    <a href="#contacto" className="inline-flex items-center gap-2 text-black border-b border-black pb-1 hover:text-gray-600 transition-colors">
                      <span>Más información</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Categorías de servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            <div className="bg-neutral-100 p-8 border-l-4 border-black">
              <div className="text-4xl mb-4">📸</div>
<<<<<<< HEAD
              <h3 className="text-xl font-helvetica mb-3">Fotografía</h3>
=======
              <h3 className="text-xl font-serif mb-3">Fotografía</h3>
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
              <p className="text-gray-600 mb-4 font-sans">Sesiones fotográficas profesionales con equipamiento de primer nivel y asistencia técnica.</p>
              <ul className="space-y-2 text-sm text-gray-700 font-sans">
                <li>• Fotografía de producto</li>
                <li>• Retratos y books</li>
                <li>• Fotografía corporativa</li>
                <li>• Editoriales de moda</li>
              </ul>
            </div>

            <div className="bg-neutral-100 p-8 border-l-4 border-black">
              <div className="text-4xl mb-4">🎬</div>
<<<<<<< HEAD
              <h3 className="text-xl font-helvetica mb-3">Audiovisual</h3>
=======
              <h3 className="text-xl font-serif mb-3">Audiovisual</h3>
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
              <p className="text-gray-600 mb-4 font-sans">Producciones audiovisuales con equipamiento técnico avanzado y soporte profesional.</p>
              <ul className="space-y-2 text-sm text-gray-700 font-sans">
                <li>• Videoclips</li>
                <li>• Cortometrajes</li>
                <li>• Spots publicitarios</li>
                <li>• Contenido para redes</li>
              </ul>
            </div>

            <div className="bg-neutral-100 p-8 border-l-4 border-black">
              <div className="text-4xl mb-4">🎭</div>
<<<<<<< HEAD
              <h3 className="text-xl font-helvetica mb-3">Eventos</h3>
=======
              <h3 className="text-xl font-serif mb-3">Eventos</h3>
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
              <p className="text-gray-600 mb-4 font-sans">Espacio versátil para todo tipo de eventos y presentaciones con infraestructura completa.</p>
              <ul className="space-y-2 text-sm text-gray-700 font-sans">
                <li>• Lanzamientos de producto</li>
                <li>• Eventos corporativos</li>
                <li>• Desfiles de moda</li>
                <li>• Networking y workshops</li>
              </ul>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            id="contacto"
            className="relative overflow-hidden"
          >
            <div className="max-w-4xl mx-auto border-2 border-black p-12 bg-gradient-to-r from-neutral-50 to-white">
              <div className="absolute top-0 right-0 -mt-6 -mr-6">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
                  <circle cx="60" cy="60" r="59.5" stroke="black"/>
                  <circle cx="60" cy="60" r="40" stroke="black"/>
                  <circle cx="60" cy="60" r="20" stroke="black"/>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 mb-6 ml-6">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
                  <rect width="80" height="80" stroke="black"/>
                  <rect x="20" y="20" width="40" height="40" stroke="black"/>
                </svg>
              </div>
              <div className="relative z-10">
<<<<<<< HEAD
                <h2 className="text-4xl font-helvetica mb-6">¿Necesitas más información?</h2>
=======
                <h2 className="text-4xl font-serif mb-6">¿Necesitas más información?</h2>
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
                <p className="text-gray-600 mb-8 text-lg max-w-2xl font-sans">
                  Contáctanos para discutir tu proyecto y encontrar la mejor solución para tus necesidades. Ofrecemos asesoramiento personalizado sin compromiso.
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-black flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-black font-sans">Teléfono</h3>
                      <p className="text-gray-600 font-sans">+34 622 018 042</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-black flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-black font-sans">Email</h3>
                      <p className="text-gray-600 font-sans">admin@el-hueco.es</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-black flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-black font-sans">Dirección</h3>
                      <p className="text-gray-600 font-sans">Av. de Daroca, 34, 28017 Madrid</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/reservas" 
                    className="bg-black text-white px-8 py-3 hover:bg-gray-900 transition-colors font-sans"
                  >
                    Reservar una llamada
                  </Link>
                  <a 
                    href="mailto:admin@el-hueco.es" 
                    className="border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition-colors font-sans"
                  >
                    Enviar email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 