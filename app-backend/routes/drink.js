const express = require("express");
const {
  getAllDrinks,
  getOneDrink,
  createDrink,
  patchDrink,
  putDrink,
  deleteDrink,
} = require("../controllers/DrinkController");

const router = express.Router();

router.get("/", getAllDrinks);
router.get("/:id", getOneDrink);
router.post("/", createDrink);
router.patch("/:id", patchDrink);
router.put("/:id", putDrink);
router.delete("/:id", deleteDrink);

module.exports = router;
