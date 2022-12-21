import nc from "next-connect";
import { User } from "../../../models/User";
import { connectDB } from "../../../utils/db";

const handler = nc();
connectDB();

handler.get(async (req, res) => {
  try {
    const user = await User.findOne().select("-email");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
});

export default handler;


