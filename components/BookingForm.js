import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import { format, addDays, setHours, setMinutes, addMinutes, isBefore, isAfter } from 'date-fns';
import { es } from 'date-fns/locale';

// Horarios disponibles: 12:00 a 14:00 en intervalos de 15 minutos
const generateTimeSlots = (date) => {
  const slots = [];
  const startTime = setHours(setMinutes(date, 0), 12); // 12:00
  const endTime = setHours(setMinutes(date, 0), 14); // 14:00

  let currentSlot = startTime;
  while (isBefore(currentSlot, endTime)) {
    slots.push({
      time: currentSlot,
      label: format(currentSlot, 'HH:mm', { locale: es }),
      value: format(currentSlot, "yyyy-MM-dd'T'HH:mm:ss"),
    });
    currentSlot = addMinutes(currentSlot, 15);
  }

  return slots;
};

export default function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Generar fechas disponibles (próximos 14 días)
  const availableDates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i + 1));

  // Cargar slots reservados cuando cambia la fecha
  useEffect(() => {
    const fetchBookedSlots = async () => {
      const startOfDay = new Date(selectedDate);
      startOfDay.setHours(0, 0, 0, 0);
      
      const endOfDay = new Date(selectedDate);
      endOfDay.setHours(23, 59, 59, 999);

      const { data, error } = await supabase
        .from('bookings')
        .select('date')
        .gte('date', startOfDay.toISOString())
        .lte('date', endOfDay.toISOString())
        .eq('status', 'confirmed');

      if (error) {
        console.error('Error fetching booked slots:', error);
        return;
      }

      setBookedSlots(data.map(booking => booking.date));
    };

    if (selectedDate) {
      fetchBookedSlots();
      setAvailableSlots(generateTimeSlots(selectedDate));
    }
  }, [selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedTime) {
      setError('Por favor, selecciona un horario disponible');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          {
            name,
            email,
            phone,
            project_type: projectType,
            message,
            date: selectedTime,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      setSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setProjectType('');
      setMessage('');
      setSelectedTime(null);
    } catch (error) {
      console.error('Error creating booking:', error);
      setError('Ha ocurrido un error al crear la reserva. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const isSlotBooked = (slot) => {
    return bookedSlots.some(bookedSlot => 
      format(new Date(bookedSlot), "yyyy-MM-dd'T'HH:mm") === format(new Date(slot.value), "yyyy-MM-dd'T'HH:mm")
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
      <h2 className="text-3xl font-bold mb-6 font-orbitron tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-300 to-white">
        Agenda una llamada
      </h2>
      <p className="text-gray-400 mb-8">
        Reserva una llamada de 15 minutos con nuestro equipo para discutir tu proyecto.
      </p>

      {success ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center"
        >
          <h3 className="text-xl font-bold mb-2 font-orbitron text-green-400">¡Reserva confirmada!</h3>
          <p className="text-gray-300 mb-4">
            Hemos recibido tu solicitud de reserva. Te enviaremos un correo electrónico con los detalles de la llamada desde <span className="text-blue-400">admin@el-hueco.es</span>.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-colors font-orbitron tracking-wide"
          >
            Hacer otra reserva
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Selección de fecha */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 font-orbitron tracking-wide">Selecciona una fecha</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2">
              {availableDates.map((date, index) => (
                <motion.button
                  key={index}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg border ${
                    selectedDate && date.toDateString() === selectedDate.toDateString()
                      ? 'bg-blue-500/20 border-blue-500/50 text-blue-300'
                      : 'bg-black/30 border-white/10 text-gray-300 hover:bg-black/50'
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  <p className="text-xs uppercase">{format(date, 'EEE', { locale: es })}</p>
                  <p className="text-lg font-bold">{format(date, 'd', { locale: es })}</p>
                  <p className="text-xs">{format(date, 'MMM', { locale: es })}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Selección de hora */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 font-orbitron tracking-wide">Selecciona una hora</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {availableSlots.map((slot, index) => {
                const isBooked = isSlotBooked(slot);
                return (
                  <motion.button
                    key={index}
                    type="button"
                    whileHover={!isBooked ? { scale: 1.05 } : {}}
                    whileTap={!isBooked ? { scale: 0.95 } : {}}
                    className={`p-3 rounded-lg border ${
                      isBooked
                        ? 'bg-gray-800/50 border-gray-700/50 text-gray-500 cursor-not-allowed'
                        : selectedTime === slot.value
                        ? 'bg-blue-500/20 border-blue-500/50 text-blue-300'
                        : 'bg-black/30 border-white/10 text-gray-300 hover:bg-black/50'
                    }`}
                    onClick={() => !isBooked && setSelectedTime(slot.value)}
                    disabled={isBooked}
                  >
                    <p className="text-lg font-bold">{slot.label}</p>
                    <p className="text-xs">{isBooked ? 'No disponible' : 'Disponible'}</p>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Información personal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder="+34 600 000 000"
              />
            </div>
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-1">
                Tipo de proyecto
              </label>
              <select
                id="projectType"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <option value="">Selecciona una opción</option>
                <option value="Fotografía">Fotografía</option>
                <option value="Video">Video</option>
                <option value="Streaming">Streaming</option>
                <option value="Evento">Evento</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Mensaje (opcional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              placeholder="Cuéntanos brevemente sobre tu proyecto..."
            ></textarea>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-400">
              {error}
            </div>
          )}

          <div className="text-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-orbitron tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando...
                </span>
              ) : (
                'Confirmar reserva'
              )}
            </motion.button>
          </div>
        </form>
      )}
    </div>
  );
} 