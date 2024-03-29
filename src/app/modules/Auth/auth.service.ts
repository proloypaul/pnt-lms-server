import { Secret } from 'jsonwebtoken'
import config from '../../../config'
import { jwtHelpers } from '../../helpers/jwtHelper'
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
    name: isUserExist?.name,
    email: isUserExist?.email,
    number: isUserExist?.number,
    password: isUserExist?.password,
    role: isUserExist?.role,
    image:
      isUserExist?.image == null && isUserExist?.instructorImg == null
        ? null
        : isUserExist?.image || isUserExist?.instructorImg,
  }

  // console.log('login payloadData', payloadData)

  // create access token
  const accessToken = jwtHelpers.createToken(
    payloadData,
    config.jwt.secrect as Secret,
    config.jwt.expire_in as string,
  )

  return {
    accessToken,
  }
}

const refreshToken = async (token: string) => {
  if (!token) {
    throw new Error('Token is required')
  }

  const decodedToken = jwtHelpers.decodeToken(token)
  const { name, email, number, role } = decodedToken

  if (!name || !role) {
    throw new Error('Invalid Token')
  }

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

  const payloadData = {
    name: isUserExist?.name,
    email: isUserExist?.email,
    number: isUserExist?.number,
    password: isUserExist?.password,
    role: isUserExist?.role,
    image:
      isUserExist?.image == null && isUserExist?.instructorImg == null
        ? null
        : isUserExist?.image || isUserExist?.instructorImg,
  }
  // console.log("payloadDat", payloadData, "decoded data", name, email, number, role)

  const newAccessToken = jwtHelpers.createToken(
    payloadData,
    config.jwt.secrect as Secret,
    config.jwt.expire_in as string,
  )

  return {
    accessToken: newAccessToken,
  }
}

export const authService = {
  loginUserToDB,
  refreshToken,
}
