import express from 'express'
import { ChapterController } from './chapter.controller'

const router = express.Router()

router.post('/create-chapter', ChapterController.createChapter)
router.get('/', ChapterController.getAllChapter)
router.get('/:id', ChapterController.getSingleChapter)
router.patch('/:id', ChapterController.updateChapterData)
router.delete('/:id', ChapterController.deleteSingleChapter)

export const chapterRoutes = router
