import express from 'express'
import { courseRoutes } from '../modules/Course/course.router'
import { chapterRoutes } from '../modules/Chapter/chapter.router'
import { videoRoutes } from '../modules/Video/video.router'
import { instructorRoutes } from '../modules/Instructor/instructor.router'
import { reviewerRouters } from '../modules/Reviewer/reviewer.router'
import { penddingEnrolledCourseRoutes } from '../modules/PenddingEnrolledCourse/penddingEnrollCourse.router'
import { quizeRoutes } from '../modules/Quize/quize.router'
import { blogRoutes } from '../modules/Blog/blog.router'
import { questionRoutes } from '../modules/QuizeQuestion/question.router'
import { studentRoutes } from '../modules/Student/student.router'
import { authRoutes } from '../modules/Auth/auth.router'
import { userQuizeAnsRoutes } from '../modules/UserQuizeAns/userQuizeAns.router'

const router = express.Router()

const moduleRoutes: any[] = [
  {
    path: '/courses',
    route: courseRoutes,
  },
  {
    path: '/chapters',
    route: chapterRoutes,
  },
  {
    path: '/videos',
    route: videoRoutes,
  },
  {
    path: '/quize',
    route: quizeRoutes,
  },
  {
    path: '/question',
    route: questionRoutes,
  },
  {
    path: '/instructors',
    route: instructorRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/reviews',
    route: reviewerRouters,
  },
  {
    path: '/penddingEnrolledCourse',
    route: penddingEnrolledCourseRoutes,
  },
  {
    path: '/blog',
    route: blogRoutes,
  },
  {
    path: '/userQuizeAns',
    route: userQuizeAnsRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
]

moduleRoutes.forEach(routes => router.use(routes.path, routes.route))

export default router
