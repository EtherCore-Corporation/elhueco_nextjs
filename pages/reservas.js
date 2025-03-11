import Head from 'next/head';
import { motion } from 'framer-motion';
import BookingForm from '../components/BookingForm';

export default function Reservas() {
  return (
    <>
      <Head>
        <title>Reserva una llamada | El Hueco</title>
        <meta name="description" content="Reserva una llamada de 15 minutos con nuestro equipo para discutir tu proyecto." />
      </Head>

      <div className="min-h-screen bg-black text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.span 
              className="inline-block text-blue-400 font-medium mb-2 font-orbitron tracking-widest"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              CONTACTO
            </motion.span>
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-white font-orbitron tracking-wide">
              Reserva una llamada
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Agenda una llamada de 15 minutos con nuestro equipo para discutir tu proyecto y resolver todas tus dudas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BookingForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold mb-4 font-orbitron tracking-wide">¿Prefieres contactarnos directamente?</h2>
            <p className="text-gray-400 mb-6">
              También puedes contactarnos por teléfono o correo electrónico.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a 
                href="tel:+34600000000" 
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+34 600 000 000</span>
              </a>
              <a 
                href="mailto:admin@el-hueco.es" 
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>admin@el-hueco.es</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 