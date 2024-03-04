import { StatusCodes } from 'http-status-codes'
import catchAsync from '../../shared/catchAsync'
import { quizeServices } from './quize.service'
import { Request, Response } from 'express'

const createQuize = catchAsync(async (req: Request, res: Response) => {
  const { ...quizeData } = req.body

  const quize = await quizeServices.createQuizeToDB(quizeData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'quize created Successfully',
    data: quize,
  })
})

const getAllQuize = catchAsync(async (req: Request, res: Response) => {
  const quizes = await quizeServices.getAllQuizeToDB()

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get all quize Successfully',
    data: quizes,
  })
})

const getSingleQuize = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const quize = await quizeServices.getSingleQuizeToDB(id)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get single Quize successfully',
    data: quize,
  })
})

export const quizeController = {
  createQuize,
  getAllQuize,
  getSingleQuize,
}
