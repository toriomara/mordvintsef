import nodemailer from 'nodemailer';

export async function POST(req, res) {
  const { email, phone, subject, message } = req.body;

  if (!email || !phone || !subject || !message) {
    return res.status(400).json({ message: 'Все поля обязательны для заполнения' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.beget.com', 
    port: 465,
    secure: true, 
    auth: {
      user: process.env.BEGET_EMAIL, 
      pass: process.env.BEGET_PASSWORD, 
    },
  });

  try {
    await transporter.sendMail({
      from: `"Сайт mordvintsef.ru" <${process.env.BEGET_EMAIL}>`, 
      to: process.env.BEGET_EMAIL, 
      subject: `Сообщение с сайта: ${subject}`,
      text: `Контакт: ${email}\n\nСообщение:\n${message}`,
    });
    res.status(200).json({ message: 'Письмо успешно отправлено!' });
  } catch (error) {
    console.error('Ошибка при отправке:', error);
    res.status(500).json({ message: 'Ошибка при отправке письма', error: error.message });
  }
}
