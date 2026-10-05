'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.instructorRoutes = void 0
const express_1 = __importDefault(require('express'))
const instructor_controller_1 = require('./instructor.controller')
const router = express_1.default.Router()
router.post(
  '/create-instructor',
  instructor_controller_1.insturctorController.createInstructor,
)
router.post(
  '/upload-instructorImage',
  instructor_controller_1.insturctorController.uploadInstructorImage,
)
router.get('/', instructor_controller_1.insturctorController.getAllInstructor)
router.patch(
  '/:id',
  instructor_controller_1.insturctorController.updateInstructorData,
)
router.get(
  '/:id',
  instructor_controller_1.insturctorController.getSingleInstructor,
)
router.delete(
  '/:id',
  instructor_controller_1.insturctorController.deleteSingleInstructor,
)
exports.instructorRoutes = router
