import nc from "next-connect";
import { sendEmail } from "../../../utils/sendEmail";

const handler = nc();

handler.post(async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        mess: "Please fill all the fields",
      });
    }

    const clientMess = `Hey, I am ${name}. My Email is ${email} and I would like to contact you. Here is my message: ${message}`;

    await sendEmail({
      email,
      subject: `Contact Request from Portfolio Website`,
      clientMess,
    });

    res.status(200).json({
      success: true,
      mess: `Message sent successfully`,
      message,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      mess: error.message,
    });
  }
});

export default handler;
