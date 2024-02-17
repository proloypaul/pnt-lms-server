import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { instructorService } from './instructor.service'
import { StatusCodes } from 'http-status-codes'

const createInstructor = catchAsync(async (req: Request, res: Response) => {
  const { ...instructorData } = req.body
  // console.log("course data", instructorData);

  const instructor =
    await instructorService.createInstructorToDB(instructorData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Instructor created Successfully',
    data: instructor,
  })
})

const getAllInstructor = catchAsync(async (req: Request, res: Response) => {
  const instructors = await instructorService.getAllInstructorToDB()

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get all instructor Successfully',
    data: instructors,
  })
})

export const insturctorController = {
  createInstructor,
  getAllInstructor,
}
