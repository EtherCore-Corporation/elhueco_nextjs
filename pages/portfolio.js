import Head from 'next/head'
import { motion } from 'framer-motion'
import ProjectGrid from '../components/Portfolio/ProjectGrid'
import Gallery from '../components/Gallery'

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>El Hueco - Portfolio</title>
      </Head>
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Nuestros Proyectos
            </h1>
          </motion.div>
          <ProjectGrid />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Galería de Imágenes
            </h2>
            <Gallery />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Portfolio 