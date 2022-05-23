import BUTTON_VARIANTS from 'constants/Button';
import {
  useAddCommentDetailsRating,
  useAddCommentDetailsPage,
  useCommentData,
} from 'hooks/useCommentsData';
import useModal from 'hooks/useModal';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CustomButton from 'ui/atoms/Button/Button';
import CommentCreationModal from 'ui/organism/CommentCreationModal/CommentCreationModal';
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
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

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
          <div className='d-flex justify-content-between align-items-center'>
            <h4 className='px-0'>Komentarze</h4>
            <CustomButton
              variant={BUTTON_VARIANTS.PRIMARY}
              handleClick={handleOpenModal}
            >
              Napisz komentarz
            </CustomButton>
          </div>
        </Row>
        <Row>
          <CommentsList
            data={data.data}
            handleCommentRating={handleCommentRating}
          />
        </Row>
      </Container>
      <CommentCreationModal
        isOpen={isOpen}
        handleClose={handleCloseModal}
        mutationFunction={commentPostMutation}
        passedPlateText={data.statistics.plateText}
      />
    </Container>
  );
};

export default CommentDetails;
