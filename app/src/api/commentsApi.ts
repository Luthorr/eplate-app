import api from './base';

export const getComments = async () => {
  const { data } = await api.get('/comments');
  return data;
};

export const postComment = async () => {};

export const deleteComment = async () => {};
