import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, phone, subject, message } = await req.json();
  try {
    // CREATE A TRANSPORTER USING Beget SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SEND_EMAIL,
        pass: process.env.SEND_EMAIL_PASSWORD,
      },
    });

    // EMAIL CONTENT
    const mailOptions = {
      from: process.env.SEND_EMAIL,
      to: process.env.SITE_MAIL_RECIEVER,
      subject: subject,
      text: message,
      html: `
        <div>
          <p><strong>From Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    // SEND EMAIL
    const info = await transporter.sendMail(mailOptions);
    return Response.json({ success: true, info });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}



