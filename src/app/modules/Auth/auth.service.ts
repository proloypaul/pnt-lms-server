import prisma from '../../shared/prisma'

const loginUserToDB = async (payload: any): Promise<any> => {
  const {
    email,
    password,
    number,
  }: { email: string; password: string; number: string } = payload

  let isUserExist: any

  const student = await prisma.student.findFirst({
    where: {
      OR: [{ email: email }, { number: number }],
    },
  })

  const instructor = await prisma.instructor.findFirst({
    where: {
      OR: [{ email: email }, { phone: number }],
    },
  })

  if (!student && !instructor) {
    throw new Error('User does not exist')
  }

  if (student || instructor) {
    isUserExist = student || instructor
  }

  if (isUserExist && isUserExist?.password !== password) {
    throw new Error('Password is Incorrect!')
  }

  const payloadData = {
    email: isUserExist?.email,
    number: isUserExist?.number,
    password: isUserExist?.password,
    name: isUserExist?.name,
  }
  console.log('login payload data', payloadData)
}

export const authService = {
  loginUserToDB,
}
