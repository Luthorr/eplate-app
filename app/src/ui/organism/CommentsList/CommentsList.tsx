import Comment from 'ui/molecules/Comment/Comment';
import { CommentType } from 'shared/types/Comment.types';

import { CommentsListProps } from './CommentsList.types';

const CommentsList = ({ data, handleCommentRating }: CommentsListProps) => (
  <>
    {data.map(
      ({
        id,
        nick,
        avatar,
        votes,
        date,
        plateText,
        plateId,
        commentMsg,
        opinionId,
      }: CommentType) => (
        <Comment
          key={id}
          id={id}
          nick={nick}
          avatar={avatar}
          votes={votes}
          date={date}
          plateText={plateText}
          plateId={plateId}
          commentMsg={commentMsg}
          opinionId={opinionId}
          handleCommentRating={handleCommentRating}
        />
      ),
    )}
  </>
);
export default CommentsList;
