import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { instructorService } from './instructor.service'
import { StatusCodes } from 'http-status-codes'
import upload from '../../shared/ImageUploader'

const createInstructor = catchAsync(async (req: Request, res: Response) => {
  const { ...instructorData } = req.body
  // console.log("course data", instructorData);

  const instructor =
    await instructorService.createInstructorToDB(instructorData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Instructor created Successfully',
    data: instructor,
  })
})

const getAllInstructor = catchAsync(async (req: Request, res: Response) => {
  const instructors = await instructorService.getAllInstructorToDB()

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get all instructor Successfully',
    data: instructors,
  })
})

const getSingleInstructor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const instructor = await instructorService.getSingleInstructorToDB(id)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get single instructor Successfully',
    data: instructor,
  })
})

const deleteSingleInstructor = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const instructor = await instructorService.deleteSingleInstructorToDB(id)

    res.status(StatusCodes.OK).json({
      status: true,
      message: 'Delete single instructor Successfully',
      data: instructor,
    })
  },
)

// upload Instuctor Image into server
const uploadInstructorImage = catchAsync(
  async (req: Request, res: Response) => {
    const uploadedFiles = upload.single('file')
    uploadedFiles(req, res, error => {
      // console.log('upload out put ', req.file)
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
          message: 'Image Uploaded Successfully',
          filePath: req?.file?.path,
          fileName: req?.file?.filename,
        })
      }
    })
  },
)

export const insturctorController = {
  createInstructor,
  getAllInstructor,
  getSingleInstructor,
  deleteSingleInstructor,
  uploadInstructorImage,
}
