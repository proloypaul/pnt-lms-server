import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { videoServices } from './chapter.service'

const createVideo = catchAsync(async (req: Request, res: Response) => {
  const { ...videoData } = req.body
  // console.log("course data", videoData);

  const video = await videoServices.createVideoToDB(videoData)

  res.status(200).json({
    status: 'success',
    message: 'Video created Successfully',
    data: video,
  })
})

const getAllVideo = catchAsync(async (req: Request, res: Response) => {
  const videoData = await videoServices.getAllVideoToDB()

  res.status(200).json({
    status: 'success',
    message: 'get all video Successfully',
    data: videoData,
  })
})

export const videoController = {
  createVideo,
  getAllVideo,
}
