import { Chapter } from '@prisma/client'
import prisma from '../../shared/prisma'

const createChapterToDB = async (chapterData: Chapter): Promise<Chapter> => {
  const result = await prisma.chapter.create({
    data: chapterData,
  })

  return result
}

const getAllChapterToDB = async (): Promise<Chapter[] | null> => {
  const result = await prisma.chapter.findMany({
    include: {
      videos: true,
      course: true,
    },
  })

  return result
}

export const chapterServices = {
  createChapterToDB,
  getAllChapterToDB,
}
