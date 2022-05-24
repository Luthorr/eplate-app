import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import discussion from 'ui/assets/images/discussion.svg';
import BubbleDiv from 'ui/atoms/BubbleDiv/BubbleDiv';
import classnames from 'classnames';
import SearchBar from 'ui/molecules/SearchBar/SearchBar';
import filterIcon from 'ui/assets/icons/filter.svg';
import useComments from 'hooks/useComments';
import CommentHeadingRow from 'ui/molecules/CommentHeadingRow/CommentHeadingRow';
import { useAddComment } from 'hooks/useCommentsData';

import styles from './Comments.module.css';
import CommentsContainer from './Comments.container';

const Comments = () => {
  const { commentPostMutation } = useAddComment();

  return (
    <Container fluid className='px-0'>
      <Container>
        <Row className='py-2 py-md-4'>
          <Col className='d-flex justify-content-center'>
            <Image src={discussion} fluid />
          </Col>
        </Row>
      </Container>
      <Container fluid className={classnames('px-2', styles.bgGray)}>
        <Container>
          <Row>
            <Col md={12} className='py-4 px-0'>
              <BubbleDiv>
                <Row>
                  <Col className='d-flex justify-content-center align-items-center py-4'>
                    <div className='home__bubbleDiv'>
                      <SearchBar />
                    </div>
                  </Col>
                </Row>
              </BubbleDiv>
            </Col>
            <Col md={12} className='px-0'>
              <CommentHeadingRow
                plateText=''
                handlePostMutation={commentPostMutation}
              />
            </Col>
          </Row>
          <Row>
            <CommentsContainer />
          </Row>
          <Row>
            <Col className='d-flex justify-content-center py-3 pb-4'>
              <h5>Paginacja</h5>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default Comments;
