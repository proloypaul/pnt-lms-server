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
exports.studentService = void 0
const prisma_1 = __importDefault(require('../../shared/prisma'))
const createStudentToDB = studentData =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.student.create({
      data: studentData,
    })
    return result
  })
const getAllStudentToDB = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.student.findMany({})
    return result
  })
// get single instructor
const getSingleStudentToDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.student.findUnique({
      where: {
        id: id,
      },
    })
    return result
  })
// update instructor data
const updateStudentToDB = (id, student) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.student.update({
      where: {
        id: id,
      },
      data: student,
    })
    return result
  })
// delete single instructor
const deleteSingleStudentToDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.student.delete({
      where: {
        id: id,
      },
    })
    return result
  })
exports.studentService = {
  createStudentToDB,
  getAllStudentToDB,
  getSingleStudentToDB,
  updateStudentToDB,
  deleteSingleStudentToDB,
}
