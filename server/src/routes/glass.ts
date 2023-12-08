import express, { Router } from 'express'
import GlassController from '../api/controllers/glass-controller'
import AuthMiddleware from '../api/middleware/auth-middleware'
import ApiMiddleware from '../api/middleware/api-middleware'

const router: Router = express.Router()

const glassController = new GlassController()

router.use(AuthMiddleware)
router.use(ApiMiddleware)
router.get('/', glassController.getAllGlasses.bind(glassController))
router.get('/:id', glassController.getSelectedGlasses.bind(glassController))
router.post('/', glassController.createGlass.bind(glassController))
router.patch('/:id', glassController.updateGlasses.bind(glassController))
router.delete('/:id', glassController.deleteGlasses.bind(glassController))

export { router as glassRouter }
