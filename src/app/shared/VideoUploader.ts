import multer from 'multer'
import { format } from 'date-fns'
import fs from 'fs'
import path from 'path'

// Set up Multer storage configuration
const currentDate = Date.now()
const formatedCurrentDate = format(currentDate, 'dd-MM-yy-HH-mm-ss')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fs.mkdir('./videos/', err => {
      cb(null, './videos/')
    })
    // cb(null, path.join(__dirname, 'uploads')); // Save uploaded videos to the 'uploads/videos' directory
  },

  filename(req, file, cb) {
    // Use Date.now() to ensure unique filenames
    cb(
      null,
      `${
        formatedCurrentDate +
        file.originalname +
        path.extname(file.originalname)
      }`,
    )
  },
})

const videoUpoalder = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 * 1024, // Limit file size to 1 GB
  },
  fileFilter(req, file, cb) {
    // videoUpoalder only mp4 and mkv format
    if (!file.originalname.match(/\.(mp4|mov|webm|mov|avi)$/)) {
      return cb(
        new Error(
          'Please videoUpoalder a video formate mp4|mov|webm|mov|avi|mkv',
        ),
      )
    }
    cb(null, true)
  },
})

export default videoUpoalder
