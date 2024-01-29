import express from "express";
import { createPostController, deletePostController, getPostController, getPostsByTimeController, likePostController, updatePostController } from "../controllers/postsControllers.js";
const postRouter = express.Router();

// create a post 
postRouter.post("/" , createPostController)
// update a post
postRouter.put("/:id" , updatePostController)
// delete a post
postRouter.delete("/:id" , deletePostController)
// like a posts
postRouter.put("/:id/like" , likePostController)
// get a post
postRouter.get("/:id" , getPostController)
// get timeline posts
postRouter.get("/timeline/all" , getPostsByTimeController)

export default postRouter;