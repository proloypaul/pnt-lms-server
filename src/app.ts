/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import httpStatus from 'http-status'
import cookieParse from 'cookie-parser'
import router from './app/routes'
import path from 'path'
import globalErrorHandler from './app/middleware/globalErrorHandler'

const app: Application = express()

const corsOptions = {
  origin: true,
  credential: true,
}
app.use('*', cors(corsOptions))
app.use(cookieParse())

//parse
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// router
app.use('/api/v1', router)
app.use('/uploads', express.static('uploads'))
app.use('/videos', express.static('videos'))
app.use(
  '/videos/transcoded',
  express.static(path.join(__dirname, './videos/transcoded')),
)

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Welcome To ittrainingtube server',
  })
})

app.use((req, res, next) => {
  const filePath = req.path
  if (filePath.endsWith('.m3u8')) {
    res.setHeader('Content-Type', 'application/x-mpegURL')
  }
  next()
})
// catch api path error
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'Api Not Found',
      },
    ],
  })
  next()
})

app.use(globalErrorHandler)

export default app
