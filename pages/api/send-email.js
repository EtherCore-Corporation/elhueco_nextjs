import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { to, subject, text, html } = req.body;

  if (!to || !subject || (!text && !html)) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Validar configuración SMTP
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpSecure = process.env.SMTP_SECURE === 'true';
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpHost || !smtpUser || !smtpPassword) {
    console.error('Error: Falta configuración SMTP en variables de entorno', {
      host: smtpHost ? 'OK' : 'MISSING',
      user: smtpUser ? 'OK' : 'MISSING',
      password: smtpPassword ? 'OK' : 'MISSING',
    });
    
    // No devolvemos el error al cliente para no exponer la configuración,
    // pero registramos el error en el servidor para poder diagnosticarlo
    return res.status(500).json({ 
      message: 'Error al enviar correo: problemas con la configuración', 
      configError: true
    });
  }

  try {
    console.log('Configurando transporter con Ionos SMTP...', {
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      user: smtpUser,
      // No loguear la contraseña
    });

    // Configurar el transporter de Nodemailer para Ionos
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      debug: true, // Habilita logs de depuración de SMTP
      logger: true // Activar logger
    });

    // Verificar la configuración
    try {
      await transporter.verify();
      console.log('Verificación de transporter exitosa');
    } catch (verifyError) {
      console.error('Error verificando el transporter SMTP:', verifyError);
      throw new Error(`Error de conexión SMTP: ${verifyError.message}`);
    }

    // Configurar opciones del correo
    const mailOptions = {
      from: process.env.SMTP_FROM || '"El Hueco" <admin@el-hueco.es>',
      to,
      subject,
      text,
      html,
    };

    console.log(`Enviando correo a: ${to}`);
    
    // Enviar correo
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Correo enviado:', info.response);
      
      // Responder con éxito
      return res.status(200).json({ success: true, messageId: info.messageId });
    } catch (sendError) {
      console.error('Error enviando correo:', sendError);
      throw new Error(`Error enviando correo: ${sendError.message}`);
    }
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return res.status(500).json({ 
      message: 'Error al enviar correo', 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
} 