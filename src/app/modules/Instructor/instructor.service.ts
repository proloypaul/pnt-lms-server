import { Instructor } from '@prisma/client'
import prisma from '../../shared/prisma'

const createInstructorToDB = async (
  instructorData: Instructor,
): Promise<Instructor> => {
  const result = await prisma.instructor.create({
    data: instructorData,
  })

  return result
}

const getAllInstructorToDB = async (): Promise<Instructor[] | null> => {
  const result = await prisma.instructor.findMany({})

  return result
}

export const instructorService = {
  createInstructorToDB,
  getAllInstructorToDB,
}
