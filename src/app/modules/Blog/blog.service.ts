import { Blog } from '@prisma/client'
import prisma from '../../shared/prisma'

const createBlogToDB = async (blogData: Blog): Promise<Blog> => {
  const result = await prisma.blog.create({
    data: blogData,
  })

  return result
}

const getAllBlogToDB = async (): Promise<Blog[] | null> => {
  const result = await prisma.blog.findMany({
    include: {
      author: true,
    },
  })

  return result
}

// update course data
// update course data
const updateBlogDataToDB = async (
  id: string,
  blogData: Partial<Blog>,
): Promise<Blog> => {
  const result = await prisma.blog.update({
    where: {
      id: id,
    },
    data: blogData,
  })

  return result
}

// get single instructor
const getSingleBlogToDB = async (id: string): Promise<Blog | null> => {
  const result = await prisma.blog.findUnique({
    where: {
      id: id,
    },
    include: {
      author: true,
    },
  })

  return result
}

export const blogService = {
  createBlogToDB,
  getAllBlogToDB,
  getSingleBlogToDB,
  updateBlogDataToDB,
}
