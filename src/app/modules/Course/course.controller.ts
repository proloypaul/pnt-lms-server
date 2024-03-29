import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { CourseServices } from './course.service'
import { StatusCodes } from 'http-status-codes'
import sendResponse from '../../shared/sendResponse'
import { Course } from '@prisma/client'
import pickFields from '../../shared/pick'
import { paginationFields } from '../../constaint/paginationConstaint'
import { courseFilterableFields } from './course.contraint'

const createCourse = catchAsync(async (req: Request, res: Response) => {
  const { ...courseData } = req.body

  const course = await CourseServices.createCourseToDB(courseData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Course created Successfully',
    data: course,
  })
})

const getAllCourses = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pickFields(req.query, paginationFields)
  const filtersOptions = pickFields(req.query, courseFilterableFields)

  const result = await CourseServices.getAllCourseToDB(
    paginationOptions,
    filtersOptions,
  )

  sendResponse<Course[]>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'get all courses Successfully',
    meta: result.meta,
    data: result.data,
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

const updateCourseData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const { ...courseData } = req.body

  const course = await CourseServices.updateCourseDataToDB(id, courseData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'updated course data successfully',
    data: course,
  })
})

const deleteSingleCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const singleCourseData = await CourseServices.deleteSingleCourseToDB(id)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Delete single course successfully',
    data: singleCourseData,
  })
})

export const CourseController = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourseData,
  deleteSingleCourse,
}
