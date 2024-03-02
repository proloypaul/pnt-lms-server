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
exports.penddingEnrollCourseServices = void 0
const prisma_1 = __importDefault(require('../../shared/prisma'))
const createPenddingEnrolledCourseToDB = penddingEnrollData =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.panddingEnrolledModel.create({
      data: penddingEnrollData,
    })
    return result
  })
const getAllPenddingEnrolledCourseToDB = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.panddingEnrolledModel.findMany({
      include: {
        course: true,
      },
    })
    return result
  })
const deletePenddingEnrollCourseToDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.panddingEnrolledModel.delete({
      where: {
        id: id,
      },
    })
    return result
  })
exports.penddingEnrollCourseServices = {
  createPenddingEnrolledCourseToDB,
  getAllPenddingEnrolledCourseToDB,
  deletePenddingEnrollCourseToDB,
}
