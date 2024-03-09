import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'
import { StatusCodes } from 'http-status-codes'
import { authService } from './auth.service'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body

  const user = await authService.loginUserToDB(loginData)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'login User Successfully',
    data: user,
  })
})

export const authController = {
  loginUser,
}
