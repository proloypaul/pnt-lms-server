import express from 'express'
import { quizeController } from './quize.controller'

const router = express.Router()

router.post('/create-quize', quizeController.createQuize)

export const quizeRoutes = router
