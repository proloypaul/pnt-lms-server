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
      quizes: {
        include: {
          questions: true,
        },
      },
    },
  })

  return result
}

const getSingleChapterToDB = async (id: string): Promise<Chapter | null> => {
  const result = await prisma.chapter.findUnique({
    where: {
      id: id,
    },
    include: {
      videos: true,
      quizes: {
        include: {
          questions: true,
        },
      },
    },
  })

  return result
}

// update chapter data
const updateChapterDataToDB = async (
  id: string,
  chapterData: Partial<Chapter>,
): Promise<Chapter> => {
  const result = await prisma.chapter.update({
    where: {
      id: id,
    },
    data: chapterData,
  })

  return result
}

// delete single instructor
const deleteSingleChapterToDB = async (id: string): Promise<Chapter> => {
  await prisma.video.deleteMany({
    where: {
      chapterId: id,
    },
  })

  // console.log('chapter videos data', chapterVideos)
  const result = await prisma.chapter.delete({
    where: {
      id: id,
    },
  })

  return result
}

export const chapterServices = {
  createChapterToDB,
  getAllChapterToDB,
  getSingleChapterToDB,
  updateChapterDataToDB,
  deleteSingleChapterToDB,
}
