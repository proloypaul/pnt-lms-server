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
]
moduleRoutes.forEach(routes => router.use(routes.path, routes.route))
exports.default = router
