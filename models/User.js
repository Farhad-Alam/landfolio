import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  projects: [
    {
      url: String,
      title: String,
      description: String,
      category: String,
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
    },
  ],
});

UserSchema.methods.comparePassword = async function (password) {
  return this.password === password;
};

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
