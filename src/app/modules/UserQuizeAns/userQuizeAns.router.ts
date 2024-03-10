import express from 'express'
import { userQuizeAnsController } from './userQuizeAns.controller'

const router = express.Router()

router.post('/create-userQuizeAns', userQuizeAnsController.createUserQuizeAns)
router.get('/', userQuizeAnsController.getAllQuizAns)
router.get('/:id', userQuizeAnsController.getSingleQuizAns)
router.get('/:email', userQuizeAnsController.getQuizeAnsUsingEmail)
router.delete('/:id', userQuizeAnsController.deleteSingelQuizeAns)

export const userQuizeAnsRoutes = router
