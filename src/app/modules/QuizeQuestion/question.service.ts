import { Question } from '@prisma/client'
import prisma from '../../shared/prisma'

const createQuizeQuestionToDB = async (
  questionData: Question,
): Promise<Question> => {
  const result = await prisma.question.create({
    data: questionData,
  })

  return result
}

const getAllQuestionToDB = async (): Promise<Question[] | null> => {
  const result = await prisma.question.findMany({})

  return result
}

export const questionService = {
  createQuizeQuestionToDB,
  getAllQuestionToDB,
}
