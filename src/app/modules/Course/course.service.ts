import { Course } from '@prisma/client'
import prisma from '../../shared/prisma'
import { IpaginationOptions } from '../../interface/paginationInterface'
import { ICoursefilterOptions } from './course.interface'
import { paginationHelper } from '../../helpers/paginationHelper'
import { IGenericResponseWithModel } from '../../interface/commonInterface'

const createCourseToDB = async (courseData: Course): Promise<Course> => {
  const result = await prisma.course.create({
    data: courseData,
  })

  return result
}

// const getAllCourseToDB = async (): Promise<Course[] | null> => {
//   const result = await prisma.course.findMany({
//     include: {
//       chapters: {
//         include: {
//           videos: true,
//         },
//       },
//       instructor: true,
//       reviews: true,
//       panddingEnrolledModel: true,
//     },
//   })

//   return result
// }

const getAllCourseToDB = async (
  paginationOptions: Partial<IpaginationOptions>,
  allFiltersOptions: Partial<ICoursefilterOptions>,
): Promise<IGenericResponseWithModel<Course[] | null>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions)
  const { searchTerm, ...filtersData } = allFiltersOptions

  const courseSearchAbleFileds = ['categories', 'subCategories', 'courseLevel']
  let whereConditions: any = {}

  if (searchTerm) {
    whereConditions = {
      OR: courseSearchAbleFileds.reduce((acc: any, field) => {
        acc.push({
          [field]: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        })
        return acc
      }, []),
    }
  }

  if (Object.keys(filtersData).length) {
    whereConditions = {
      AND: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    }
  }

  const orderBy: any = {}
  if (sortBy && sortOrder) {
    orderBy[sortBy] = sortOrder
  }

  const result = await prisma.course.findMany({
    where: whereConditions,
    orderBy: orderBy,
    skip: skip,
    take: limit,
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

  const total = await prisma.course.count({
    where: whereConditions,
  })

  return {
    meta: {
      page: page,
      limit: limit,
      total: total,
    },
    data: result,
  }
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
