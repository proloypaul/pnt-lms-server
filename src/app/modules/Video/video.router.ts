import express from 'express'
import { videoController } from './video.controller'

const router = express.Router()

router.post('/create-video', videoController.createVideo)
router.get('/', videoController.getAllVideo)
router.post('/upload-lessionVideo', videoController.uploadLessionVideo)
export const videoRoutes = router
