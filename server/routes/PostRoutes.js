const Router = require("express");
const PostController = require("../controllers/PostController");
const router = new Router();

router.post("/create", PostController.createPost);

router.get("/", PostController.getAllPosts);

module.exports = router;
