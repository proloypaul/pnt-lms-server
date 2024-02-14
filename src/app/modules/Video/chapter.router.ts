import express from 'express'
import { videoController } from './chapter.controller'

const router = express.Router()

router.post('/create-video', videoController.createVideo)
router.get('/', videoController.getAllVideo)

export const videoRoutes = router
