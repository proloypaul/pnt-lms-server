'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.quizeRoutes = void 0
const express_1 = __importDefault(require('express'))
const quize_controller_1 = require('./quize.controller')
const router = express_1.default.Router()
router.post('/create-quize', quize_controller_1.quizeController.createQuize)
router.get('/', quize_controller_1.quizeController.getAllQuize)
router.get('/:id', quize_controller_1.quizeController.getSingleQuize)
exports.quizeRoutes = router
