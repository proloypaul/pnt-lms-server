import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { videoServices } from './video.service'
import videoUpoalder from '../../shared/VideoUploader'
import { StatusCodes } from 'http-status-codes'

const createVideo = catchAsync(async (req: Request, res: Response) => {
  const { ...videoData } = req.body

  const video = await videoServices.createVideoToDB(videoData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Video created Successfully',
    data: video,
  })
})

const getAllVideo = catchAsync(async (req: Request, res: Response) => {
  const videoData = await videoServices.getAllVideoToDB()

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get all video Successfully',
    data: videoData,
  })
})

const getSingleLessionData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const video = await videoServices.getSingleVideoToDB(id)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get single lession Successfully',
    data: video,
  })
})

// update lession data
const updateLessionData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const { ...lessionData } = req.body

  const lession = await videoServices.updateLessionDataToDB(id, lessionData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'updated lession data successfully',
    data: lession,
  })
})

// delete single lession
const deleteSingleLession = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const lession = await videoServices.deleteSingleLessionToDB(id)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Delete single lession Successfully',
    data: lession,
  })
})

// upload Lession video into server videos folder

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
      // const inputPath = req?.file?.path;
      // const outputDir = './uploads/hls/';
      // const outputName = 'index.m3u8';
      // const outputPath = outputDir + outputName;
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
  getSingleLessionData,
  updateLessionData,
  deleteSingleLession,
  uploadLessionVideo,
}
