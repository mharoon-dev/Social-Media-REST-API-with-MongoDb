import Post from "../models/post.js";

// create a post
// post api
// /api/v1/post/
export const createPostController = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savePost = newPost.save();
    res.status(200);
    res.json({
      status: true,
      message: "your post has been created!",
      data: newPost,
    });
  } catch (error) {
    res.status(500);
    res.json({
      status: false,
      message: error.message,
    });
  }
};

// update a post
// put api
// /api/v1/post/:id
export const updatePostController = async (req, res) => {
  try {
    const { id } = req.params; // post id
    const { userId } = req.body; // logged in user id

    console.log(id);

    const post = await Post.findById(id);

    if (post.userId == userId) {
      const updatePost = await post.updateOne({ $set: req.body });
      res.status(200);
      res.json({
        status: true,
        message: "your post has been updated!",
      });
    } else {
      res.status(403);
      res.json({
        status: false,
        message: "you can update only your post!",
      });
    }
  } catch (error) {
    res.status(500);
    res.json({
      status: false,
      message: error.message,
    });
  }
};
// delete a post
// delete api
// /api/v1/post/:id
export const deletePostController = async (req, res) => {
  try {
    const { id } = req.params; // post id
    const { userId } = req.body; // logged in user id

    const post = await Post.findById(id);

    if (post.userId == userId) {
      const updatePost = await post.deleteOne();
      res.status(200);
      res.json({
        status: true,
        message: "your post has been deleted!",
      });
    } else {
      res.status(403);
      res.json({
        status: false,
        message: "you can delete only your post!",
      });
    }
  } catch (error) {
    res.status(500);
    res.json({
      status: false,
      message: error.message,
    });
  }
};
// like a post
// put api
// /api/v1/post/:id/like
// export const likePostController = async (req, res) => {
//   try {
//     const { id } = req.params;  
//     console.log(id);                  // post id
//     const { userId } = req.body.userId;          // logged in user
//     const post = await Post.findById(id);
//     console.log(post);

//     if (!post.likes.includes(userId)) {
//       await post.updateOne({ $push: { likes: userId } });
//       res.status(200);
//       res.json({
//         status: true,
//         message: "post has been liked sucessfully!",
//         data: post,
//       });
//     } else {
//       await post.updateOne({ $pull: { likes: userId } });
//       res.status(200);
//       res.json({
//         status: true,
//         message: "the post has been disliked successfully!",
//       });
//     }
//   } catch (error) {
//     res.status(500);
//     res.json({
//       status: false,
//       message: error.message,
//     });
//   }
// };
