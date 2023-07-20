const express = require("express");
const {
  getAllNutritionalContents,
  getOneNutritionalContent,
  createNutritionalContent,
  patchNutritionalContent,
  deleteNutritionalContent,
  putNutritionalContent,
} = require("../controllers/NutritionalContnentController");
const router = express.Router();

router.get("/", getAllNutritionalContents);
router.get("/:id", getOneNutritionalContent);
router.post("/", createNutritionalContent);
router.patch("/:id", patchNutritionalContent);
router.put("/:id", putNutritionalContent);
router.delete("/:id", deleteNutritionalContent);

module.exports = router;
