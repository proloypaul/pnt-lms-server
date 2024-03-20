'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const course_router_1 = require('../modules/Course/course.router')
const chapter_router_1 = require('../modules/Chapter/chapter.router')
const video_router_1 = require('../modules/Video/video.router')
const instructor_router_1 = require('../modules/Instructor/instructor.router')
const reviewer_router_1 = require('../modules/Reviewer/reviewer.router')
const penddingEnrollCourse_router_1 = require('../modules/PenddingEnrolledCourse/penddingEnrollCourse.router')
const quize_router_1 = require('../modules/Quize/quize.router')
const blog_router_1 = require('../modules/Blog/blog.router')
const question_router_1 = require('../modules/QuizeQuestion/question.router')
const student_router_1 = require('../modules/Student/student.router')
const auth_router_1 = require('../modules/Auth/auth.router')
const userQuizeAns_router_1 = require('../modules/UserQuizeAns/userQuizeAns.router')
const router = express_1.default.Router()
const moduleRoutes = [
  {
    path: '/courses',
    route: course_router_1.courseRoutes,
  },
  {
    path: '/chapters',
    route: chapter_router_1.chapterRoutes,
  },
  {
    path: '/videos',
    route: video_router_1.videoRoutes,
  },
  {
    path: '/quize',
    route: quize_router_1.quizeRoutes,
  },
  {
    path: '/question',
    route: question_router_1.questionRoutes,
  },
  {
    path: '/instructors',
    route: instructor_router_1.instructorRoutes,
  },
  {
    path: '/students',
    route: student_router_1.studentRoutes,
  },
  {
    path: '/reviews',
    route: reviewer_router_1.reviewerRouters,
  },
  {
    path: '/penddingEnrolledCourse',
    route: penddingEnrollCourse_router_1.penddingEnrolledCourseRoutes,
  },
  {
    path: '/blog',
    route: blog_router_1.blogRoutes,
  },
  {
    path: '/userQuizeAns',
    route: userQuizeAns_router_1.userQuizeAnsRoutes,
  },
  {
    path: '/auth',
    route: auth_router_1.authRoutes,
  },
]
moduleRoutes.forEach(routes => router.use(routes.path, routes.route))
exports.default = router
