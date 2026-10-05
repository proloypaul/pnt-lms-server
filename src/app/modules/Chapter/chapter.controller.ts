import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { chapterServices } from './chapter.service'
import { StatusCodes } from 'http-status-codes'

const createChapter = catchAsync(async (req: Request, res: Response) => {
  const { ...chapterData } = req.body
  // console.log("course data", chapterData);

  const chapter = await chapterServices.createChapterToDB(chapterData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Chapter created Successfully',
    data: chapter,
  })
})

const getAllChapter = catchAsync(async (req: Request, res: Response) => {
  const chaptersData = await chapterServices.getAllChapterToDB()

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get all chapter Successfully',
    data: chaptersData,
  })
})

const getSingleChapter = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const chapterData = await chapterServices.getSingleChapterToDB(id)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get single chapter Successfully',
    data: chapterData,
  })
})

// update chapter data
const updateChapterData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const { ...chapterData } = req.body

  const chapter = await chapterServices.updateChapterDataToDB(id, chapterData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'updated chapter data successfully',
    data: chapter,
  })
})

const deleteSingleChapter = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const chapter = await chapterServices.deleteSingleChapterToDB(id)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Delete single chapter Successfully',
    data: chapter,
  })
})
export const ChapterController = {
  createChapter,
  getAllChapter,
  getSingleChapter,
  updateChapterData,
  deleteSingleChapter,
}
