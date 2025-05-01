import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import { format, addDays, setHours, setMinutes, addMinutes, isBefore, isAfter } from 'date-fns';
import { es } from 'date-fns/locale';

// Generar slots de tiempo para reservas
// 9am a 1pm y 3pm a 7pm en intervalos de 15 minutos
const generateTimeSlots = (date) => {
  const morningStart = setHours(setMinutes(date, 0), 9); // 9:00 am
  const morningEnd = setHours(setMinutes(date, 0), 13); // 1:00 pm
  const afternoonStart = setHours(setMinutes(date, 0), 15); // 3:00 pm
  const afternoonEnd = setHours(setMinutes(date, 0), 19); // 7:00 pm

  const slots = [];
  
  // Slots de la mañana (9am-1pm)
  let currentSlot = morningStart;
  while (isBefore(currentSlot, morningEnd)) {
    slots.push(format(currentSlot, 'HH:mm'));
    currentSlot = addMinutes(currentSlot, 15);
  }
  
  // Slots de la tarde (3pm-7pm)
  currentSlot = afternoonStart;
  while (isBefore(currentSlot, afternoonEnd)) {
    slots.push(format(currentSlot, 'HH:mm'));
    currentSlot = addMinutes(currentSlot, 15);
  }

  return slots;
};

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    time: '',
    project_type: 'Consulta general'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [timeSlots, setTimeSlots] = useState([]);
  
  useEffect(() => {
    // Generar los slots de tiempo al cargar
    setTimeSlots(generateTimeSlots(new Date()));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });
    
    try {
      console.log('Iniciando envío de reserva:', formData);
      // Convertir time a formato adecuado si es necesario
      const bookingTime = formData.time;
      
      // Formato de fecha completa para guardar en la base de datos
      const fullDateString = `${formData.date} ${bookingTime}`;
      
      console.log('Intentando guardar en Supabase...');
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            date: fullDateString,
            project_type: formData.project_type,
            status: 'pendiente'
          }
        ]);

      if (error) {
        console.error('Error al guardar en Supabase:', error);
        throw new Error(`Error al guardar la reserva: ${error.message || 'Error desconocido'}`);
      }

      console.log('Reserva guardada con éxito:', data);
      
      // Enviar correo de notificación al administrador
      console.log('Enviando email al administrador...');
      const adminEmailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'admin@el-hueco.es',
          subject: `Nueva reserva de ${formData.name}`,
          text: `
            Se ha realizado una nueva reserva:
            
            Nombre: ${formData.name}
            Email: ${formData.email}
            Teléfono: ${formData.phone || 'No proporcionado'}
            Fecha y hora: ${fullDateString}
            Tipo de proyecto: ${formData.project_type}
            Mensaje: ${formData.message || 'No se ha proporcionado mensaje'}
          `,
          html: `
            <h2>Nueva reserva en El Hueco</h2>
            <p>Se ha realizado una nueva reserva con los siguientes detalles:</p>
            <ul>
              <li><strong>Nombre:</strong> ${formData.name}</li>
              <li><strong>Email:</strong> ${formData.email}</li>
              <li><strong>Teléfono:</strong> ${formData.phone || 'No proporcionado'}</li>
              <li><strong>Fecha y hora:</strong> ${fullDateString}</li>
              <li><strong>Tipo de proyecto:</strong> ${formData.project_type}</li>
            </ul>
            <p><strong>Mensaje:</strong> ${formData.message || 'No se ha proporcionado mensaje'}</p>
          `
        }),
      });

      if (!adminEmailResponse.ok) {
        const adminEmailError = await adminEmailResponse.json();
        console.warn('Advertencia: Error al enviar email al administrador:', adminEmailError);
        // No lanzamos error aquí para permitir que la reserva continúe
      } else {
        console.log('Email al administrador enviado con éxito');
      }
      
      // También enviar confirmación al cliente
      console.log('Enviando email de confirmación al cliente...');
      const clientEmailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: formData.email,
          subject: 'Confirmación de reserva - El Hueco',
          text: `
            Hola ${formData.name},
            
            Gracias por reservar una llamada con El Hueco. Te confirmamos los detalles:
            
            Fecha y hora: ${fullDateString}
            
            Nos pondremos en contacto contigo en la fecha y hora acordadas. Si necesitas cambiar la cita, por favor contáctanos en admin@el-hueco.es o llámanos al +34 622 018 042.
            
            Saludos,
            El equipo de El Hueco
          `,
          html: `
            <h2>Confirmación de reserva - El Hueco</h2>
            <p>Hola ${formData.name},</p>
            <p>Gracias por reservar una llamada con El Hueco. Te confirmamos los detalles:</p>
            <ul>
              <li><strong>Fecha y hora:</strong> ${fullDateString}</li>
            </ul>
            <p>Nos pondremos en contacto contigo en la fecha y hora acordadas. Si necesitas cambiar la cita, por favor contáctanos en <a href="mailto:admin@el-hueco.es">admin@el-hueco.es</a> o llámanos al <a href="tel:+34622018042">+34 622 018 042</a>.</p>
            <p>Saludos,<br>El equipo de El Hueco</p>
          `
        }),
      });

      if (!clientEmailResponse.ok) {
        const clientEmailError = await clientEmailResponse.json();
        console.warn('Advertencia: Error al enviar email al cliente:', clientEmailError);
        // No lanzamos error aquí ya que la reserva se guardó correctamente
      } else {
        console.log('Email al cliente enviado con éxito');
      }
      
      setSubmitStatus({ 
        success: true, 
        message: 'Reserva realizada con éxito. Si has proporcionado un correo válido, recibirás un email de confirmación en breve.' 
      });
      
      // Resetear el formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        date: '',
        time: '',
        project_type: 'Consulta general'
      });
      
    } catch (error) {
      console.error('Error al procesar la reserva:', error);
      setSubmitStatus({ 
        success: false, 
        message: `Error al procesar tu reserva: ${error.message || 'Error desconocido'}. Por favor, inténtalo de nuevo o contacta directamente.` 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const projectTypes = [
    'Fotografía', 
    'Video', 
    'Evento', 
    'Streaming', 
    'Consulta general'
  ];

  // Dividir los slots de tiempo en dos grupos para mejor visualización
  const morningSlots = timeSlots.filter(time => {
    const hour = parseInt(time.split(':')[0]);
    return hour < 13;
  });
  
  const afternoonSlots = timeSlots.filter(time => {
    const hour = parseInt(time.split(':')[0]);
    return hour >= 15;
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
      {submitStatus.message && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg mb-6 ${
            submitStatus.success ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
          }`}
        >
          {submitStatus.message}
        </motion.div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <label className="block text-sm mb-2" htmlFor="name">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-2 border-white/50 focus:border-white px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors"
            placeholder="Tu nombre"
            disabled={isSubmitting}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <label className="block text-sm mb-2" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-2 border-white/50 focus:border-white px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors"
            placeholder="tu@email.com"
            disabled={isSubmitting}
          />
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <label className="block text-sm mb-2" htmlFor="phone">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-2 border-white/50 focus:border-white px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors"
            placeholder="+34 600 000 000"
            disabled={isSubmitting}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <label className="block text-sm mb-2" htmlFor="project_type">
            Tipo de proyecto <span className="text-red-500">*</span>
          </label>
          <select
            id="project_type"
            name="project_type"
            required
            value={formData.project_type}
            onChange={handleChange}
            className="w-full bg-transparent border-2 border-white/50 focus:border-white px-4 py-3 text-white focus:outline-none transition-colors appearance-none"
            disabled={isSubmitting}
          >
            {projectTypes.map(type => (
              <option key={type} value={type} className="bg-black">
                {type}
              </option>
            ))}
          </select>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <label className="block text-sm mb-2" htmlFor="date">
            Fecha <span className="text-red-500">*</span>
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            value={formData.date}
            onChange={handleChange}
            min={format(new Date(), 'yyyy-MM-dd')}
            max={format(addDays(new Date(), 60), 'yyyy-MM-dd')}
            className="w-full bg-transparent border-2 border-white/50 focus:border-white px-4 py-3 text-white focus:outline-none transition-colors appearance-none"
            disabled={isSubmitting}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.45 }}
        >
          <label className="block text-sm mb-2" htmlFor="time">
            Hora <span className="text-red-500">*</span>
          </label>
          <select
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="w-full bg-transparent border-2 border-white/50 focus:border-white px-4 py-3 text-white focus:outline-none transition-colors appearance-none"
            disabled={isSubmitting || !formData.date}
          >
            <option value="" disabled className="bg-black">Selecciona una hora</option>
            {timeSlots.map(time => (
              <option key={time} value={time} className="bg-black">
                {time}
              </option>
            ))}
          </select>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <label className="block text-sm mb-2" htmlFor="message">
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full bg-transparent border-2 border-white/50 focus:border-white px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors"
          placeholder="Cuéntanos brevemente sobre tu proyecto..."
          disabled={isSubmitting}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="flex justify-center md:justify-end"
      >
        <button
          type="submit"
          className="w-full md:w-auto bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Procesando...' : 'Reservar llamada'}
        </button>
      </motion.div>
    </form>
  );
} 