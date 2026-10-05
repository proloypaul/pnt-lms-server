'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.videoRoutes = void 0
const express_1 = __importDefault(require('express'))
const video_controller_1 = require('./video.controller')
const router = express_1.default.Router()
router.post('/create-video', video_controller_1.videoController.createVideo)
router.get('/', video_controller_1.videoController.getAllVideo)
router.get('/:id', video_controller_1.videoController.getSingleLessionData)
router.patch('/:id', video_controller_1.videoController.updateLessionData)
router.delete('/:id', video_controller_1.videoController.deleteSingleLession)
router.post(
  '/upload-lessionVideo',
  video_controller_1.videoController.uploadLessionVideo,
)
exports.videoRoutes = router
