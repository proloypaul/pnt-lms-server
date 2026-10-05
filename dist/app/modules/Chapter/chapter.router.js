'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.chapterRoutes = void 0
const express_1 = __importDefault(require('express'))
const chapter_controller_1 = require('./chapter.controller')
const router = express_1.default.Router()
router.post(
  '/create-chapter',
  chapter_controller_1.ChapterController.createChapter,
)
router.get('/', chapter_controller_1.ChapterController.getAllChapter)
router.get('/:id', chapter_controller_1.ChapterController.getSingleChapter)
router.patch('/:id', chapter_controller_1.ChapterController.updateChapterData)
router.delete(
  '/:id',
  chapter_controller_1.ChapterController.deleteSingleChapter,
)
exports.chapterRoutes = router
