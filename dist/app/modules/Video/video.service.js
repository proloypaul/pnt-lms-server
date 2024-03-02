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
exports.videoServices = void 0
const prisma_1 = __importDefault(require('../../shared/prisma'))
const createVideoToDB = videoData =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.video.create({
      data: videoData,
    })
    return result
  })
const getAllVideoToDB = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.video.findMany({
      include: {
        chapter: true,
      },
    })
    return result
  })
// get single video
const getSingleVideoToDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.video.findUnique({
      where: {
        id: id,
      },
    })
    return result
  })
// update lession Data
const updateLessionDataToDB = (id, lessionData) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.video.update({
      where: {
        id: id,
      },
      data: lessionData,
    })
    return result
  })
// delete single lession
const deleteSingleLessionToDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.video.delete({
      where: {
        id: id,
      },
    })
    return result
  })
exports.videoServices = {
  createVideoToDB,
  getAllVideoToDB,
  getSingleVideoToDB,
  updateLessionDataToDB,
  deleteSingleLessionToDB,
}
