import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { videoServices } from './video.service'
import videoUpoalder from '../../shared/VideoUploader'
import { StatusCodes } from 'http-status-codes'

const createVideo = catchAsync(async (req: Request, res: Response) => {
  const { ...videoData } = req.body

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

// upload Instuctor Image into server
const uploadLessionVideo = catchAsync(async (req: Request, res: Response) => {
  const uploadedFiles = videoUpoalder.single('file')
  uploadedFiles(req, res, error => {
    if (error) {
      // console.log('Error ', error)
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: 'There has an error',
        filePath: req?.file?.path,
        fileName: req?.file?.filename,
      })
    } else {
      res.status(StatusCodes.OK).json({
        success: true,
        message: 'Video Uploaded Successfully',
        filePath: req?.file?.path,
        fileName: req?.file?.filename,
      })
    }
  })
})

export const videoController = {
  createVideo,
  getAllVideo,
  uploadLessionVideo,
}
