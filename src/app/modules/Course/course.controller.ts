import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { CourseServices } from './course.service'

const createCourse = catchAsync(async (req: Request, res: Response) => {
  const { ...courseData } = req.body
  // console.log("course data", courseData);

  const course = await CourseServices.createCourseToDB(courseData)

  res.status(200).json({
    status: 'success',
    message: 'Course created Successfully',
    data: course,
  })
})

const getAllCourses = catchAsync(async (req: Request, res: Response) => {
  const course = await CourseServices.getAllCourseToDB()

  res.status(200).json({
    status: 'success',
    message: 'get all courses Successfully',
    data: course,
  })
})

export const CourseController = {
  createCourse,
  getAllCourses,
}
