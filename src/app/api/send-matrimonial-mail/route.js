import nodemailer from "nodemailer";
async function verifyCaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });
  return await response.json();
}
export async function POST(req) {
  try {
    const formData = await req.json();
const { captchaToken } = formData;
    const captchaResult = await verifyCaptcha(captchaToken);


if (!captchaResult.success) {
  return new Response(JSON.stringify({ message: "Captcha failed" }), { status: 400 });
}
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

   const htmlContent = `
      <h2>TEMPLE MATRIMONIAL SERVICE APPLICATION</h2>
      
      <h3>Registration Type: ${formData.lookingFor.toUpperCase()}</h3>
      
      <h3>Personal Details</h3>
      <ul>
        <li><strong>Name:</strong> ${formData.name}</li>
        <li><strong>Age:</strong> ${formData.age}</li>
        <li><strong>Gender:</strong> ${formData.gender}</li>
        <li><strong>Date of Birth:</strong> ${formData.dateOfBirth}</li>
        <li><strong>Height:</strong> ${formData.height} cm</li>
        <li><strong>Weight:</strong> ${formData.weight} kg</li>
        <li><strong>Complexion:</strong> ${formData.complexion}</li>
      </ul>
      
      <h3>Contact Details</h3>
      <ul>
        <li><strong>Address:</strong> ${formData.address}</li>
        <li><strong>City:</strong> ${formData.city}</li>
        <li><strong>State:</strong> ${formData.state}</li>
        <li><strong>Pincode:</strong> ${formData.pincode}</li>
        <li><strong>Phone:</strong> ${formData.phone}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
      </ul>
      
      <h3>Professional Details</h3>
      <ul>
        <li><strong>Profession:</strong> ${formData.profession}</li>
        <li><strong>Annual Salary:</strong> ₹${formData.salary}</li>
        <li><strong>Education:</strong> ${formData.education}</li>
      </ul>
      
      <h3>Religious Details</h3>
      <ul>
        <li><strong>Religion:</strong> ${formData.religion}</li>
        <li><strong>Caste:</strong> ${formData.caste}</li>
        <li><strong>Sub-Caste:</strong> ${formData.subcaste || 'N/A'}</li>
        <li><strong>Star:</strong> ${formData.star}</li>
        <li><strong>Rasi:</strong> ${formData.rasi}</li>
      </ul>
      
      <h3>Family Details</h3>
      <ul>
        <li><strong>Father:</strong> ${formData.fatherName} (${formData.fatherProfession})</li>
        <li><strong>Mother:</strong> ${formData.motherName} (${formData.motherProfession})</li>
        <li><strong>Brothers:</strong> ${formData.brothersCount} (Married: ${formData.brothersMarried})</li>
        <li><strong>Sisters:</strong> ${formData.sistersCount} (Married: ${formData.sistersMarried})</li>
      </ul>
      
      <h3>Partner Expectations</h3>
      <p>${formData.expectations || 'Not specified'}</p>
      
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    `;
    const attachments = [];
    if (formData.files?.photo) {
      attachments.push({
        filename: formData.files.photo.name,
        content: formData.files.photo.data.split("base64,")[1],
        encoding: "base64",
      });
    }
    if (formData.files?.biodata) {
      attachments.push({
        filename: formData.files.biodata.name,
        content: formData.files.biodata.data.split("base64,")[1],
        encoding: "base64",
      });
    }
    if (formData.files?.jathagam) {
      attachments.push({
        filename: formData.files.jathagam.name,
        content: formData.files.jathagam.data.split("base64,")[1],
        encoding: "base64",
      });
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // temple email
      subject: `Matrimonial Application - ${formData.name}`,
      html: htmlContent,
      attachments,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email", error: error.message }),
      { status: 500 }
    );
  }
}
