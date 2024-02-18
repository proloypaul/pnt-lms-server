import { Course } from '@prisma/client'
import prisma from '../../shared/prisma'

const createCourseToDB = async (courseData: Course): Promise<Course> => {
  const result = await prisma.course.create({
    data: courseData,
  })

  return result
}

const getAllCourseToDB = async (): Promise<Course[] | null> => {
  const result = await prisma.course.findMany({
    include: {
      chapters: {
        include: {
          videos: true,
        },
      },
      instructor: true,
      reviews: true,
      panddingEnrolledModel: true,
    },
  })

  return result
}

const getSingleCourseToDB = async (id: string): Promise<Course | null> => {
  const result = await prisma.course.findUnique({
    where: {
      id: id,
    },
    include: {
      chapters: {
        include: {
          videos: true,
        },
      },
      instructor: true,
      reviews: true,
      panddingEnrolledModel: true,
    },
  })

  return result
}

export const CourseServices = {
  createCourseToDB,
  getAllCourseToDB,
  getSingleCourseToDB,
}