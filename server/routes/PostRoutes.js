const Router = require("express");
const PostController = require("../controllers/PostController");
const router = new Router();

router.post("/create", PostController.createPost);
router.patch("/update", PostController.updatePost);

router.get("/", PostController.getAllPosts);

module.exports = router;
