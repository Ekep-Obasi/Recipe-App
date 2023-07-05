const express = require("express");
const {
  getAllUsers,
  getOneUser,
  createUser,
  patchUser,
  deleteUser,
  putUser,
} = require("../controllers/UserController");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.patch("/:id", patchUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

module.exports = router;
