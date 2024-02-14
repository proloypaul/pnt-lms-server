import express from 'express'
import { ChapterController } from './chapter.controller'

const router = express.Router()

router.post('/create-chapter', ChapterController.createChapter)
router.get('/', ChapterController.getAllChapter)

export const chapterRoutes = router
