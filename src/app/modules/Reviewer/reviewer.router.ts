import express from 'express'
import { reviewerController } from './reviewer.controller'

const router = express.Router()

router.post('/create-review', reviewerController.createReview)
router.get('/', reviewerController.getAllReviewer)

export const reviewerRouters = router
