export interface CommentProps {
  nick: string;
  avatar: string;
  votes: number;
  date: string;
  plateText: string;
  plateId: number;
  commentMsg: string;
}

export interface CommentMap extends CommentProps {
  id: number;
}
