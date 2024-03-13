import { Quize } from '@prisma/client'
import prisma from '../../shared/prisma'

const createQuizeToDB = async (quizeData: Quize): Promise<Quize> => {
  const result = await prisma.quize.create({
    data: quizeData,
  })

  return result
}

const getAllQuizeToDB = async (): Promise<Quize[] | null> => {
  const result = await prisma.quize.findMany({
    include: {
      questions: true,
    },
  })

  return result
}

const getSingleQuizeToDB = async (id: string): Promise<Quize | null> => {
  const result = await prisma.quize.findUnique({
    where: {
      id: id,
    },
    include: {
      questions: true,
    },
  })

  return result
}

const deleteSingleQuizeToDB = async (id: string): Promise<Quize | null> => {
  const result = await prisma.quize.delete({
    where: {
      id: id,
    },
  })

  return result
}

export const quizeServices = {
  createQuizeToDB,
  getAllQuizeToDB,
  getSingleQuizeToDB,
  deleteSingleQuizeToDB,
}
