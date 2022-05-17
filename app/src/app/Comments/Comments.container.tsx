import { useAddCommentRating, useCommentsData } from 'hooks/useCommentsData';
import LoadingProcess from 'ui/organism/LoadingProcess/LoadingProcess';
import SiteError from 'ui/organism/SiteError/SiteError';
import CommentsList from 'ui/organism/CommentsList/CommentsList';
import { CommentsContainerProps } from './Comments.container.types';

const CommentsContainer = ({ visibleRecords }: CommentsContainerProps) => {
  const { data, isLoading, isError, isIdle } = useCommentsData();
  const { commentRatingMutation } = useAddCommentRating();

  if (isLoading || isIdle) {
    return <LoadingProcess />;
  }

  if (isError) {
    return <SiteError />;
  }

  const dataToPresent = visibleRecords ? data.slice(0, visibleRecords) : data;

  const handleCommentRating = (commentId: number, vote: number): void => {
    const userId = 1; // in the future obtained from the context api
    commentRatingMutation({ userId, commentId, vote });
  };

  return (
    <CommentsList
      data={dataToPresent}
      handleCommentRating={handleCommentRating}
    />
  );
};

export default CommentsContainer;
