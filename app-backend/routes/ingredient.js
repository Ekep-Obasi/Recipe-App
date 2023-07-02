const express = require("express");
const {
  getAllIngredients,
  getOneIngredient,
  createIngredient,
  patchIngredient,
  putIngredient,
  deleteIngredient,
} = require("../controllers/IngredientController");

const router = express.Router();

router.get("/", getAllIngredients);
router.get("/:id", getOneIngredient);
router.post("/", createIngredient);
router.patch("/:id", patchIngredient);
router.put("/:id", putIngredient);
router.delete("/:id", deleteIngredient);

module.exports = router;
