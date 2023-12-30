import express from 'express'

const router = express.Router()

const moduleRoutes:any[] = [
    // {
    //     path:"",
    //     route: 
    // }
]

moduleRoutes.forEach(routes => router.use(routes.path, routes.route))

export default router;