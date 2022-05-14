export type CommentType = {
  id: number;
  nick: string;
  avatar: string;
  votes: number;
  date: string;
  plateText: string;
  plateId: number;
  commentMsg: string;
};
export type CommentProps = CommentType & {
  handleCommentRating: (commentId: number, vote: number) => void;
};
