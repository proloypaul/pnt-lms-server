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
exports.chapterServices = void 0
const prisma_1 = __importDefault(require('../../shared/prisma'))
const createChapterToDB = chapterData =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.chapter.create({
      data: chapterData,
    })
    return result
  })
const getAllChapterToDB = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.chapter.findMany({
      include: {
        videos: true,
        course: true,
      },
    })
    return result
  })
const getSingleChapterToDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.chapter.findUnique({
      where: {
        id: id,
      },
      include: {
        videos: true,
      },
    })
    return result
  })
// update chapter data
const updateChapterDataToDB = (id, chapterData) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.chapter.update({
      where: {
        id: id,
      },
      data: chapterData,
    })
    return result
  })
// delete single instructor
const deleteSingleChapterToDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.video.deleteMany({
      where: {
        chapterId: id,
      },
    })
    // console.log('chapter videos data', chapterVideos)
    const result = yield prisma_1.default.chapter.delete({
      where: {
        id: id,
      },
    })
    return result
  })
exports.chapterServices = {
  createChapterToDB,
  getAllChapterToDB,
  getSingleChapterToDB,
  updateChapterDataToDB,
  deleteSingleChapterToDB,
}
