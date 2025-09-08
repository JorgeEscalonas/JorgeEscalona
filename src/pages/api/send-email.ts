// src/pages/api/send-email.ts
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// Ensure this route is not pre-rendered
export const prerender = false;

// Get environment variables
const EMAIL_USER = import.meta.env.EMAIL_USER;
const EMAIL_PASS = import.meta.env.EMAIL_PASS;

// Debug: Log environment variables (don't log the actual password in production)
console.log('Email user:', EMAIL_USER ? 'Set' : 'Not set');

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error('Error: Email credentials not configured');
  console.log('Make sure EMAIL_USER and EMAIL_PASS are set in your .env file');
}

// Configure email transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false // ⬅️ Agrega esta línea
  }
});

// Set CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Handle POST requests
export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse JSON data
    const data = await request.json();
    const name = data.name?.toString() || '';
    const email = data.email?.toString() || '';
    const phone = data.phone?.toString() || '';
    const message = data.message?.toString() || '';

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Por favor, completa todos los campos requeridos' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      );
    }

    // Email configuration
    const mailOptions = {
      from: `"${name}" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return new Response(
      JSON.stringify({ success: true, message: '¡Mensaje enviado con éxito!' }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
};

// Handle OPTIONS method for CORS preflight
export const OPTIONS: APIRoute = () => {
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  });
};
