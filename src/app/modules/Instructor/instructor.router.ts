import express from 'express'
import { insturctorController } from './instructor.controller'

const router = express.Router()

router.post('/create-instructor', insturctorController.createInstructor)
router.post(
  '/upload-instructorImage',
  insturctorController.uploadInstructorImage,
)
router.get('/', insturctorController.getAllInstructor)

export const instructorRoutes = router
