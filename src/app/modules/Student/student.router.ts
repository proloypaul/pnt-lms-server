import express from 'express'
import { studentController } from './student.controller'

const router = express.Router()

router.post('/create-student', studentController.createStudent)
router.get('/', studentController.getAllStudent)
router.patch('/:id', studentController.updateStudent)
router.get('/:id', studentController.getSingleStudent)
router.delete('/:id', studentController.deleteSingleStudent)

export const studentRoutes = router
