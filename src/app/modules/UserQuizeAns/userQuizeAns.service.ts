import { UserQuizeAns } from '@prisma/client'
import prisma from '../../shared/prisma'

const createUserQuizeAnsToDB = async (
  quizeAnsData: UserQuizeAns,
): Promise<UserQuizeAns> => {
  const result = await prisma.userQuizeAns.create({
    data: quizeAnsData,
  })

  return result
}

const getAllQuizeAnsToDB = async (): Promise<UserQuizeAns[] | null> => {
  const result = await prisma.userQuizeAns.findMany({
    include: {
      takenQuize: {
        include: {
          questions: true,
        },
      },
    },
  })

  return result
}

// get single instructor
const getSingleQuizeAnsToDB = async (
  id: string,
): Promise<UserQuizeAns | null> => {
  const result = await prisma.userQuizeAns.findUnique({
    where: {
      id: id,
    },
    include: {
      takenQuize: {
        include: {
          questions: true,
        },
      },
    },
  })

  return result
}

const getQuizeAnsUsingEmailToDB = async (
  email: string,
): Promise<UserQuizeAns[] | null> => {
  const result = await prisma.userQuizeAns.findMany({
    where: {
      email: email,
    },
    include: {
      takenQuize: {
        include: {
          questions: true,
        },
      },
    },
  })

  return result
}

// update instructor data
// const updateStudentToDB = async (
//   id: string,
//   student: Partial<Student>,
// ): Promise<Student> => {
//   const result = await prisma.student.update({
//     where: {
//       id: id,
//     },
//     data: student,
//   })

//   return result
// }

// delete single instructor
const deleteSingleQuizeAns = async (id: string): Promise<UserQuizeAns> => {
  const result = await prisma.userQuizeAns.delete({
    where: {
      id: id,
    },
  })

  return result
}

export const userQuizeAnsService = {
  createUserQuizeAnsToDB,
  getAllQuizeAnsToDB,
  getSingleQuizeAnsToDB,
  getQuizeAnsUsingEmailToDB,
  deleteSingleQuizeAns,
}
