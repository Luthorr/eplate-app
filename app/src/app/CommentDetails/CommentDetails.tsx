import {
  useAddCommentDetailsRating,
  useAddCommentDetailsPage,
  useCommentData,
} from 'hooks/useCommentsData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import CommentHeadingRow from 'ui/molecules/CommentHeadingRow/CommentHeadingRow';
import CommentsList from 'ui/organism/CommentsList/CommentsList';
import LoadingProcess from 'ui/organism/LoadingProcess/LoadingProcess';
import SiteError from 'ui/organism/SiteError/SiteError';

import StatisticsCard from 'ui/organism/StatisticsCard/StatisticsCard';
import styles from './CommentDetails.module.css';

const CommentDetails = () => {
  const { id: paramId } = useParams();
  const { commentPostMutation } = useAddCommentDetailsPage(paramId || '0');
  const { data, isLoading, isError, isIdle } = useCommentData(paramId || '0');
  const { commentRatingMutation } = useAddCommentDetailsRating(paramId || '0');
  if (isLoading || isIdle) {
    return <LoadingProcess />;
  }

  if (isError) {
    return <SiteError />;
  }

  const handleCommentRating = (commentId: number, vote: number): void => {
    const userId = 1; // in the future obtained from the context api
    commentRatingMutation({ userId, commentId, vote });
  };

  return (
    <Container fluid className={styles.bgGray}>
      <Container className='py-5'>
        <Row className='pb-5'>
          <StatisticsCard
            cardHeader={`Tablica rejestracyjna: ${data.statistics.plateText}`}
            positive={data.statistics.positive}
            negative={data.statistics.negative}
          />
        </Row>
        <Row>
          <CommentHeadingRow
            plateText={data.statistics.plateText}
            handlePostMutation={commentPostMutation}
          />
        </Row>
        <Row>
          <CommentsList
            data={data.data}
            handleCommentRating={handleCommentRating}
          />
        </Row>
      </Container>
    </Container>
  );
};

export default CommentDetails;
