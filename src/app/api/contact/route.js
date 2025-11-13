import nodemailer from "nodemailer";
async function verifyCaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });
  return await res.json();
}
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message,captchaToken } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }
if(!captchaToken){
  return new Response(
    JSON.stringify({ error: "Captcha token is missing" }),
    { status: 400 }
  )
  }
    const captchaResult = await verifyCaptcha(captchaToken);
    if (!captchaResult.success) {
      return new Response(
        JSON.stringify({ error: "Captcha verification failed" }),
        { status: 400 }
      );
    }
    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,       // e.g., smtp.gmail.com
      port: process.env.SMTP_PORT || 465,
      secure: true, // true for port 465, false for others
      auth: {
        user: process.env.SMTP_USER,     // your email
        pass: process.env.SMTP_PASS,     // your email password or app password
      },
    });

    // Email content
    const mailOptions = {
      from: `"Temple Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Receiver email (temple email)
      subject: "New Contact Form Submission",
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: error.message }),
      { status: 500 }
    );
  }
}
