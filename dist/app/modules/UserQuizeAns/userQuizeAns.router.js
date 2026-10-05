'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.userQuizeAnsRoutes = void 0
const express_1 = __importDefault(require('express'))
const userQuizeAns_controller_1 = require('./userQuizeAns.controller')
const router = express_1.default.Router()
router.post(
  '/create-userQuizeAns',
  userQuizeAns_controller_1.userQuizeAnsController.createUserQuizeAns,
)
router.get('/', userQuizeAns_controller_1.userQuizeAnsController.getAllQuizAns)
router.get(
  '/:id',
  userQuizeAns_controller_1.userQuizeAnsController.getSingleQuizAns,
)
router.get(
  '/userEmail/:email',
  userQuizeAns_controller_1.userQuizeAnsController.getQuizeAnsUsingEmail,
)
router.delete(
  '/:id',
  userQuizeAns_controller_1.userQuizeAnsController.deleteSingelQuizeAns,
)
exports.userQuizeAnsRoutes = router
