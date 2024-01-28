import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("here is the all users.");
});

export default userRouter;
