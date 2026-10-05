import express from 'express'
import { questionController } from './question.controller'

const router = express.Router()

router.post('/create-question', questionController.createQuestion)
router.get('/', questionController.getAllQuestion)

export const questionRoutes = router
