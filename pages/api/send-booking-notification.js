import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('API llamado: send-booking-notification');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, date, project_type, message } = req.body;
  
  console.log('Datos recibidos:', { name, email, phone, date, project_type });

  // Verificar variables de entorno
  console.log('SMTP CONFIG:', {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    user: process.env.SMTP_USER ? '**configurado**' : '**no configurado**',
    pass: process.env.SMTP_PASSWORD ? '**configurado**' : '**no configurado**',
    from: process.env.SMTP_FROM,
    adminEmail: process.env.ADMIN_EMAIL
  });

  // Configurar el transportador de email
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      },
      debug: true, // Habilitar logs de debug
      logger: true  // Habilitar logging
    });

    // Verificar la conexión SMTP
    console.log('Verificando conexión SMTP...');
    await transporter.verify();
    console.log('Conexión SMTP verificada correctamente');

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

    // 1. Email de notificación para el administrador
    const adminMailOptions = {
      from: process.env.SMTP_FROM || `"El Hueco" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || 'admin@el-hueco.es',
      subject: 'Nueva reserva en El Hueco',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h1 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Nueva Reserva en El Hueco</h1>
          
          <div style="margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Fecha y hora:</strong> ${formattedDate}</p>
            <p><strong>Tipo de proyecto:</strong> ${projectTypes[project_type] || project_type}</p>
            <p><strong>Mensaje:</strong> ${message || 'No hay mensaje'}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 20px;">
            <p style="margin: 0; color: #666;">Para gestionar esta reserva, accede al panel de administración.</p>
          </div>
        </div>
      `
    };

    // 2. Email de confirmación para el cliente
    const clientMailOptions = {
      from: process.env.SMTP_FROM || `"El Hueco" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Confirmación de tu reserva - El Hueco',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos/ELHUECO_LOGO_Emayuscula_EL-lateral.png" alt="El Hueco Logo" style="max-width: 150px; height: auto;">
          </div>
          
          <h1 style="color: #333; text-align: center; margin-bottom: 20px;">¡Gracias por tu reserva!</h1>
          
          <p style="margin-bottom: 20px; color: #555; line-height: 1.5;">Hola ${name},</p>
          
          <p style="margin-bottom: 20px; color: #555; line-height: 1.5;">Hemos recibido tu solicitud de reserva para una llamada en El Hueco. A continuación te detallamos la información:</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Fecha y hora:</strong> ${formattedDate}</p>
            <p style="margin: 0 0 10px 0;"><strong>Tipo de proyecto:</strong> ${projectTypes[project_type] || project_type}</p>
            ${message ? `<p style="margin: 0;"><strong>Tu mensaje:</strong> ${message}</p>` : ''}
          </div>
          
          <p style="margin-bottom: 20px; color: #555; line-height: 1.5;">Nuestro equipo revisará tu solicitud y te contactará en breve para confirmar la cita. Si necesitas realizar alguna modificación o tienes alguna pregunta, por favor responde a este correo o llámanos al +34 622 018 042.</p>
          
          <p style="margin-bottom: 30px; color: #555; line-height: 1.5;">¡Estamos deseando hablar contigo sobre tu proyecto!</p>
          
          <p style="margin-bottom: 10px; color: #555;">Saludos,</p>
          <p style="margin: 0; color: #555; font-weight: bold;">El equipo de El Hueco</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #999; text-align: center;">
            <p style="margin: 0 0 5px 0;">El Hueco Studio</p>
            <p style="margin: 0 0 5px 0;">Av. de Daroca, 34, 28017 Madrid</p>
            <p style="margin: 0;"><a href="https://www.el-hueco.es" style="color: #999; text-decoration: underline;">www.el-hueco.es</a></p>
          </div>
        </div>
      `
    };

    console.log('Enviando email al administrador...');
    try {
      const adminInfo = await transporter.sendMail(adminMailOptions);
      console.log('Email de notificación enviado al administrador:', adminInfo.messageId);
      console.log('Detalles:', adminInfo);
    } catch (adminEmailError) {
      console.error('Error al enviar email al administrador:', adminEmailError);
      throw adminEmailError;
    }
    
    console.log('Enviando email al cliente...');
    try {
      const clientInfo = await transporter.sendMail(clientMailOptions);
      console.log('Email de confirmación enviado al cliente:', clientInfo.messageId);
      console.log('Detalles:', clientInfo);
    } catch (clientEmailError) {
      console.error('Error al enviar email al cliente:', clientEmailError);
      throw clientEmailError;
    }
    
    res.status(200).json({ 
      success: true, 
      message: 'Emails enviados correctamente'
    });
  } catch (error) {
    console.error('Error completo:', error);
    
    if (error.code === 'EAUTH') {
      console.error('Error de autenticación SMTP. Verifica usuario y contraseña.');
    } else if (error.code === 'ESOCKET') {
      console.error('Error de conexión SMTP. Verifica host y puerto.');
    }
    
    res.status(500).json({ 
      error: error.message || 'Error desconocido al enviar emails',
      code: error.code,
      command: error.command
    });
  }
} 