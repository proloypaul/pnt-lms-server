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
exports.CourseController = void 0
const catchAsync_1 = __importDefault(require('../../shared/catchAsync'))
const course_service_1 = require('./course.service')
const http_status_codes_1 = require('http-status-codes')
const sendResponse_1 = __importDefault(require('../../shared/sendResponse'))
const pick_1 = __importDefault(require('../../shared/pick'))
const paginationConstaint_1 = require('../../constaint/paginationConstaint')
const course_contraint_1 = require('./course.contraint')
const createCourse = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const courseData = __rest(req.body, [])
    const course =
      yield course_service_1.CourseServices.createCourseToDB(courseData)
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'Course created Successfully',
      data: course,
    })
  }),
)
const getAllCourses = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const paginationOptions = (0, pick_1.default)(
      req.query,
      paginationConstaint_1.paginationFields,
    )
    const filtersOptions = (0, pick_1.default)(
      req.query,
      course_contraint_1.courseFilterableFields,
    )
    const result = yield course_service_1.CourseServices.getAllCourseToDB(
      paginationOptions,
      filtersOptions,
    )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      message: 'get all courses Successfully',
      meta: result.meta,
      data: result.data,
    })
  }),
)
const getSingleCourse = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const singleCourseData =
      yield course_service_1.CourseServices.getSingleCourseToDB(id)
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'get single course successfully',
      data: singleCourseData,
    })
  }),
)
const updateCourseData = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const courseData = __rest(req.body, [])
    const course = yield course_service_1.CourseServices.updateCourseDataToDB(
      id,
      courseData,
    )
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'updated course data successfully',
      data: course,
    })
  }),
)
const deleteSingleCourse = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const singleCourseData =
      yield course_service_1.CourseServices.deleteSingleCourseToDB(id)
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'Delete single course successfully',
      data: singleCourseData,
    })
  }),
)
exports.CourseController = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourseData,
  deleteSingleCourse,
}
