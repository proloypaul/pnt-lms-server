import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { videoServices } from './video.service'
import videoUpoalder from '../../shared/VideoUploader'
import { StatusCodes } from 'http-status-codes'
import ffmpeg from 'fluent-ffmpeg'
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg'
import { extname, resolve } from 'path'
import { existsSync, mkdirSync, unlink } from 'fs'
import TranscoderConfig from '../../../config'
import { format } from 'date-fns'

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
        message: 'There has an error from server',
        filePath: req?.file?.path,
        fileName: req?.file?.filename,
      })
    } else {
      try {
        const currentDate = Date.now()
        const formatedCurrentDate = format(currentDate, 'dd-MM-yy-HH-mm-ss')
        // secure video and formate into .m3u8
        const outputDirName = `${
          formatedCurrentDate +
          req?.file?.originalname.split(extname(req?.file?.originalname))[0]
        }`
        const inputFileName = req?.file?.filename
        const inputFilePath = resolve(
          __dirname,
          `../../../../videos/${inputFileName}`,
        )

        const outputDir = resolve(__dirname, `../../../../videos/transcoded/`)
        const manifestPath = `videos/transcoded/${outputDirName}.m3u8`

        if (!existsSync(outputDir)) {
          mkdirSync(outputDir, { recursive: true })
        }
        const command = ffmpeg(inputFilePath)
          .setFfmpegPath(ffmpegInstaller.path)
          .outputOptions([
            `-hls_time ${TranscoderConfig.HLS_SEGMENT_DURATION}`,
            `-hls_list_size ${TranscoderConfig.HLS_LIST_SIZE}`,
            `-c:v ${TranscoderConfig.CODEC.VIDEO}`,
            `-c:a ${TranscoderConfig.CODEC.AUDIO}`,
          ])

        command.on('start', () => {
          // console.log("Starting transcoding file: ", inputFileName)
        })
        command.on('error', err => {
          throw new Error(err)
        })

        command.on('end', () => {
          unlink(inputFilePath, err => {
            if (err) throw new Error('encoded video end error')
            // console.log(`raw file removed from ${inputFilePath}` )
          })
          res.status(StatusCodes.OK).json({
            success: true,
            message: 'Video Uploaded Successfully',
            filePath: manifestPath,
            fileName: req?.file?.filename,
          })
        })
        // console.log("transcoding code manifast path", manifestPath)
        command.output(manifestPath).run()
      } catch (error) {
        console.log('TransCoding failed:', error)
      }
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
