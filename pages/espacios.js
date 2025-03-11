import Head from 'next/head'
import { motion } from 'framer-motion'
import Gallery from '../components/Gallery'

const Espacios = () => {
  return (
    <>
      <Head>
        <title>El Hueco - Espacios</title>
        <meta name="description" content="Descubre nuestros espacios creativos diseñados para dar vida a tus proyectos." />
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative py-24 bg-gradient-to-b from-purple-900/20 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl font-bold mb-6">Nuestros Espacios</h1>
              <p className="text-xl text-gray-300 mb-8">
                Descubre cada rincón de El Hueco, donde cada espacio ha sido diseñado para potenciar la creatividad y hacer realidad tus proyectos.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Spaces Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              <div className="p-6 bg-white/5 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Estudio Principal</h3>
                <p className="text-gray-400">
                  Un espacio versátil de 120m² con iluminación profesional, perfecto para producciones audiovisuales y sesiones fotográficas.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Salón de Ideación</h3>
                <p className="text-gray-400">
                  Área de 40m² diseñada para reuniones creativas, workshops y presentaciones, equipada con la última tecnología.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Área de Exposiciones</h3>
                <p className="text-gray-400">
                  Espacio multifuncional de 80m² ideal para exposiciones, eventos y networking, con iluminación adaptable.
                </p>
              </div>
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8">Galería de Imágenes</h2>
              <Gallery folder="espacio" layout="masonry" className="mb-16" />
            </motion.div>

            {/* CTA Section */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">¿Te gustaría visitar nuestros espacios?</h3>
              <p className="text-gray-400 mb-8">
                Agenda una visita y descubre todas las posibilidades que El Hueco tiene para ofrecer.
              </p>
              <a
                href="/contacto"
                className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                Contactar ahora
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Espacios 