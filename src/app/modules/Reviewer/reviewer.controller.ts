import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { StatusCodes } from 'http-status-codes'
import { reviwerServices } from './reviewer.service'

const createReview = catchAsync(async (req: Request, res: Response) => {
  const { ...reviewerData } = req.body
  // console.log("course data", reviewerData);

  const review = await reviwerServices.createReviewToDB(reviewerData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'reviewer created Successfully',
    data: review,
  })
})

const getAllReviewer = catchAsync(async (req: Request, res: Response) => {
  const reviewer = await reviwerServices.getAllReviewerData()

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get all reviewer Successfully',
    data: reviewer,
  })
})

export const reviewerController = {
  createReview,
  getAllReviewer,
}
