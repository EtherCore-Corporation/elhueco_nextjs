export default async function handler(req, res) {
  console.log('API llamado: simple-email');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, date, project_type, message } = req.body;
  console.log('Datos recibidos para enviar email:', { 
    name, 
    email, 
    phone, 
    date, 
    project_type,
    messageLength: message ? message.length : 0 
  });

  // Formatear la fecha
  const bookingDate = new Date(date);
  const formattedDate = bookingDate.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Mapear los tipos de proyecto a nombres más descriptivos
  const projectTypes = {
    photo: 'Fotografía',
    video: 'Vídeo',
    event: 'Evento',
    other: 'Otro'
  };

  try {
    // Configuración de EmailJS
    const EMAILJS_SERVICE_ID = 'service_z4wm9bz'; 
    const EMAILJS_ADMIN_TEMPLATE_ID = 'template_tfhymxp'; 
    const EMAILJS_USER_ID = 'wtR3B3a43ggP47Tvr'; 

    // Parámetros para la plantilla del administrador
    const adminTemplateParams = {
      from_name: name,
      reply_to: email,
      user_phone: phone,
      booking_date: formattedDate,
      project_type: projectTypes[project_type] || project_type,
      message: message || '(Sin mensaje)',
    };

    console.log('Enviando email al administrador:', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_ADMIN_TEMPLATE_ID,
      userId: EMAILJS_USER_ID ? 'configurado' : 'no configurado',
      params: adminTemplateParams
    });

    // Hacer la solicitud directamente a EmailJS
    try {
      const adminResponse = await fetch(
        `https://api.emailjs.com/api/v1.0/email/send`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_ADMIN_TEMPLATE_ID,
            user_id: EMAILJS_USER_ID,
            template_params: adminTemplateParams,
          }),
        }
      );

      const adminResponseText = await adminResponse.text();
      console.log('Respuesta del email al administrador:', {
        status: adminResponse.status,
        text: adminResponseText
      });

      // Por ahora, solo enviamos el email al administrador
      // Si funciona, podemos agregar el email al cliente después
      
      res.status(200).json({ 
        success: true, 
        message: 'Email enviado correctamente' 
      });
    } catch (fetchError) {
      console.error('Error al hacer fetch a EmailJS:', fetchError);
      throw fetchError;
    }
  } catch (error) {
    console.error('Error al enviar email:', error);
    
    res.status(500).json({ 
      error: 'Error al enviar email. Por favor, inténtalo de nuevo más tarde.',
      details: error.message
    });
  }
} 