import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const EMAIL_USER = "escalonajorge73@gmail.com";
const EMAIL_PASS = "pvxm bitj ejzf upzn";
console.log("Email user:", "Set" );
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
    // ⬅️ Agrega esta línea
  }
});
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};
const POST = async ({
  request
}) => {
  try {
    const data = await request.json();
    const name = data.name?.toString() || "";
    const email = data.email?.toString() || "";
    const phone = data.phone?.toString() || "";
    const message = data.message?.toString() || "";
    if (!name || !email || !message) {
      return new Response(JSON.stringify({
        error: "Por favor, completa todos los campos requeridos"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders
        }
      });
    }
    const mailOptions = {
      from: `"${name}" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    };
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({
      success: true,
      message: "¡Mensaje enviado con éxito!"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({
      error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
      details: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders
      }
    });
  }
};
const OPTIONS = () => {
  return new Response(null, {
    status: 200,
    headers: corsHeaders
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  OPTIONS,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
