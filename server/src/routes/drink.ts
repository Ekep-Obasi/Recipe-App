import express, { Router } from "express";
import DrinkController from "../api/controllers/drink-contoller";
import AuthMiddleware from "../api/middleware/auth-middleware";
import ApiMiddleware from "../api/middleware/api-middleware";
import ImageUploadMiddleware from "../api/middleware/image-middleware";

const router: Router = express.Router();

const drinkCategory = new DrinkController();

router.get("/", drinkCategory.getAllDrinks.bind(drinkCategory));
router.get("/:id", drinkCategory.getSelectedDrink.bind(drinkCategory));

router.use(AuthMiddleware);
router.use(ApiMiddleware);
router.post("/like/:id", drinkCategory.likeDrink.bind(drinkCategory));
router.use(ImageUploadMiddleware);
router.post("/", drinkCategory.createDrink.bind(drinkCategory));
router.patch("/:id", drinkCategory.updateDrink.bind(drinkCategory));
router.put("/:id", drinkCategory.resetDrink.bind(drinkCategory));
router.delete("/:id", drinkCategory.deleteDrink.bind(drinkCategory));

export { router as drinkRouter };
