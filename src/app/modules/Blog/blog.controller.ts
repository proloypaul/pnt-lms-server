import { StatusCodes } from 'http-status-codes'
import catchAsync from '../../shared/catchAsync'
import { Request, Response } from 'express'
import { blogService } from './blog.service'

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const { ...blogData } = req.body

  const blog = await blogService.createBlogToDB(blogData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'blog created Successfully',
    data: blog,
  })
})

const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const blogs = await blogService.getAllBlogToDB()

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get all blog Successfully',
    data: blogs,
  })
})

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const blog = await blogService.getSingleBlogToDB(id)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'get single blog Successfully',
    data: blog,
  })
})

export const blogController = {
  createBlog,
  getAllBlog,
  getSingleBlog,
}
