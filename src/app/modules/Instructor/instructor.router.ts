import express from 'express'
import { insturctorController } from './instructor.controller'

const router = express.Router()

router.post('/create-instructor', insturctorController.createInstructor)
router.get('/', insturctorController.getAllInstructor)

export const instructorRoutes = router
