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

export const useCommentsData = () => useQuery('comments', getComments);

export const useCommentData = (id: string) =>
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

export const useAddComment = () => {
  const queryClient = useQueryClient();

  const { mutate: commentPostMutation } = useMutation(postComment, {
    onMutate: async (postedComment) => {
      await queryClient.cancelQueries(['comment', 1]);
      const previousComments = queryClient.getQueryData<any>(['comment', '1']);

      // console.log('PREV COMMENTS', previousComments);
      // console.log('POSTED COMM', postedComment);

      if (previousComments) {
        queryClient.setQueryData<CommentType[]>('comments', [
          ...previousComments.data,
        ]);
      }

      return { previousComments };
    },
    onError: (error, postedComment, context: any) => {
      queryClient.setQueryData('comments', context?.previousComments);
    },
    onSettled: () => {
      queryClient.invalidateQueries('comments');
    },
  });

  return { commentPostMutation };
};

// TEST

export const useAddCommentDetailsRating = (id: string) => {
  const queryClient = useQueryClient();

  const { mutate: commentRatingMutation } = useMutation(rateComment, {
    onMutate: async (ratedComment) => {
      await queryClient.cancelQueries(['comment', id]);
      const previousComments = queryClient.getQueryData<CommentDetailsType>([
        'comment',
        id,
      ]);

      if (previousComments) {
        queryClient.setQueryData<CommentDetailsType>(['comment', id], () => ({
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
      queryClient.setQueryData(['comment', '1'], context?.previousComments);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['comment', '1']);
    },
  });

  return { commentRatingMutation };
};
