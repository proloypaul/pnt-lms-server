import { StatusCodes } from 'http-status-codes'
import catchAsync from '../../shared/catchAsync'
import { Request, Response } from 'express'
import { questionService } from './question.service'

const createQuestion = catchAsync(async (req: Request, res: Response) => {
  const { ...questionData } = req.body

  const question = await questionService.createQuizeQuestionToDB(questionData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'question created Successfully',
    data: question,
  })
})

const getAllQuestion = catchAsync(async (req: Request, res: Response) => {
  const questions = await questionService.getAllQuestionToDB()

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get all question Successfully',
    data: questions,
  })
})

export const questionController = {
  createQuestion,
  getAllQuestion,
}
