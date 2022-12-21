import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  url: String,
  title: String,
  category: String,
  frontend: String,
  backend: String,
  others: String,
  images: {
    image1: {
      public_id: String,
      url: String,
    },
    image2: {
      public_id: String,
      url: String,
    },
    image3: {
      public_id: String,
      url: String,
    },
  },
});

export const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
