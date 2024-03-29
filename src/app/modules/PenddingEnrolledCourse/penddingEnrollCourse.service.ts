import { PanddingEnrolledModel } from '@prisma/client'
import prisma from '../../shared/prisma'

const createPenddingEnrolledCourseToDB = async (
  penddingEnrollData: PanddingEnrolledModel,
): Promise<PanddingEnrolledModel> => {
  const result = await prisma.panddingEnrolledModel.create({
    data: penddingEnrollData,
  })

  return result
}

const getAllPenddingEnrolledCourseToDB = async (): Promise<
  PanddingEnrolledModel[] | null
> => {
  const result = await prisma.panddingEnrolledModel.findMany({
    include: {
      course: true,
    },
  })

  return result
}

const getPenddingEnrolledCourseUsingEmailToDB = async (
  queryData: string,
): Promise<PanddingEnrolledModel[] | null> => {
  const result = await prisma.panddingEnrolledModel.findMany({
    where: {
      email: queryData,
      // OR: [{ email: queryData }, { number: queryData }],
    },
    include: {
      course: {
        include: {
          chapters: {
            include: {
              videos: true,
            },
          },
        },
      },
    },
  })

  return result
}

const deletePenddingEnrollCourseToDB = async (
  id: string,
): Promise<PanddingEnrolledModel | null> => {
  const result = await prisma.panddingEnrolledModel.delete({
    where: {
      id: id,
    },
  })

  return result
}

export const penddingEnrollCourseServices = {
  createPenddingEnrolledCourseToDB,
  getAllPenddingEnrolledCourseToDB,
  getPenddingEnrolledCourseUsingEmailToDB,
  deletePenddingEnrollCourseToDB,
}
