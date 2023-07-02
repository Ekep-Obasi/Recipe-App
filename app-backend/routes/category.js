const express = require("express");
const {
  getAllCategories,
  getOneCategory,
  createCategory,
  patchCategory,
  deleteCategory,
  putCategory,
} = require("../controllers/CategoryController");
const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getOneCategory);
router.post("/", createCategory);
router.patch("/:id", patchCategory);
router.put("/:id", putCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
