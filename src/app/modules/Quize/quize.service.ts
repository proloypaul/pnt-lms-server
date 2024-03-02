import { Quize } from '@prisma/client'
import prisma from '../../shared/prisma'

const createQuizeToDB = async (quizeData: Quize): Promise<Quize> => {
  const result = await prisma.quize.create({
    data: quizeData,
  })

  return result
}

export const quizeServices = {
  createQuizeToDB,
}
