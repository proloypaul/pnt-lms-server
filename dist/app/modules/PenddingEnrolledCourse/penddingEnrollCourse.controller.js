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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.penddingEnrolledCourseController = void 0
const catchAsync_1 = __importDefault(require('../../shared/catchAsync'))
const penddingEnrollCourse_service_1 = require('./penddingEnrollCourse.service')
const http_status_codes_1 = require('http-status-codes')
const createPenddingEnrollCourse = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const penddingEnrolledCourseData = req.body
    // firstly check user are authenticated or not
    // if user are authenticated then they can Enroll the course
    // when we are build payment system then we can create another model and relation with this pendding model with confirmorder model
    // now we are set isEnroll true without implement payment system
    const updatedCourseEnrolledData = Object.assign(
      Object.assign({}, penddingEnrolledCourseData),
      { isEnrolled: true },
    )
    const penddingEnrollCourse =
      yield penddingEnrollCourse_service_1.penddingEnrollCourseServices.createPenddingEnrolledCourseToDB(
        updatedCourseEnrolledData,
      )
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'pendding course created Successfully',
      data: penddingEnrollCourse,
    })
  }),
)
const getAllPenddingEnrolledCourse = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const peddingEnrollCourseData =
      yield penddingEnrollCourse_service_1.penddingEnrollCourseServices.getAllPenddingEnrolledCourseToDB()
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'get all penddingEnrolledCourse Successfully',
      data: peddingEnrollCourseData,
    })
  }),
)
const deleteSinglePenddingEnrolledCourse = (0, catchAsync_1.default)(
  (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const { id } = req.params
      const penddingEnrollCourse =
        yield penddingEnrollCourse_service_1.penddingEnrollCourseServices.deletePenddingEnrollCourseToDB(
          id,
        )
      res.status(http_status_codes_1.StatusCodes.OK).json({
        status: true,
        message: 'pendding Enroll course deleted successfully',
        data: penddingEnrollCourse,
      })
    }),
)
exports.penddingEnrolledCourseController = {
  createPenddingEnrollCourse,
  getAllPenddingEnrolledCourse,
  deleteSinglePenddingEnrolledCourse,
}
