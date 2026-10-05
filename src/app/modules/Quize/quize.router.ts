import express from 'express'
import { quizeController } from './quize.controller'

const router = express.Router()

router.post('/create-quize', quizeController.createQuize)
router.get('/', quizeController.getAllQuize)
router.get('/:id', quizeController.getSingleQuize)
router.delete('/:id', quizeController.deleteSingleQuize)

export const quizeRoutes = router
