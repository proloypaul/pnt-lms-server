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
exports.studentController = void 0
const catchAsync_1 = __importDefault(require('../../shared/catchAsync'))
const http_status_codes_1 = require('http-status-codes')
const student_service_1 = require('./student.service')
const createStudent = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const studentData = __rest(req.body, [])
    const role = 'student'
    const updateStudentData = Object.assign(Object.assign({}, studentData), {
      role: role,
    })
    if (
      studentData === null || studentData === void 0
        ? void 0
        : studentData.email
    ) {
      console.log('we are sent an verification email to your email')
    }
    if (
      studentData === null || studentData === void 0
        ? void 0
        : studentData.number
    ) {
      console.log('we are sent you a verification code to your number')
    }
    const student =
      yield student_service_1.studentService.createStudentToDB(
        updateStudentData,
      )
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'Student created Successfully',
      data: student,
    })
  }),
)
const getAllStudent = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const students = yield student_service_1.studentService.getAllStudentToDB()
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'get all student Successfully',
      data: students,
    })
  }),
)
const getSingleStudent = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const student =
      yield student_service_1.studentService.getSingleStudentToDB(id)
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'get single student Successfully',
      data: student,
    })
  }),
)
// update instructor data
const updateStudent = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const studentData = __rest(req.body, [])
    const student = yield student_service_1.studentService.updateStudentToDB(
      id,
      studentData,
    )
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'updated student data successfully',
      data: student,
    })
  }),
)
const deleteSingleStudent = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const student =
      yield student_service_1.studentService.deleteSingleStudentToDB(id)
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'Delete single student Successfully',
      data: student,
    })
  }),
)
exports.studentController = {
  createStudent,
  updateStudent,
  getAllStudent,
  getSingleStudent,
  deleteSingleStudent,
}
