import express from 'express'
import { courseRoutes } from '../modules/Course/course.router'
import { chapterRoutes } from '../modules/Chapter/chapter.router'
import { videoRoutes } from '../modules/Video/chapter.router'

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
]

moduleRoutes.forEach(routes => router.use(routes.path, routes.route))

export default router
