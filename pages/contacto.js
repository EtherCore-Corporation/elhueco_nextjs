import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Header from '../components/Header'
import emailjs from '@emailjs/browser'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // 1. Guardar en Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ])

      if (error) throw error

      // 2. Enviar email utilizando EmailJS con la cuenta específica para contacto
      try {
        console.log('Enviando email con EmailJS para contacto...');
        
        // Usar exactamente los mismos nombres de variables que están en la plantilla
        const emailResult = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_CONTACT_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
          {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message || '(Sin mensaje)',
          },
          process.env.NEXT_PUBLIC_EMAILJS_CONTACT_USER_ID
        );
        
        console.log('Email de contacto enviado:', emailResult);
      } catch (emailError) {
        console.error('Error al enviar email de contacto:', emailError);
        // No bloqueamos el proceso si falla el envío del email
      }

      setStatus({
        type: 'success',
        message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error al enviar el mensaje:', error)
      setStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <Head>
        <title>Contacto | El Hueco</title>
        <meta name="description" content="Contacta con El Hueco - Tu espacio creativo en Madrid para fotografía, video y eventos." />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      </Head>

      <Header />

      <div className="min-h-screen bg-white pt-24 md:pt-24 lg:pt-24">
        <div className="container mx-auto px-4 py-16 pt-28 md:pt-16">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl mb-6 font-bold text-black">Contacto</h1>
              <p className="text-xl text-gray-600">
                Ponte en contacto con nosotros para más información, reservas o colaboraciones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Información de contacto */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">Ubicación</h2>
                  <p className="text-gray-600">
                    Nos encontramos en Av. de Daroca, 34, 28017 Madrid
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">Forma de Trabajo</h2>
                  <p className="text-gray-600">
                    Nuestro método se basa en la colaboración, la transparencia y la co-creación. 
                    Trabajamos de cerca contigo para dar forma a tus ideas desde el concepto hasta 
                    la ejecución.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">Contacto Directo</h2>
                  <div className="space-y-2">
                    <a 
                      href="tel:+34622018042"
                      className="block text-gray-600 hover:text-black transition-colors"
                    >
                      +34 622 018 042
                    </a>
                    <a 
                      href="mailto:admin@el-hueco.es"
                      className="block text-gray-600 hover:text-black transition-colors"
                    >
                      admin@el-hueco.es
                    </a>
                    <a href="tel:+34644544899" className="block text-lg text-gray-600 hover:text-black transition-colors mb-2">
                      +34 644 544 899
                    </a>
                  </div>
                </div>
              </div>

              {/* Formulario */}
              <div className="bg-gray-50 p-8">
                <h2 className="text-2xl font-bold text-black mb-6">Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 text-black focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 text-black focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 text-black focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors"
                    />
                  </div>

                  {status.message && (
                    <div className={`p-4 ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-black text-white py-3 px-6 hover:bg-gray-900 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
} 