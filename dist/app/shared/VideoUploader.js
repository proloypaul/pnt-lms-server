'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const multer_1 = __importDefault(require('multer'))
const date_fns_1 = require('date-fns')
const fs_1 = __importDefault(require('fs'))
const path_1 = __importDefault(require('path'))
// Set up Multer storage configuration
const currentDate = Date.now()
const formatedCurrentDate = (0, date_fns_1.format)(
  currentDate,
  'dd-MM-yy-HH-mm-ss',
)
const storage = multer_1.default.diskStorage({
  destination(req, file, cb) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fs_1.default.mkdir('./videos/', err => {
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
        path_1.default.extname(file.originalname)
      }`,
    )
  },
})
const videoUpoalder = (0, multer_1.default)({
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
exports.default = videoUpoalder
