import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { CourseServices } from './course.service'
import { StatusCodes } from 'http-status-codes'

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

  // sendResponse<Course>(res, {
  //   statusCode: StatusCodes.OK,
  //   success: true,
  //   message: "get all courses Successfully",
  //   data: course,
  // })
  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get all courses Successfully',
    data: course,
  })
})

const getSingleCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const singleCourseData = await CourseServices.getSingleCourseToDB(id)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get single course successfully',
    data: singleCourseData,
  })
})

export const CourseController = {
  createCourse,
  getAllCourses,
  getSingleCourse,
}
