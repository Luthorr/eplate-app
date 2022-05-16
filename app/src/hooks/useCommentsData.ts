import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  getComments,
  getSinglePlateComments,
  rateComment,
} from 'api/commentsApi';
import { CommentType } from 'shared/interfaces/Comment.types';

export const useCommentsData = () => useQuery('comments', getComments);

export const useCommentData = (id: string | number) =>
  useQuery(['comment', id], () => getSinglePlateComments(id));

export const useAddCommentRating = () => {
  const queryClient = useQueryClient();

  const { mutate: commentRatingMutation } = useMutation(rateComment, {
    onMutate: async (ratedComment) => {
      await queryClient.cancelQueries('comments');
      const previousComments =
        queryClient.getQueryData<CommentType[]>('comments');

      if (previousComments) {
        queryClient.setQueryData<CommentType[]>('comments', () =>
          previousComments.map((currCom) =>
            currCom.id === ratedComment.commentId
              ? { ...currCom, votes: currCom.votes + ratedComment.vote }
              : currCom,
          ),
        );
      }
      return { previousComments };
    },
    onError: (error, ratedComment, context: any) => {
      queryClient.setQueryData('comments', context?.previousComments);
    },
    onSettled: () => {
      queryClient.invalidateQueries('comments');
    },
  });

  return { commentRatingMutation };
};
