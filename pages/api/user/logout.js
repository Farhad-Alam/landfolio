import { serialize } from "cookie";
import nc from "next-connect";
import { connectDB } from "../../../utils/db";

const handler = nc();
connectDB();

handler.get(async (req, res) => {
  try {
    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        serialize("token", null, {
          httpOnly: false,
          sameSite: "strict",
          expires: new Date(Date.now()),
          path: "/",
        })
      )
      .json({
        success: true,
        mess: "logout successfully",
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
});

export default handler;
