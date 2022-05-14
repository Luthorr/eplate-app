/* eslint-disable implicit-arrow-linebreak */
import { CommentType } from 'shared/interfaces/Comment.types';
import api from './base';

export const getComments = async (): Promise<CommentType[]> => {
  const { data } = await api.get('/comments');
  return data;
};

export const rateComment = async (newRating: {
  userId: number;
  commentId: number;
  vote: number;
}): Promise<{ status: number }> => api.post('/comments/rate', newRating);

export const postComment = async () => {};

export const deleteComment = async () => {};
