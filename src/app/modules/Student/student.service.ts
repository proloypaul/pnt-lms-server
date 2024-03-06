import { Student } from '@prisma/client'
import prisma from '../../shared/prisma'

const createStudentToDB = async (studentData: Student): Promise<Student> => {
  const result = await prisma.student.create({
    data: studentData,
  })

  return result
}

const getAllStudentToDB = async (): Promise<Student[] | null> => {
  const result = await prisma.student.findMany({})

  return result
}

// get single instructor
const getSingleStudentToDB = async (id: string): Promise<Student | null> => {
  const result = await prisma.student.findUnique({
    where: {
      id: id,
    },
  })

  return result
}

// update instructor data
const updateStudentToDB = async (
  id: string,
  student: Partial<Student>,
): Promise<Student> => {
  const result = await prisma.student.update({
    where: {
      id: id,
    },
    data: student,
  })

  return result
}

// delete single instructor
const deleteSingleStudentToDB = async (id: string): Promise<Student> => {
  const result = await prisma.student.delete({
    where: {
      id: id,
    },
  })

  return result
}

export const studentService = {
  createStudentToDB,
  getAllStudentToDB,
  getSingleStudentToDB,
  updateStudentToDB,
  deleteSingleStudentToDB,
}
