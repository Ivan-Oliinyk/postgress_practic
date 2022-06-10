const router = require("express").Router();
const {
  createUser,
  getAllUsers,
  getOneUserById,
  updateUserById,
  removeUserById,
} = require("../controllers/user.controller");

router.get("/", getAllUsers);
router.get("/:userId", getOneUserById);
router.post("/", createUser);
router.put("/:userId", updateUserById);
router.delete("/", removeUserById);

module.exports = router;
