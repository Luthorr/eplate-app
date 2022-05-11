import Comment from 'ui/organism/Comment/Comment';
import { CommentMap } from 'shared/interfaces/Comment.types';
import { getComments } from 'api/commentsApi';
import { useQuery } from 'react-query';
import { CommentsSectionProps } from './CommentsSection.types';

const CommentsSection = ({ visiblePostsLimit }: CommentsSectionProps) => {
  const { data, isLoading, isError } = useQuery(['comments'], getComments);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const dataToPresent = visiblePostsLimit
    ? data.slice(0, visiblePostsLimit)
    : data;

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
        }: CommentMap) => (
          <Comment
            key={id}
            nick={nick}
            avatar={avatar}
            votes={votes}
            date={date}
            plateText={plateText}
            plateId={plateId}
            commentMsg={commentMsg}
          />
        ),
      )}
    </>
  );
};

export default CommentsSection;
