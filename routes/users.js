import express from "express";
import { deleteUserController, followUserController, getUserController, getUsersController, unFollowUserController, updateUserController } from "../controllers/usersControllers.js";
const userRouter = express.Router();

// update user
userRouter.put("/:id", updateUserController);
// delete user
userRouter.delete("/:id", deleteUserController);
// get a user
userRouter.get("/:id", getUserController);
// get all users
userRouter.get("/", getUsersController);
// follow a user
userRouter.put("/:id/follow", followUserController);
// unfollow a user
userRouter.put("/:id/unfollow", unFollowUserController);

export default userRouter;
