export type CommentType = {
  id: number;
  nick: string;
  avatar: string | null;
  votes: number;
  date: string;
  plateText: string;
  plateId: number;
  commentMsg: string;
  opinionId: number;
};

export type CommentProps = CommentType & {
  handleCommentRating: (commentId: number, vote: number) => void;
};

export type CommentDetailsType = {
  data: CommentType[];
  statistics: { plateText: string; positive: number; negative: number };
};
