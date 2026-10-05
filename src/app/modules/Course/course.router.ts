import express from 'express'
import { CourseController } from './course.controller'

const router = express.Router()

router.post('/create-course', CourseController.createCourse)
router.get('/', CourseController.getAllCourses)
router.get('/:id', CourseController.getSingleCourse)
router.patch('/:id', CourseController.updateCourseData)
router.delete('/:id', CourseController.deleteSingleCourse)

export const courseRoutes = router
