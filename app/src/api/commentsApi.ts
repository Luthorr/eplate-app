/* eslint-disable implicit-arrow-linebreak */
import {
  CommentDetailsType,
  CommentType,
} from 'shared/interfaces/Comment.types';
import api from './base';

export const getComments = async (): Promise<CommentType[]> => {
  const { data } = await api.get('/comments');
  return data;
};

export const getSinglePlateComments = async (
  id: string | number,
): Promise<CommentDetailsType> => {
  const { data } = await api.get(`/comments/plate/${id}`);
  return data;
};

export const rateComment = async (newRating: {
  userId: number;
  commentId: number;
  vote: number;
}): Promise<{ status: number }> => api.post('/comments/rate', newRating);

export const postComment = async (newComment: {
  userId: number;
  plateText: string;
  commentMsg: string;
  opinionId: number;
  date: string;
}) => {
  api.post('/comments', newComment);
};

export const getCommentsByValue = async (
  value: string,
): Promise<CommentType[]> => {
  const { data } = await api.get(`/comments/plate/term/${value}`);
  return data;
};

export const deleteComment = async () => {};
