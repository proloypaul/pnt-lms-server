import express from 'express'
import { penddingEnrolledCourseController } from './penddingEnrollCourse.controller'

const router = express.Router()

router.post(
  '/create-penddingEnrolledData',
  penddingEnrolledCourseController.createPenddingEnrollCourse,
)
router.get('/', penddingEnrolledCourseController.getAllPenddingEnrolledCourse)
router.delete(
  '/:id',
  penddingEnrolledCourseController.deleteSinglePenddingEnrolledCourse,
)

export const penddingEnrolledCourseRoutes = router
