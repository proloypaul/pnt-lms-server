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
exports.insturctorController = void 0
const catchAsync_1 = __importDefault(require('../../shared/catchAsync'))
const instructor_service_1 = require('./instructor.service')
const http_status_codes_1 = require('http-status-codes')
const ImageUploader_1 = __importDefault(require('../../shared/ImageUploader'))
const createInstructor = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const instructorData = __rest(
      req.body,
      // console.log("course data", instructorData);
      [],
    )
    // console.log("course data", instructorData);
    const instructor =
      yield instructor_service_1.instructorService.createInstructorToDB(
        instructorData,
      )
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'Instructor created Successfully',
      data: instructor,
    })
  }),
)
// update instructor data
const updateInstructorData = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const instructorData = __rest(req.body, [])
    const instructor =
      yield instructor_service_1.instructorService.updateInstructorDataToDB(
        id,
        instructorData,
      )
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'updated instructor data successfully',
      data: instructor,
    })
  }),
)
const getAllInstructor = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const instructors =
      yield instructor_service_1.instructorService.getAllInstructorToDB()
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'get all instructor Successfully',
      data: instructors,
    })
  }),
)
const getSingleInstructor = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const instructor =
      yield instructor_service_1.instructorService.getSingleInstructorToDB(id)
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'get single instructor Successfully',
      data: instructor,
    })
  }),
)
const deleteSingleInstructor = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const instructor =
      yield instructor_service_1.instructorService.deleteSingleInstructorToDB(
        id,
      )
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'Delete single instructor Successfully',
      data: instructor,
    })
  }),
)
// upload Instuctor Image into server
const uploadInstructorImage = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const uploadedFiles = ImageUploader_1.default.single('file')
    uploadedFiles(req, res, error => {
      var _a, _b, _c, _d
      // console.log('upload out put ', req.file)
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
          message: 'Image Uploaded Successfully',
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
exports.insturctorController = {
  createInstructor,
  updateInstructorData,
  getAllInstructor,
  getSingleInstructor,
  deleteSingleInstructor,
  uploadInstructorImage,
}
