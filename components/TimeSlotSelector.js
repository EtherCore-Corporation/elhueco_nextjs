import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../utils/supabaseClient';

const generateTimeSlots = () => {
  const slots = [];
  // Morning slots (9:00-13:00)
  for (let hour = 9; hour < 13; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      slots.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
    }
  }
  // Afternoon slots (15:00-19:00)
  for (let hour = 15; hour < 19; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      slots.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
    }
  }
  return slots;
};

export default function TimeSlotSelector({ selectedDate, onSelectSlot, selectedSlot }) {
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const timeSlots = generateTimeSlots();

  useEffect(() => {
    const fetchBookings = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('bookings')
        .select('date')
        .eq('status', 'confirmed')
        .like('date', `${selectedDate}%`);

      if (!error && data) {
        const booked = data.map(booking => {
          const date = new Date(booking.date);
          return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        });
        setBookedSlots(booked);
      }
      setIsLoading(false);
    };

    if (selectedDate) {
      fetchBookings();
    }
  }, [selectedDate]);

  const isSlotBooked = (slot) => bookedSlots.includes(slot);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">Horario disponible</div>
        <div className="text-lg md:text-2xl font-helvetica font-bold">
          {selectedDate ? new Date(selectedDate).toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }) : 'Selecciona una fecha'}
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto"></div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {timeSlots.map((slot) => (
            <motion.button
              key={slot}
              onClick={() => !isSlotBooked(slot) && onSelectSlot(slot)}
              className={`p-2 md:p-3 text-center relative overflow-hidden rounded-sm text-xs md:text-sm transition-all ${
                isSlotBooked(slot)
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : selectedSlot === slot
                  ? 'bg-black text-white'
                  : 'border border-black text-black hover:bg-black/5'
              }`}
              whileHover={!isSlotBooked(slot) ? { scale: 1.05 } : {}}
              transition={{ duration: 0.2 }}
            >
              {slot}
              {selectedSlot === slot && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
              )}
              <span className="relative z-10">{slot}</span>
            </motion.button>
          ))}
        </div>
      )}

      <div className="mt-6 pt-6 border-t-2 border-black/10 flex justify-between items-center text-xs md:text-sm text-gray-600">
        <span>Duración de la llamada: 15 minutos</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
            <span>Ocupado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border border-black rounded-full"></div>
            <span>Disponible</span>
          </div>
        </div>
      </div>
    </div>
  );
} 