import { CommentType } from 'shared/types/Comment.types';

export type CommentsListProps = {
  data: CommentType[];
  handleCommentRating: (commentId: number, vote: number) => void;
};
