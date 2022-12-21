import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((con) => {
      console.log(`Database Connected ${con.connection.host}`);
    })
    .catch((err) => console.log(err));
};

// https://www.canva.com/design/DAE-1JrWMzI/VAECKNMa60Y2rChw25NlXw/edit?utm_content=DAE-1JrWMzI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton