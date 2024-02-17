import { Review } from '@prisma/client'
import prisma from '../../shared/prisma'

const createReviewToDB = async (reviewerData: Review): Promise<Review> => {
  const result = await prisma.review.create({
    data: reviewerData,
  })

  return result
}

const getAllReviewerData = async (): Promise<Review[] | null> => {
  const result = await prisma.review.findMany({})

  return result
}

export const reviwerServices = {
  createReviewToDB,
  getAllReviewerData,
}
