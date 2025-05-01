<<<<<<< HEAD
import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { supabase } from '../utils/supabaseClient'
import emailjs from '@emailjs/browser'

export default function Reservas() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [selectedSlot, setSelectedSlot] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [projectType, setProjectType] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })
  const [availableSlots, setAvailableSlots] = useState([])
  const [bookedSlots, setBookedSlots] = useState([])
  
  // Inicializar EmailJS cuando se carga el componente
  useEffect(() => {
    if (typeof window !== 'undefined' && emailjs) {
      emailjs.init('wtR3B3a43ggP47Tvr');
      console.log('EmailJS inicializado correctamente');
    }
  }, []);
  
  // Verificar si hay diferencias en las plantillas
  useEffect(() => {
    console.log('Verificando consistencia de plantillas:');
    console.log('- ADMIN_TEMPLATE_ID:', process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID);
    console.log('- CLIENT_TEMPLATE_ID:', process.env.NEXT_PUBLIC_EMAILJS_CLIENT_TEMPLATE_ID);
    
    if (process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID === process.env.NEXT_PUBLIC_EMAILJS_CLIENT_TEMPLATE_ID) {
      console.warn('ADVERTENCIA: Las plantillas de administrador y cliente son iguales');
    }
  }, []);

  const generateTimeSlots = (selectedDate) => {
    const slots = []
    const date = new Date(selectedDate)
    
    // Morning slots (9:00 - 13:00)
    for (let hour = 9; hour < 13; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const slotTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        slots.push({
          time: slotTime,
          period: 'morning'
        })
      }
    }

    // Afternoon slots (15:00 - 19:00)
    for (let hour = 15; hour < 19; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const slotTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        slots.push({
          time: slotTime,
          period: 'afternoon'
        })
      }
    }

    return slots
  }

  const fetchBookedSlots = async (date) => {
    console.log('Buscando slots reservados para fecha:', date);
    
    // Formato de fecha para filtrar correctamente
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    
    // Convertir a formato ISO para la consulta
    const startISO = startOfDay.toISOString();
    const endISO = endOfDay.toISOString();
    
    console.log('Rango de búsqueda:', {startISO, endISO});
    
    try {
      // Opción 1: Buscar por la columna time añadida
      const { data: timeData, error: timeError } = await supabase
        .from('bookings')
        .select('time')
        .gte('date', startISO)
        .lte('date', endISO);
      
      if (timeError) {
        console.error('Error al obtener reservas por time:', timeError);
        
        // Si hay error (probablemente porque la columna time no existe), intentamos obtener por date
        const { data, error } = await supabase
          .from('bookings')
          .select('date, status')
          .gte('date', startISO)
          .lte('date', endISO);
        
        if (error) {
          console.error('Error al obtener reservas por date:', error);
          return [];
        }
        
        console.log('Datos de reservas obtenidos por date:', data);
        
        if (!data || data.length === 0) {
          console.log('No se encontraron reservas para esta fecha');
          return [];
        }
        
        // Extraer las horas y minutos de las reservas
        const bookedTimeSlots = data.map(booking => {
          const bookingDate = new Date(booking.date);
          const hours = bookingDate.getHours().toString().padStart(2, '0');
          const minutes = bookingDate.getMinutes().toString().padStart(2, '0');
          return `${hours}:${minutes}`;
        });
        
        console.log('Slots ocupados (extraídos de date):', bookedTimeSlots);
        return bookedTimeSlots;
      }
      
      // Si no hay error, usamos la columna time
      console.log('Datos de reservas obtenidos por time:', timeData);
      
      if (!timeData || timeData.length === 0) {
        console.log('No se encontraron reservas para esta fecha');
        return [];
      }
      
      // Extraer directamente los valores de time
      const bookedTimeSlots = timeData.map(booking => booking.time);
      
      console.log('Slots ocupados (de columna time):', bookedTimeSlots);
      return bookedTimeSlots;
      
    } catch (fetchError) {
      console.error('Error al consultar la base de datos:', fetchError);
      return [];
    }
  }

  const handleDateChange = async (e) => {
    const date = e.target.value
    setSelectedDate(date)
    setSelectedSlot('')
    loadSlots(date)
  }

  const loadSlots = async (date) => {
    const slots = generateTimeSlots(date)
    setAvailableSlots(slots)
    const booked = await fetchBookedSlots(date)
    setBookedSlots(booked)
    
    // Si el slot seleccionado está entre los reservados, deseleccionarlo
    if (booked.includes(selectedSlot)) {
      console.log(`El slot ${selectedSlot} ya está reservado, deseleccionando.`);
      setSelectedSlot('');
    }
  }

  useEffect(() => {
    loadSlots(selectedDate)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    if (!selectedDate || !selectedSlot || !name || !email || !phone || !projectType) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Por favor, completa todos los campos obligatorios.' 
      })
      setIsSubmitting(false)
      return
    }

    const dateTime = new Date(selectedDate)
    const [hours, minutes] = selectedSlot.split(':')
    dateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0)

    try {
      // Aseguramos que todos los campos necesarios estén presentes
      const bookingData = {
        name,
        email,
        phone,
        date: dateTime.toISOString(),
        time: selectedSlot,
        project_type: projectType,
        message: message || '',
        status: 'pending'
      }

      console.log('Datos de la reserva a enviar:', {
        ...bookingData,
        dateTime: dateTime,
        selectedDate,
        selectedSlot
      })

      // Primero guardamos en Supabase
      const { data, error: supabaseError } = await supabase
        .from('bookings')
        .insert([bookingData])
        .select()

      if (supabaseError) {
        console.error('Error detallado de Supabase:', supabaseError)
        throw new Error(`Error al guardar en base de datos: ${supabaseError.message}`)
      }

      if (!data || data.length === 0) {
        throw new Error('No se recibieron datos de confirmación de la base de datos')
      }

      console.log('Reserva creada con éxito en Supabase:', data)

      // Verificar las variables de entorno de EmailJS
      const missingEnvVars = []
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) missingEnvVars.push('SERVICE_ID')
      if (!process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID) missingEnvVars.push('ADMIN_TEMPLATE_ID')
      if (!process.env.NEXT_PUBLIC_EMAILJS_CLIENT_TEMPLATE_ID) missingEnvVars.push('CLIENT_TEMPLATE_ID')
      if (!process.env.NEXT_PUBLIC_EMAILJS_USER_ID) missingEnvVars.push('USER_ID')

      if (missingEnvVars.length > 0) {
        throw new Error(`Faltan las siguientes variables de entorno: ${missingEnvVars.join(', ')}`)
      }

      // Mapear los tipos de proyecto a nombres más descriptivos
      const projectTypes = {
        photo: 'Fotografía',
        video: 'Vídeo',
        event: 'Evento',
        other: 'Otro'
      }

      // Formatear la fecha para el correo
      const formattedDate = dateTime.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })

      // Preparar datos para las plantillas de email
      const emailTemplateData = {
        from_name: name,
        booking_id: data[0].id,
        name,
        email,
        phone,
        booking_date: formattedDate,
        project_type: projectTypes[projectType] || projectType,
        message: message || '(Sin mensaje)',
        status: 'Pendiente',
        time: selectedSlot
      }

      console.log('Datos preparados para EmailJS:', emailTemplateData);

      // Variable para almacenar posibles errores de envío
      let errorDetail = '';
      
      try {
        // 1. Email para el administrador
        const adminResult = await emailjs.send(
          'service_z4wm9bz', // Service ID directo
          'template_tfhymxp', // Template ID para administrador
          {
            from_name: name,
            reply_to: email,
            user_phone: phone,
            booking_date: formattedDate,
            project_type: projectTypes[projectType] || projectType,
            message: message || '(Sin mensaje)',
          },
          'wtR3B3a43ggP47Tvr' // User ID directo
        );
        
        console.log('Email al administrador enviado:', adminResult);
        
        // 2. Email para el cliente
        const clientResult = await emailjs.send(
          'service_z4wm9bz', // Service ID directo
          'template_9acaxcl', // Template ID para cliente - el que sabemos que funciona
          {
            from_name: 'El Hueco',
            to_name: name,
            to_email: email,
            user_email: email,
            reply_to: 'admin@el-hueco.es',
            booking_date: formattedDate,
            project_type: projectTypes[projectType] || projectType,
            message: message || '(Sin mensaje)',
          },
          'wtR3B3a43ggP47Tvr' // User ID directo
        );
        
        // Mensaje de éxito personalizado según si se envió el email al cliente o no
        setSubmitStatus({
          type: 'success',
          message: '¡Reserva realizada con éxito! Te contactaremos pronto para confirmar.'
        });
      } catch (emailError) {
        console.error('Error al enviar emails:', emailError);
        // No bloqueamos el proceso si falla el envío del email
      }

      // Limpiar el formulario después del éxito
      setSelectedSlot('')
      setName('')
      setEmail('')
      setPhone('')
      setProjectType('')
      setMessage('')
      
      // Actualizar slots disponibles
      await loadSlots(selectedDate)
      
    } catch (error) {
      console.error('Error completo:', error)
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Ha ocurrido un error al procesar tu reserva'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BookingForm from '../components/BookingForm';
import Header from '../components/Header';

export default function Reservas() {
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
  return (
    <>
      <Head>
        <title>Reserva una llamada | El Hueco</title>
        <meta name="description" content="Reserva una llamada de 15 minutos con nuestro equipo para discutir tu proyecto." />
<<<<<<< HEAD
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
=======
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
      </Head>

      <Header />

<<<<<<< HEAD
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-black pt-20">
        {/* Fondo animado */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)] animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,0,0,0.05)_50%,transparent_75%)] animate-gradient"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-12 relative z-10">
=======
      <div className="min-h-screen bg-black text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
<<<<<<< HEAD
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Reserva una llamada
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Agenda una llamada de 15 minutos con nuestro equipo para discutir tu proyecto
            </p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Columna izquierda - Calendario y slots */}
              <div className="md:w-2/3">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">
                    {formatDate(selectedDate)}
                  </h2>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="p-2 bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="space-y-8">
                  {/* Información sobre slots */}
                  <div className="text-sm text-gray-300 mb-4">
                    <p className="flex items-center gap-2">
                      <span className="inline-block w-3 h-3 bg-gray-800/50 border border-gray-500"></span>
                      Horarios no disponibles
                    </p>
                    <p className="flex items-center gap-2 mt-1">
                      <span className="inline-block w-3 h-3 bg-white/5 border border-white/20"></span>
                      Horarios disponibles
                    </p>
                    <p className="flex items-center gap-2 mt-1">
                      <span className="inline-block w-3 h-3 bg-gradient-to-r from-red-600 to-red-800"></span>
                      Horario seleccionado
                    </p>
                  </div>
                
                  {/* Slots de mañana */}
          <motion.div
                    initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-lg font-medium text-white mb-4">
                      Mañana (9:00 - 13:00)
                    </h3>
                    <div className="grid grid-cols-4 gap-3">
                      {generateTimeSlots(selectedDate)
                        .filter(slot => slot.period === 'morning')
                        .map(slot => {
                          const isBooked = bookedSlots.includes(slot.time)
                          const isSelected = slot.time === selectedSlot
                          return (
                            <motion.button
                              key={slot.time}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              type="button"
                              disabled={isBooked}
                              onClick={() => setSelectedSlot(slot.time)}
                              className={`
                                relative overflow-hidden py-3 px-4 text-sm font-medium transition-all duration-300
                                before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-500 before:to-red-700 
                                before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                                ${isBooked 
                                  ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
                                  : isSelected
                                    ? 'bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-500/20'
                                    : 'bg-white/5 text-white hover:text-white border border-white/20'
                                }
                              `}
                            >
                              <span className="relative z-10">{slot.time}</span>
                            </motion.button>
                          )
                        })}
                    </div>
          </motion.div>

                  {/* Slots de tarde */}
          <motion.div
                    initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-lg font-medium text-white mb-4">
                      Tarde (15:00 - 19:00)
                    </h3>
                    <div className="grid grid-cols-4 gap-3">
                      {generateTimeSlots(selectedDate)
                        .filter(slot => slot.period === 'afternoon')
                        .map(slot => {
                          const isBooked = bookedSlots.includes(slot.time)
                          const isSelected = slot.time === selectedSlot
                          return (
                            <motion.button
                              key={slot.time}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              type="button"
                              disabled={isBooked}
                              onClick={() => setSelectedSlot(slot.time)}
                              className={`
                                relative overflow-hidden py-3 px-4 text-sm font-medium transition-all duration-300
                                before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-500 before:to-red-700 
                                before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                                ${isBooked 
                                  ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
                                  : isSelected
                                    ? 'bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-500/20'
                                    : 'bg-white/5 text-white hover:text-white border border-white/20'
                                }
                              `}
                            >
                              <span className="relative z-10">{slot.time}</span>
                            </motion.button>
                          )
                        })}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Columna derecha - Formulario */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="md:w-1/3 bg-white/5 backdrop-blur-lg p-6 border border-white/20"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Tu nombre y apellidos"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Teléfono de contacto *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Tipo de proyecto *
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full p-3 bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      style={{ color: 'white' }}
                      required
                    >
                      <option value="" style={{ color: 'black' }}>Selecciona una opción</option>
                      <option value="photo" style={{ color: 'black' }}>Fotografía</option>
                      <option value="video" style={{ color: 'black' }}>Vídeo</option>
                      <option value="event" style={{ color: 'black' }}>Evento</option>
                      <option value="other" style={{ color: 'black' }}>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full p-3 bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Cuéntanos brevemente sobre tu proyecto..."
                    />
                  </div>

                  {submitStatus.message && (
                    <div className={`p-4 ${
                      submitStatus.type === 'error' 
                        ? 'bg-red-900/50 text-red-200 border border-red-700' 
                        : submitStatus.type === 'warning'
                          ? 'bg-yellow-900/50 text-yellow-200 border border-yellow-700'
                          : 'bg-green-900/50 text-green-200 border border-green-700'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || !selectedSlot}
                    className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-3 font-medium
                      hover:from-red-700 hover:to-red-900 transition-all disabled:from-gray-600 disabled:to-gray-700 
                      disabled:cursor-not-allowed shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30"
                  >
                    {isSubmitting ? 'Procesando...' : 'Confirmar reserva'}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-10%, -10%) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        .animate-gradient {
          animation: gradient 15s linear infinite;
        }
      `}</style>
    </>
  )
=======
            className="text-center mb-16"
          >
            <Image
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos/ELHUECO_LOGO_e_EL-lateral_BLANCO.png"
              alt="El Hueco Logo"
              width={180}
              height={60}
              className="w-auto h-12 mx-auto mb-12"
              priority
              quality={100}
              unoptimized
            />
            <motion.span 
              className="inline-block text-white font-medium mb-4 font-serif tracking-widest"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              RESERVA AHORA
            </motion.span>
            <h1 className="text-5xl font-serif mb-6 text-white">
              Agenda una llamada de 15 minutos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agenda una llamada con nuestro equipo para discutir tu proyecto y resolver todas tus dudas.
              Recibirás una confirmación por email y nosotros también seremos notificados en admin@el-hueco.es.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-5xl mx-auto border-2 border-white p-8 md:p-12"
          >
            <BookingForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-serif mb-4">¿Prefieres contactarnos directamente?</h2>
            <p className="text-gray-300 mb-8">
              También puedes contactarnos por teléfono o correo electrónico.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:+34622018042"
                className="inline-flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+34 622 018 042</span>
              </a>
              <a 
                href="mailto:admin@el-hueco.es" 
                className="inline-flex items-center gap-3 border-2 border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
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
>>>>>>> 359e9e240c1a60e3646c6aa2d7097f91ccd82bb0
} 