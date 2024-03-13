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

// update instructor data
const updateInstructorDataToDB = async (
  id: string,
  instructorData: Partial<Instructor>,
): Promise<Instructor> => {
  const result = await prisma.instructor.update({
    where: {
      id: id,
    },
    data: instructorData,
  })

  return result
}

const getAllInstructorToDB = async (): Promise<Instructor[] | null> => {
  const result = await prisma.instructor.findMany({})

  return result
}

// get single instructor
const getSingleInstructorToDB = async (
  id: string,
): Promise<Instructor | null> => {
  const result = await prisma.instructor.findUnique({
    where: {
      id: id,
    },
  })

  return result
}

// delete single instructor
const deleteSingleInstructorToDB = async (id: string): Promise<Instructor> => {
  const result = await prisma.instructor.delete({
    where: {
      id: id,
    },
  })

  return result
}

export const instructorService = {
  createInstructorToDB,
  getAllInstructorToDB,
  updateInstructorDataToDB,
  getSingleInstructorToDB,
  deleteSingleInstructorToDB,
}
