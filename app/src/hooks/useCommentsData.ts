import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  getComments,
  getSinglePlateComments,
  postComment,
  rateComment,
} from 'api/commentsApi';
import {
  CommentDetailsType,
  CommentType,
} from 'shared/interfaces/Comment.types';
import Opinion from 'constants/Opinion';

export const useCommentsData = () => useQuery('comments', getComments);

export const useCommentData = (id: string) =>
  useQuery(['comments', id], () => getSinglePlateComments(id));

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

export const useAddCommentDetailsPage = (id: string) => {
  const queryClient = useQueryClient();

  const { mutate: commentPostMutation } = useMutation(postComment, {
    onMutate: async (postedComment) => {
      await queryClient.cancelQueries(['comments', id]);
      const previousComments = queryClient.getQueryData<CommentDetailsType>([
        'comments',
        id,
      ]);

      if (previousComments) {
        const objectToSet = {
          ...previousComments,
          statistics: {
            ...previousComments.statistics,
            negative:
              postedComment.opinionId === Opinion.Negative
                ? previousComments.statistics.negative + 1
                : previousComments.statistics.negative,
            positive:
              postedComment.opinionId === Opinion.Positive
                ? previousComments.statistics.positive + 1
                : previousComments.statistics.positive,
          },
          data: [
            {
              ...postedComment,
              id: 122931,
              nick: 'user',
              avatar: null,
              votes: 0,
              plateId: parseInt(id, 10),
            },
            ...previousComments.data,
          ],
        };

        queryClient.setQueryData<CommentDetailsType>(
          ['comments', id],
          objectToSet,
        );
      }

      return { previousComments };
    },
    onError: (error, postedComment, context: any) => {
      queryClient.setQueryData(['comments', id], context?.previousComments);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['comments', id]);
    },
  });

  return { commentPostMutation };
};

export const useAddCommentDetailsRating = (id: string) => {
  const queryClient = useQueryClient();

  const { mutate: commentRatingMutation } = useMutation(rateComment, {
    onMutate: async (ratedComment) => {
      await queryClient.cancelQueries(['comments', id]);
      const previousComments = queryClient.getQueryData<CommentDetailsType>([
        'comments',
        id,
      ]);

      if (previousComments) {
        queryClient.setQueryData<CommentDetailsType>(['comments', id], () => ({
          ...previousComments,
          data: previousComments.data.map((comm) =>
            comm.id === ratedComment.commentId
              ? { ...comm, votes: comm.votes + ratedComment.vote }
              : comm,
          ),
        }));
      }
      return { previousComments };
    },
    onError: (error, ratedComment, context: any) => {
      queryClient.setQueryData(['comments', id], context?.previousComments);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['comments']);
    },
  });

  return { commentRatingMutation };
};
