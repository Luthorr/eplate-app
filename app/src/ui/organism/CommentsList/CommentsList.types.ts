import { CommentType } from 'shared/interfaces/Comment.types';

export type CommentsListProps = {
  data: CommentType[];
  handleCommentRating: (commentId: number, vote: number) => void;
};
