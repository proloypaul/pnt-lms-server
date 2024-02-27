import express from 'express'
import { courseRoutes } from '../modules/Course/course.router'
import { chapterRoutes } from '../modules/Chapter/chapter.router'
import { videoRoutes } from '../modules/Video/video.router'
import { instructorRoutes } from '../modules/Instructor/instructor.router'
import { reviewerRouters } from '../modules/Reviewer/reviewer.router'
import { penddingEnrolledCourseRoutes } from '../modules/PenddingEnrolledCourse/penddingEnrollCourse.router'

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
    path: '/instructors',
    route: instructorRoutes,
  },
  {
    path: '/reviews',
    route: reviewerRouters,
  },
  {
    path: '/penddingEnrolledCourse',
    route: penddingEnrolledCourseRoutes,
  },
]

moduleRoutes.forEach(routes => router.use(routes.path, routes.route))

export default router
