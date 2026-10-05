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
exports.userQuizeAnsService = void 0
const prisma_1 = __importDefault(require('../../shared/prisma'))
const createUserQuizeAnsToDB = quizeAnsData =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.userQuizeAns.create({
      data: quizeAnsData,
    })
    return result
  })
const getAllQuizeAnsToDB = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.userQuizeAns.findMany({
      include: {
        takenQuize: {
          include: {
            questions: true,
          },
        },
      },
    })
    return result
  })
// get single instructor
const getSingleQuizeAnsToDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.userQuizeAns.findUnique({
      where: {
        id: id,
      },
      include: {
        takenQuize: {
          include: {
            questions: true,
          },
        },
      },
    })
    return result
  })
const getQuizeAnsUsingEmailToDB = email =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.userQuizeAns.findMany({
      where: {
        email: email,
      },
      include: {
        takenQuize: {
          include: {
            questions: true,
          },
        },
      },
    })
    return result
  })
// update instructor data
// const updateStudentToDB = async (
//   id: string,
//   student: Partial<Student>,
// ): Promise<Student> => {
//   const result = await prisma.student.update({
//     where: {
//       id: id,
//     },
//     data: student,
//   })
//   return result
// }
// delete single instructor
const deleteSingleQuizeAns = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.userQuizeAns.delete({
      where: {
        id: id,
      },
    })
    return result
  })
exports.userQuizeAnsService = {
  createUserQuizeAnsToDB,
  getAllQuizeAnsToDB,
  getSingleQuizeAnsToDB,
  getQuizeAnsUsingEmailToDB,
  deleteSingleQuizeAns,
}
