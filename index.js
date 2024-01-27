import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { userRouter } from "./routes/users.js";

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));



app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
