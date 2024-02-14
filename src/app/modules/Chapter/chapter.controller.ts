import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { chapterServices } from './chapter.service'

const createChapter = catchAsync(async (req: Request, res: Response) => {
  const { ...chapterData } = req.body
  // console.log("course data", chapterData);

  const chapter = await chapterServices.createChapterToDB(chapterData)

  res.status(200).json({
    status: 'success',
    message: 'Chapter created Successfully',
    data: chapter,
  })
})

const getAllChapter = catchAsync(async (req: Request, res: Response) => {
  const chaptersData = await chapterServices.getAllChapterToDB()

  res.status(200).json({
    status: 'success',
    message: 'get all chapter Successfully',
    data: chaptersData,
  })
})

export const ChapterController = {
  createChapter,
  getAllChapter,
}
