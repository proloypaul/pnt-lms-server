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

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization
  const result = await authService.refreshToken(token!)

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Token refreshed successfully',
    data: result,
  })
})

export const authController = {
  loginUser,
  refreshToken,
}
