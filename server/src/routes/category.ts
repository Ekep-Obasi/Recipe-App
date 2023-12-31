import express, { Router } from 'express'
import CategoryController from '../api/controllers/category-controller'
import AuthMiddleware from '../api/middleware/auth-middleware'
import ApiMiddleware from '../api/middleware/api-middleware'

const router: Router = express.Router()

const categoryController = new CategoryController()

router.use(AuthMiddleware)
router.use(ApiMiddleware)
router.get('/', categoryController.getAllCategories.bind(categoryController))
router.get('/:id', categoryController.getSelectedCategory.bind(categoryController))
router.post('/', categoryController.createCategory.bind(categoryController))
router.post('/bulk', categoryController.bulkCreateCategories.bind(categoryController))
router.put('/:id', categoryController.updateCategory.bind(categoryController))
router.patch('/:id', categoryController.updateCategory.bind(categoryController))
router.delete('/:id', categoryController.deleteCategory.bind(categoryController))

export { router as CategoryRouter }
