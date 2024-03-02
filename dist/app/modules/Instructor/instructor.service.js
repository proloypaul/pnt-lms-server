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
exports.instructorService = void 0
const prisma_1 = __importDefault(require('../../shared/prisma'))
const createInstructorToDB = instructorData =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.instructor.create({
      data: instructorData,
    })
    return result
  })
// update instructor data
const updateInstructorDataToDB = (id, instructor) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.instructor.update({
      where: {
        id: id,
      },
      data: instructor,
    })
    return result
  })
const getAllInstructorToDB = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.instructor.findMany({})
    return result
  })
// get single instructor
const getSingleInstructorToDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.instructor.findUnique({
      where: {
        id: id,
      },
    })
    return result
  })
// delete single instructor
const deleteSingleInstructorToDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.instructor.delete({
      where: {
        id: id,
      },
    })
    return result
  })
exports.instructorService = {
  createInstructorToDB,
  getAllInstructorToDB,
  updateInstructorDataToDB,
  getSingleInstructorToDB,
  deleteSingleInstructorToDB,
}
