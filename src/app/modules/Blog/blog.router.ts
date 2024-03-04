import express from 'express'
import { blogController } from './blog.controller'

const router = express.Router()

router.post('/create-blog', blogController.createBlog)
router.get('/', blogController.getAllBlog)
router.get('/:id', blogController.getSingleBlog)
router.patch('/:id', blogController.updateBlogData)

export const blogRoutes = router
