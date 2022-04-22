import nodemailer from "nodemailer";

export const sendEmail = async ({ email, subject, clientMess }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "234abe16e1d728",
      pass: "83070f56d3612e",
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
