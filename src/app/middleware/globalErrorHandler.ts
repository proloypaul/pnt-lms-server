import { ErrorRequestHandler } from 'express'
import { errMessageGeneric } from '../interface/error'
import ApiError from '../errors/ApiError'
import config from '../../config'

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 500
  let message = 'some thing went wrong'
  let errorMessage: errMessageGeneric[] = []

  if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? error?.stack : undefined,
  })
  // res.status(400).json({error: error});
  next()
}

export default globalErrorHandler
