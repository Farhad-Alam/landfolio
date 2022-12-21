import nc from "next-connect";
import { isAuthenticated } from "../../../middleware/auth";
import { connectDB } from "../../../utils/db";
import cloudinary from "cloudinary";
import { cloud } from "../../../utils/cloud";
import { Project } from "../../../models/Project";

const handler = nc();
connectDB();

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
  },
};

handler.put(isAuthenticated, async (req, res) => {
  try {
    const { url, title, images, category, frontend, backend, others } =
      req.body;

    if (images) {
      if (images.image1) {
        var myCloud1 = await cloudinary.v2.uploader.upload(images.image1, {
          folder: "landfolio/images",
        });
      }
      if (images.image2) {
        var myCloud2 = await cloudinary.v2.uploader.upload(images.image2, {
          folder: "landfolio/images",
        });
      }
      if (images.image3) {
        var myCloud3 = await cloudinary.v2.uploader.upload(images.image3, {
          folder: "landfolio/images",
        });
      }
    }
    const project = await Project.create({
      url,
      title,
      category,
      frontend,
      backend,
      others,
      images: {
        image1: {
          public_id: myCloud1.public_id,
          url: myCloud1.secure_url,
        },
        image2: {
          public_id: myCloud2.public_id,
          url: myCloud2.secure_url,
        },
        image3: {
          public_id: myCloud3.public_id,
          url: myCloud3.secure_url,
        },
      },
    });

    console.log(project);

    res.status(200).json({
      success: true,
      mess: "Project added successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
});

export default handler;
