import express, { Router } from "express";
import CategoryController from "../api/controllers/category-controller";

const router: Router = express.Router();

const categoryController = new CategoryController();

router.get("/", categoryController.getAllCategories.bind(categoryController));
router.get("/:id", categoryController.getSelectedCategory.bind(categoryController));
router.post("/", categoryController.createCategory.bind(categoryController));
router.put('/:d', categoryController.updateCategory.bind(categoryController));
router.patch('/:d', categoryController.updateCategory.bind(categoryController));
router.delete('/:d', categoryController.deleteCategory.bind(categoryController));

export { router as CategoryRouter };
