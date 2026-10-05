import express from 'express'
import { videoController } from './video.controller'

const router = express.Router()

router.post('/create-video', videoController.createVideo)
router.get('/', videoController.getAllVideo)
router.get('/:id', videoController.getSingleLessionData)
router.patch('/:id', videoController.updateLessionData)
router.delete('/:id', videoController.deleteSingleLession)
router.post('/upload-lessionVideo', videoController.uploadLessionVideo)

export const videoRoutes = router
