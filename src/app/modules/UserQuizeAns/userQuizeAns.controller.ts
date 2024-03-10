import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { StatusCodes } from 'http-status-codes'
import { userQuizeAnsService } from './userQuizeAns.service'

const createUserQuizeAns = catchAsync(async (req: Request, res: Response) => {
  const { ...quizeAnsData } = req.body

  const userQuizeAns =
    await userQuizeAnsService.createUserQuizeAnsToDB(quizeAnsData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Quize submitted Successfully',
    data: userQuizeAns,
  })
})

const getAllQuizAns = catchAsync(async (req: Request, res: Response) => {
  const quizeAns = await userQuizeAnsService.getAllQuizeAnsToDB()

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get all quizeAns Successfully',
    data: quizeAns,
  })
})

const getSingleQuizAns = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const quizeAnsData = await userQuizeAnsService.getSingleQuizeAnsToDB(id)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get single quizeAnsData Successfully',
    data: quizeAnsData,
  })
})

const getQuizeAnsUsingEmail = catchAsync(
  async (req: Request, res: Response) => {
    const { email } = req.params
    const quizeAnsData =
      await userQuizeAnsService.getQuizeAnsUsingEmailToDB(email)

    res.status(StatusCodes.OK).json({
      status: true,
      message: 'get quizeAnsData using email Successfully',
      data: quizeAnsData,
    })
  },
)

// update instructor data
// const updateStudent = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params
//   const { ...studentData } = req.body

//   const student = await studentService.updateStudentToDB(id, studentData)

//   res.status(StatusCodes.OK).json({
//     status: true,
//     message: 'updated student data successfully',
//     data: student,
//   })
// })

const deleteSingelQuizeAns = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const quizeAns = await userQuizeAnsService.deleteSingleQuizeAns(id)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Delete single quizeAns Successfully',
    data: quizeAns,
  })
})

export const userQuizeAnsController = {
  createUserQuizeAns,
  getAllQuizAns,
  getSingleQuizAns,
  getQuizeAnsUsingEmail,
  deleteSingelQuizeAns,
}
