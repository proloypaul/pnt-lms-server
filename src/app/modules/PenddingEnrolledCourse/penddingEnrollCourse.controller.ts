import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { penddingEnrollCourseServices } from './penddingEnrollCourse.service'
import { StatusCodes } from 'http-status-codes'

const createPenddingEnrollCourse = catchAsync(
  async (req: Request, res: Response) => {
    const penddingEnrolledCourseData = req.body

    // firstly check user are authenticated or not
    // if user are authenticated then they can Enroll the course
    // when we are build payment system then we can create another model and relation with this pendding model with confirmorder model
    // now we are set isEnroll true without implement payment system

    const updatedCourseEnrolledData = {
      ...penddingEnrolledCourseData,
      isEnrolled: true,
    }

    const penddingEnrollCourse =
      await penddingEnrollCourseServices.createPenddingEnrolledCourseToDB(
        updatedCourseEnrolledData,
      )

    res.status(StatusCodes.OK).json({
      status: true,
      message: 'pendding course created Successfully',
      data: penddingEnrollCourse,
    })
  },
)

const getAllPenddingEnrolledCourse = catchAsync(
  async (req: Request, res: Response) => {
    const peddingEnrollCourseData =
      await penddingEnrollCourseServices.getAllPenddingEnrolledCourseToDB()

    res.status(StatusCodes.OK).json({
      status: true,
      message: 'get all penddingEnrolledCourse Successfully',
      data: peddingEnrollCourseData,
    })
  },
)

const getPenddingEnrolledCourseUsingEmail = catchAsync(
  async (req: Request, res: Response) => {
    const { emailOrNumber } = req.params

    const peddingEnrollCourseData =
      await penddingEnrollCourseServices.getPenddingEnrolledCourseUsingEmailToDB(
        emailOrNumber,
      )

    res.status(StatusCodes.OK).json({
      status: true,
      message: 'get enrolled user course Successfully',
      data: peddingEnrollCourseData,
    })
  },
)

const deleteSinglePenddingEnrolledCourse = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const penddingEnrollCourse =
      await penddingEnrollCourseServices.deletePenddingEnrollCourseToDB(id)

    res.status(StatusCodes.OK).json({
      status: true,
      message: 'pendding Enroll course deleted successfully',
      data: penddingEnrollCourse,
    })
  },
)

export const penddingEnrolledCourseController = {
  createPenddingEnrollCourse,
  getAllPenddingEnrolledCourse,
  getPenddingEnrolledCourseUsingEmail,
  deleteSinglePenddingEnrolledCourse,
}
