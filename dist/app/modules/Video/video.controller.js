'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.videoController = void 0
const catchAsync_1 = __importDefault(require('../../shared/catchAsync'))
const video_service_1 = require('./video.service')
const VideoUploader_1 = __importDefault(require('../../shared/VideoUploader'))
const http_status_codes_1 = require('http-status-codes')
const createVideo = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const videoData = __rest(req.body, [])
    const video = yield video_service_1.videoServices.createVideoToDB(videoData)
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'Video created Successfully',
      data: video,
    })
  }),
)
const getAllVideo = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const videoData = yield video_service_1.videoServices.getAllVideoToDB()
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'get all video Successfully',
      data: videoData,
    })
  }),
)
const getSingleLessionData = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const video = yield video_service_1.videoServices.getSingleVideoToDB(id)
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'get single lession Successfully',
      data: video,
    })
  }),
)
// update lession data
const updateLessionData = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const lessionData = __rest(req.body, [])
    const lession = yield video_service_1.videoServices.updateLessionDataToDB(
      id,
      lessionData,
    )
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'updated lession data successfully',
      data: lession,
    })
  }),
)
// delete single lession
const deleteSingleLession = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const lession =
      yield video_service_1.videoServices.deleteSingleLessionToDB(id)
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'Delete single lession Successfully',
      data: lession,
    })
  }),
)
// upload Lession video into server videos folder
const uploadLessionVideo = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const uploadedFiles = VideoUploader_1.default.single('file')
    uploadedFiles(req, res, error => {
      var _a, _b, _c, _d
      if (error) {
        // console.log('Error ', error)
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
          success: false,
          message: 'There has an error',
          filePath:
            (_a = req === null || req === void 0 ? void 0 : req.file) ===
              null || _a === void 0
              ? void 0
              : _a.path,
          fileName:
            (_b = req === null || req === void 0 ? void 0 : req.file) ===
              null || _b === void 0
              ? void 0
              : _b.filename,
        })
      } else {
        res.status(http_status_codes_1.StatusCodes.OK).json({
          success: true,
          message: 'Video Uploaded Successfully',
          filePath:
            (_c = req === null || req === void 0 ? void 0 : req.file) ===
              null || _c === void 0
              ? void 0
              : _c.path,
          fileName:
            (_d = req === null || req === void 0 ? void 0 : req.file) ===
              null || _d === void 0
              ? void 0
              : _d.filename,
        })
      }
    })
  }),
)
exports.videoController = {
  createVideo,
  getAllVideo,
  getSingleLessionData,
  updateLessionData,
  deleteSingleLession,
  uploadLessionVideo,
}
