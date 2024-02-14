import { Video } from '@prisma/client'
import prisma from '../../shared/prisma'

const createVideoToDB = async (videoData: Video): Promise<Video> => {
  const result = await prisma.video.create({
    data: videoData,
  })

  return result
}

const getAllVideoToDB = async (): Promise<Video[] | null> => {
  const result = await prisma.video.findMany({
    include: {
      chapter: true,
    },
  })

  return result
}

export const videoServices = {
  createVideoToDB,
  getAllVideoToDB,
}
