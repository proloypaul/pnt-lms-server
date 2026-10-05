'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.reviewerRouters = void 0
const express_1 = __importDefault(require('express'))
const reviewer_controller_1 = require('./reviewer.controller')
const router = express_1.default.Router()
router.post(
  '/create-review',
  reviewer_controller_1.reviewerController.createReview,
)
router.get('/', reviewer_controller_1.reviewerController.getAllReviewer)
exports.reviewerRouters = router
