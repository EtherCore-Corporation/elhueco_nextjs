import Head from 'next/head'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Espacios() {
  // Espacios definidos directamente sin fetching de Supabase
  const spaces = [
    {
      id: 1,
      name: 'Ciclorama',
      description: 'Amplio ciclorama para sesiones fotográficas y videográficas profesionales.',
      image_url: 'https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/Ultimas/Ciclorama.jpg',
      features: ['Ciclorama completo', 'Iluminación especializada', 'Espacio diáfano']
    },
    {
      id: 2,
      name: 'Pasarela Técnica',
      description: 'Área con pasarela elevada ideal para fotografía de moda y eventos.',
      image_url: 'https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/servicios/Pasarela%20tecnica.jpg',
      features: ['Pasarela de 10m', 'Sistema de sonido', 'Iluminación LED RGB']
    },
    {
      id: 3,
      name: 'Camerino',
      description: 'Espacio dedicado para preparación de modelos y artistas.',
      image_url: 'https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/servicios/Camerino.jpg',
      features: ['5 estaciones', 'Espejos con iluminación', 'Zona de vestuario']
    },
    {
      id: 4,
      name: 'Video Mapping',
      description: 'Equipamiento para proyección de video mapping en diferentes superficies.',
      image_url: 'https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/Ultimas/Videomapping.jpg',
      features: ['Proyectores especializados', 'Software de mapping', 'Superficies variadas']
    },
    {
      id: 5,
      name: 'Montacargas',
      description: 'Sistema de montacargas para transporte de equipos y materiales pesados.',
      image_url: 'https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/servicios/Monta%20cargas.jpg',
      features: ['Capacidad elevada', 'Acceso directo', 'Zona de almacenamiento']
    },
    {
      id: 6,
      name: 'Rampa de Acceso',
      description: 'Rampa de acceso para entrada de vehículos directamente al plató.',
      image_url: 'https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/servicios/Rampa%20de%20acceso.jpg',
      features: ['Acceso amplio', 'Entrada directa al plató', 'Para todo tipo de vehículos']
    },
    {
      id: 7,
      name: 'Sistema de Lluvia Artificial',
      description: 'Sistema completo de lluvia artificial para producciones creativas.',
      image_url: 'https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/servicios//Sistema%20de%20Lluvia%20Artificial.jpg',
      features: ['Temperatura regulable', 'Patio inundable', 'Control preciso']
    }
  ];

  return (
    <>
      <Head>
        <title>Espacios | El Hueco</title>
        <meta name="description" content="Descubre nuestros espacios versátiles para fotografía, video y eventos en El Hueco." />
      </Head>

      <Header />

      <main className="pt-20 bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-helvetica mb-8 text-black">Nuestros Espacios</h1>
          
          {/* Espacios Grid - Layout minimal y limpio */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {spaces.map((space, index) => (
              <motion.div 
                key={space.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-black overflow-hidden group"
              >
                <div className="relative aspect-square">
                  <Image
                    src={space.image_url}
                    alt={space.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white text-black">
                  <h2 className="text-xl font-helvetica mb-1">{space.name}</h2>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{space.description}</p>
                  
                  {space.features.length > 0 && (
                    <ul className="mb-4 space-y-1">
                      {space.features.map((feature, i) => (
                        <li key={i} className="text-xs text-gray-500 flex items-start">
                          <span className="inline-block w-1 h-1 bg-black rounded-full mr-2 mt-1.5"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <Link 
                    href="/reservas" 
                    className="inline-flex items-center text-black text-sm border-b border-black pb-0.5 hover:border-red-500 hover:text-red-500 transition-colors"
                  >
                    Reservar
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Sección de información adicional */}
          <div className="mt-16 md:mt-24 max-w-3xl">
            <h2 className="text-2xl font-helvetica mb-4 text-black">Más sobre nuestros espacios</h2>
            <p className="text-base text-gray-600 mb-6">
              En El Hueco disponemos de diferentes espacios técnicos preparados para cualquier tipo de producción audiovisual. 
              Desde nuestro ciclorama profesional hasta sistemas especializados como la lluvia artificial, cada detalle está 
              diseñado para hacer realidad tus ideas más creativas.
            </p>
            <p className="text-base text-gray-600 mb-6">
              Todos nuestros espacios están disponibles para alquiler por horas o jornadas completas. Consulta disponibilidad 
              y precios en nuestra sección de reservas o contacta directamente con nosotros.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link 
                href="/reservas" 
                className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-900 transition-colors"
              >
                Reservar ahora
              </Link>
              <Link 
                href="/contacto" 
                className="border border-black text-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 