const express = require("express");
const {
  getAllGlasses,
  getOneGlass,
  createGlass,
  patchGlass,
  putGlass,
  deleteGlass,
} = require("../controllers/GlassController");

const router = express.Router();

router.get("/", getAllGlasses);
router.get("/:id", getOneGlass);
router.post("/", createGlass);
router.patch("/:id", patchGlass);
router.put("/:id", putGlass);
router.delete("/:id", deleteGlass);

module.exports = router;
