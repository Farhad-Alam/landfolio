import nc from "next-connect";
import { ApiFeature } from "../../../middleware/apiFeature";
import { isAuthenticated } from "../../../middleware/auth";
import { Project } from "../../../models/Project";
import { connectDB } from "../../../utils/db";

const handler = nc();
connectDB();

handler.get(async (req, res) => {
  try {
    const resultPerPage = 4;
    const productsCount = await Project.find({}).countDocuments();

    const apifeature = new ApiFeature(Project.find(), req.query)
      .filter()
      .pagination(resultPerPage);
    const project = await apifeature.query;

    res.status(200).json({
      success: true,
      project,
      productsCount,
      resultPerPage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
});

export default handler;
