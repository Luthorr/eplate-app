import express from 'express';
import {
  getComments,
  getPlateComments,
  createComment,
  deleteComment,
} from '../controllers/commentsController.js';

const router = express.Router();

router.route('/').get(getComments).post(createComment);

router.route('/plate/:id').get(getPlateComments);

router.route('/:id').delete(deleteComment);

export default router;
