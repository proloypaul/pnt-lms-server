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
exports.ChapterController = void 0
const catchAsync_1 = __importDefault(require('../../shared/catchAsync'))
const chapter_service_1 = require('./chapter.service')
const http_status_codes_1 = require('http-status-codes')
const createChapter = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const chapterData = __rest(
      req.body,
      // console.log("course data", chapterData);
      [],
    )
    // console.log("course data", chapterData);
    const chapter =
      yield chapter_service_1.chapterServices.createChapterToDB(chapterData)
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'Chapter created Successfully',
      data: chapter,
    })
  }),
)
const getAllChapter = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const chaptersData =
      yield chapter_service_1.chapterServices.getAllChapterToDB()
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'get all chapter Successfully',
      data: chaptersData,
    })
  }),
)
const getSingleChapter = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const chapterData =
      yield chapter_service_1.chapterServices.getSingleChapterToDB(id)
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'get single chapter Successfully',
      data: chapterData,
    })
  }),
)
// update chapter data
const updateChapterData = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const chapterData = __rest(req.body, [])
    const chapter =
      yield chapter_service_1.chapterServices.updateChapterDataToDB(
        id,
        chapterData,
      )
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'updated chapter data successfully',
      data: chapter,
    })
  }),
)
const deleteSingleChapter = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const chapter =
      yield chapter_service_1.chapterServices.deleteSingleChapterToDB(id)
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'Delete single chapter Successfully',
      data: chapter,
    })
  }),
)
exports.ChapterController = {
  createChapter,
  getAllChapter,
  getSingleChapter,
  updateChapterData,
  deleteSingleChapter,
}
