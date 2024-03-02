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

export const quizeController = {
  createQuize,
}
