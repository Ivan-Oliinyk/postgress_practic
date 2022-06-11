const router = require("express").Router();
const {
  getAllPosts,
  getOnePostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");

router.get("/", getAllPosts);
router.get("/:post_id", getOnePostById);
router.post("/", createPost);
router.put("/:post_id", updatePost);
router.delete("/", deletePost);

module.exports = router;
