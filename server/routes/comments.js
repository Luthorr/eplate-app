import express from 'express';
import {
  getComments,
  getSpecificPlateComments as getSpecificPlateComments,
  createComment,
  deleteComment,
  getPlateCommentsByText,
} from '../controllers/commentsController.js';

const router = express.Router();

router.route('/').get(getComments).post(createComment);

router.route('/plate/:id').get(getSpecificPlateComments);

router.route('/plate/term/:searchTerm').get(getPlateCommentsByText);

router.route('/:id').delete(deleteComment);

export default router;
