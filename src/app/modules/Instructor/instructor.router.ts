import express from 'express'
import { insturctorController } from './instructor.controller'

const router = express.Router()

router.post('/create-instructor', insturctorController.createInstructor)
router.post(
  '/upload-instructorImage',
  insturctorController.uploadInstructorImage,
)
router.get('/', insturctorController.getAllInstructor)
router.get('/:id', insturctorController.getSingleInstructor)
router.delete('/:id', insturctorController.deleteSingleInstructor)

export const instructorRoutes = router
