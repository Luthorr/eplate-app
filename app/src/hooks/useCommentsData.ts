import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getComments, rateComment } from 'api/commentsApi';
import { CommentType } from 'shared/interfaces/Comment.types';

export const useCommentsData = () => useQuery('comments', getComments);

export const useAddCommentRating = () => {
  const queryClient = useQueryClient();

  return useMutation(rateComment, {
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
      if (typeof context === 'object') {
        queryClient.setQueryData('comments', context?.previousComments);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries('comments');
    },
  });
};
