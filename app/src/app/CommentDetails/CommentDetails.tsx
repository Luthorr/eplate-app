import { useAddCommentRating, useCommentData } from 'hooks/useCommentsData';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { CommentType } from 'shared/interfaces/Comment.types';
import Comment from 'ui/molecules/Comment/Comment';
import CommentsList from 'ui/organism/CommentsList/CommentsList';
import LoadingProcess from 'ui/organism/LoadingProcess/LoadingProcess';
import SiteError from 'ui/organism/SiteError/SiteError';

import StatisticsCard from 'ui/organism/StatisticsCard/StatisticsCard';
import styles from './CommentDetails.module.css';

const CommentDetails = () => {
  const { id: paramId } = useParams();
  const { data, isLoading, isError, isIdle } = useCommentData(paramId || 0);
  const { commentRatingMutation } = useAddCommentRating();

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

  const plateText = 'BIA SA9AX7';
  // export const useHandleCommentRating = (
  //   commentId: number,
  //   vote: number,
  // ): void => {
  //   const { mutate: commentMutation } = useAddCommentRating();
  //   const userId = 1; // in the future obtained from the context api
  //   commentMutation({ userId, commentId, vote });
  // };
  return (
    <Container fluid className={styles.bgGray}>
      <Container className='py-5'>
        <Row className='pb-5'>
          <StatisticsCard
            cardHeader={`Tablica rejestracyjna: ${plateText}`}
            positive={23}
            negative={40}
          />
        </Row>
        <Row>
          <h4 className='px-0'>Komentarze</h4>
        </Row>
        <Row>
          <CommentsList data={data} handleCommentRating={handleCommentRating} />
        </Row>
      </Container>
    </Container>
  );
};

export default CommentDetails;