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
exports.quizeServices = void 0
const prisma_1 = __importDefault(require('../../shared/prisma'))
const createQuizeToDB = quizeData =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.quize.create({
      data: quizeData,
    })
    return result
  })
const getAllQuizeToDB = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.quize.findMany({
      include: {
        questions: true,
      },
    })
    return result
  })
const getSingleQuizeToDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.quize.findUnique({
      where: {
        id: id,
      },
      include: {
        questions: true,
      },
    })
    return result
  })
exports.quizeServices = {
  createQuizeToDB,
  getAllQuizeToDB,
  getSingleQuizeToDB,
}
