import express from 'express'
import { courseRoutes } from '../modules/Course/course.router'

const router = express.Router()

const moduleRoutes: any[] = [
  {
    path: '/courses',
    route: courseRoutes,
  },
]

moduleRoutes.forEach(routes => router.use(routes.path, routes.route))

export default router
