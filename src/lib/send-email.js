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
    await transporter.verify();
  } catch (error) {
    console.error("Ошибка верификации transporter:", error);
    throw new Error("Верификация transporter провалена");
  }

  try {
    const info = await transporter.sendMail({
      from: email,
      to: process.env.SITE_MAIL_RECIEVER,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
      html: html || "", // Default to empty string if no HTML provided
    });
    console.log("Message Sent", info.messageId);
    console.log("Mail sent to", sendTo || SITE_MAIL_RECIEVER);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }

  //   const info = transporter.sendMail({
  //     from: email || phone,
  //     to: process.env.SITE_MAIL_RECIEVER,
  //     email: email,
  //     phone: phone,
  //     subject: subject,
  //     message: message,
  //     html: message.html,
  //   });
  //   console.log("Message Sent ===>>", info.messageId);
  //   console.log("Mail sent to ===>>", process.env.SITE_MAIL_RECIEVER);
  //   return info;
}
