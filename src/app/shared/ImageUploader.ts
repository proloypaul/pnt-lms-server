import multer from 'multer'
import { format } from 'date-fns'
import fs from 'fs'
import path from 'path'

// Set up Multer storage configuration
const currentDate = Date.now()
const formatedCurrentDate = format(currentDate, 'dd-MM-yy')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    fs.mkdir('./uploads/', err => {
      cb(null, './uploads/')
      console.log('mkdir error', err)
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

const imageUploader = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Limit file size to 10MB
  },
  fileFilter(req, file, cb) {
    // imageUploader only mp4 and mkv format
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error('Please imageUploader a video'))
    }
    cb(null, true)
  },
})

export default imageUploader