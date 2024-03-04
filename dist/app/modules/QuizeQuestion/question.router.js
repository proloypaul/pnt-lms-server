'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.questionRoutes = void 0
const express_1 = __importDefault(require('express'))
const question_controller_1 = require('./question.controller')
const router = express_1.default.Router()
router.post(
  '/create-question',
  question_controller_1.questionController.createQuestion,
)
router.get('/', question_controller_1.questionController.getAllQuestion)
exports.questionRoutes = router
