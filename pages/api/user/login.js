import nc from "next-connect";
import { User } from "../../../models/User";
import { connectDB } from "../../../utils/db";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

const handler = nc();
connectDB();

handler.post(async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User not found",
      });
    }

    const isMatch = user.password === password;

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        msg: "Invalid Email or Password",
      });
    } else {
      const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      res
        .status(200)
        .setHeader(
          "Set-Cookie",
          serialize("token", token, {
            httpOnly: false,
            sameSite: "strict",
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            path: "/",
          })
        )
        .json({
          success: true,
          msg: "Login Successfully",
          token,
        });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
});

export default handler;
