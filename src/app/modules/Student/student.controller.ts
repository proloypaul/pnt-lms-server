import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { StatusCodes } from 'http-status-codes'
import { studentService } from './student.service'

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const { ...studentData } = req.body
  const role = 'student'
  const updateStudentData = { ...studentData, role: role }
  if (studentData?.email) {
    console.log('we are sent an verification email to your email')
  }

  if (studentData?.number) {
    console.log('we are sent you a verification code to your number')
  }
  const student = await studentService.createStudentToDB(updateStudentData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Student created Successfully',
    data: student,
  })
})

const getAllStudent = catchAsync(async (req: Request, res: Response) => {
  const students = await studentService.getAllStudentToDB()

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get all student Successfully',
    data: students,
  })
})

const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const student = await studentService.getSingleStudentToDB(id)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get single student Successfully',
    data: student,
  })
})

// update instructor data
const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const { ...studentData } = req.body

  const student = await studentService.updateStudentToDB(id, studentData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'updated student data successfully',
    data: student,
  })
})

const deleteSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const student = await studentService.deleteSingleStudentToDB(id)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Delete single student Successfully',
    data: student,
  })
})

export const studentController = {
  createStudent,
  updateStudent,
  getAllStudent,
  getSingleStudent,
  deleteSingleStudent,
}
