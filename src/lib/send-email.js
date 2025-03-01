"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SEND_EMAIL,
    pass: process.env.SEND_EMAIL_PASSWORD,
  },
});

export async function sendMail({ email, phone, subject, message }) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error(
      "Что-то пошло не так",
      process.env.SEND_EMAIL,
      process.env.SEND_EMAIL_PASSWORD,
      error
    );
    return;
  }

  const info = transporter.sendMail({
    from: email || phone,
    to: process.env.SITE_MAIL_RECIEVER,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
    html: message.html,
  });
  console.log("Message Sent ===>>", info.messageId);
  console.log("Mail sent to ===>>", process.env.SITE_MAIL_RECIEVER);
  return info;
}
