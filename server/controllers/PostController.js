const Post = require("../models/Post");

class PostController {
  async createPost(req, res) {
    try {
      const postBody = req.body;

      const newPost = new Post({
        ...postBody,
        createAt: new Date().toISOString(),
      });

      await newPost.save();
      res.status(200).json({
        message: "Post Created",
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updatePost(req, res) {
    try {
      const { id, name, profession, avatar } = req.body;
      const updatePost = await Post.findByIdAndUpdate(
        id,
        {
          name,
          profession,
          avatar,
        },
        { new: true }
      );
      res.status(200).json({
        updatePost,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getAllPosts(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts.reverse());
    } catch (error) {
      console.log(error);
    }
  }

  async getPostBySearch(req, res) {
    try {
      const { search } = req.params;
      const posts = await Post.find();

      let newPost = posts.filter(
        (post) =>
          post.name.toLowerCase().indexOf(search) !== -1 &&
          post.name.toLowerCase().indexOf(search) === 0
      );

      res.status(200).json(newPost);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PostController();
