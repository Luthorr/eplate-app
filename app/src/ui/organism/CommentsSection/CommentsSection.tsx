import Comment from 'ui/organism/Comment/Comment';
import { CommentType } from 'shared/interfaces/Comment.types';
import { useAddCommentRating, useCommentsData } from 'hooks/useCommentsData';
import { CommentsSectionProps } from './CommentsSection.types';

const CommentsSection = ({ visiblePostsLimit }: CommentsSectionProps) => {
  const { data, isLoading, isError, isIdle } = useCommentsData();
  const { mutate: commentMutation } = useAddCommentRating();

  if (isLoading || isIdle) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const dataToPresent = visiblePostsLimit
    ? data.slice(0, visiblePostsLimit)
    : data;

  const handleCommentRating = (commentId: number, vote: number): void => {
    const userId = 1; // in future obtained from context api
    commentMutation({ userId, commentId, vote });
  };

  return (
    <>
      {dataToPresent.map(
        ({
          id,
          nick,
          avatar,
          votes,
          date,
          plateText,
          plateId,
          commentMsg,
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
            handleCommentRating={handleCommentRating}
          />
        ),
      )}
    </>
  );
};

export default CommentsSection;
