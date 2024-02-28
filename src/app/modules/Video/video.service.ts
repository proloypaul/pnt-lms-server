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

// get single video
const getSingleVideoToDB = async (id: string): Promise<Video | null> => {
  const result = await prisma.video.findUnique({
    where: {
      id: id,
    },
  })

  return result
}

// update lession Data
const updateLessionDataToDB = async (
  id: string,
  lessionData: Partial<Video>,
): Promise<Video> => {
  const result = await prisma.video.update({
    where: {
      id: id,
    },
    data: lessionData,
  })

  return result
}

// delete single lession
const deleteSingleLessionToDB = async (id: string): Promise<Video> => {
  const result = await prisma.video.delete({
    where: {
      id: id,
    },
  })

  return result
}

export const videoServices = {
  createVideoToDB,
  getAllVideoToDB,
  getSingleVideoToDB,
  updateLessionDataToDB,
  deleteSingleLessionToDB,
}
