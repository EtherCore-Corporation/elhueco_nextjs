import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/ciclorama1.jpeg",
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
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/video_mapping1.jpeg",
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
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/pasarela1.jpg",
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
    image: "https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/iluminacion1.jpeg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function Servicios() {
  return (
    <>
      <Head>
        <title>Servicios | El Hueco</title>
        <meta name="description" content="Descubre todos los servicios que ofrecemos en El Hueco: fotografía, producción audiovisual, eventos y más." />
      </Head>

      <div className="min-h-screen bg-black text-white pt-24 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-block text-blue-400 font-medium mb-2 font-division tracking-widest"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              NUESTROS SERVICIOS
            </motion.span>
            <h1 className="text-5xl font-orbitron mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-white tracking-wide">
              Todo lo que necesitas
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-body">
              Ofrecemos servicios integrales para tus producciones creativas, con el mejor equipamiento y soporte técnico.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-orbitron tracking-wide">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6 font-body">{service.description}</p>
                  <ul className="space-y-3 font-division">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-orbitron mb-4 tracking-wide">¿Necesitas más información?</h2>
              <p className="text-gray-400 mb-8 font-body">
                Contáctanos para discutir tu proyecto y encontrar la mejor solución para tus necesidades.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/reservas" 
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full overflow-hidden hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <span className="relative z-10">Reservar una llamada</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a 
                  href="tel:+34622018042" 
                  className="group relative inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-full overflow-hidden hover:bg-white/20 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+34 622 018 042</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 