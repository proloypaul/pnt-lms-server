import express from 'express'
import { blogController } from './blog.controller'

const router = express.Router()

router.post('/create-blog', blogController.createBlog)
router.get('/', blogController.getAllBlog)
router.get('/:id', blogController.getSingleBlog)

export const blogRoutes = router
