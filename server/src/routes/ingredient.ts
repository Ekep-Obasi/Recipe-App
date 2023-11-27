import express, { Router } from "express";
import AuthMiddleware from "../api/middleware/auth-middleware";
import ApiMiddleware from "../api/middleware/api-middleware";
import IngredientController from "../api/controllers/ingredient-controller";

const router: Router = express.Router();

const ingredientController = new IngredientController()

router.use(AuthMiddleware)
router.use(ApiMiddleware);
router.get("/", ingredientController.getAllIngredients.bind(ingredientController))
router.get("/:id", ingredientController.getSelectedIngredients.bind(ingredientController))
router.post("/", ingredientController.createIngredient.bind(ingredientController))
router.post("/bulk", ingredientController.bulkCreateIngredients.bind(ingredientController))
router.patch("/:id", ingredientController.updateIngredients.bind(ingredientController))
router.delete("/:id", ingredientController.deleteIngredients.bind(ingredientController))

export { router as ingredientRouter };
