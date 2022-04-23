import nodemailer from "nodemailer";

export const sendEmail = async ({ email, subject, clientMess }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject,
    text: clientMess,
  };

  await transporter.sendMail(mailOptions);
};
