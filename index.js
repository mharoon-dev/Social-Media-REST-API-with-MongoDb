import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRoute from "./routes/users.js";
import authRouter from "./routes/auth.js";
import { dbConnection } from "./utils/config.js";
import postRouter from "./routes/posts.js";

const app = express();
dotenv.config();

dbConnection();

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// auth api 
app.use('/api/v1/auth', authRouter)
// user api 
app.use('/api/v1/users', userRoute)
// post api 
app.use('/api/v1/post', postRouter)


// server checking
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
