'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.penddingEnrolledCourseRoutes = void 0
const express_1 = __importDefault(require('express'))
const penddingEnrollCourse_controller_1 = require('./penddingEnrollCourse.controller')
const router = express_1.default.Router()
router.post(
  '/create-penddingEnrolledData',
  penddingEnrollCourse_controller_1.penddingEnrolledCourseController
    .createPenddingEnrollCourse,
)
router.get(
  '/',
  penddingEnrollCourse_controller_1.penddingEnrolledCourseController
    .getAllPenddingEnrolledCourse,
)
router.delete(
  '/:id',
  penddingEnrollCourse_controller_1.penddingEnrolledCourseController
    .deleteSinglePenddingEnrolledCourse,
)
exports.penddingEnrolledCourseRoutes = router
