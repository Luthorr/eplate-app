import {
  useAddCommentSearchRating,
  useCommentsDataByValue,
} from 'hooks/useCommentsData';
import { useParams } from 'react-router-dom';
import LoadingProcess from 'ui/organism/LoadingProcess/LoadingProcess';
import SiteError from 'ui/organism/SiteError/SiteError';
import CommentsList from 'ui/organism/CommentsList/CommentsList';
import { Container, Row } from 'react-bootstrap';
import SearchBar from 'ui/molecules/SearchBar/SearchBar';

import styles from './CommentSearch.module.css';

const CommentSearch = () => {
  const { param } = useParams();
  const { data, isLoading, isIdle, isError } = useCommentsDataByValue(
    param || '',
  );
  const { commentRatingMutation } = useAddCommentSearchRating(param || '');

  if (isLoading || isIdle) {
    return <LoadingProcess />;
  }

  if (isError) {
    return <SiteError />;
  }

  const handleCommentRating = (commentId: number, vote: number) => {
    const userId = 1;
    commentRatingMutation({ userId, commentId, vote });
  };

  return (
    <Container fluid className={styles.bgGray}>
      <Container className='py-4'>
        <Row className='text-center'>
          <h3>
            Wyniki wyszukiwania dla:{' '}
            <span className='text-primary'>{param}</span>
          </h3>
        </Row>
        <Row>
          {data.length ? (
            <CommentsList
              data={data}
              handleCommentRating={handleCommentRating}
            />
          ) : (
            <div className='text-center'>
              <h4 className='mt-4'>Nie znaleziono pasujących rekordów.</h4>
              <h5 className=''>Spróbuj ponownie.</h5>
              <div className='home__bubbleDiv py-5'>
                <SearchBar />
              </div>
            </div>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default CommentSearch;
