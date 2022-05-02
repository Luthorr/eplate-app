import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import discussion from 'ui/assets/images/discussion.svg';
import BubbleDiv from 'ui/atoms/BubbleDiv/BubbleDiv';
import Comment from 'ui/organism/Comment/Comment';
import classnames from 'classnames';
import SearchBar from 'ui/molecules/SearchBar/SearchBar';
import filterIcon from 'ui/assets/icons/filter.svg';
import styles from './Comments.module.css';

const Comments = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const handleFilterVisibility = () => {
    setShowFilters((prevState) => !prevState);
  };

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
                    <div className='me-3'>
                      <button
                        type='button'
                        className={styles.filterButton}
                        onClick={handleFilterVisibility}
                      >
                        <img
                          src={filterIcon}
                          width={45}
                          height={45}
                          alt='filter icon'
                        />
                      </button>
                    </div>
                    <div className='home__bubbleDiv'>
                      <SearchBar />
                    </div>
                  </Col>
                </Row>
                {showFilters && (
                  <Row>
                    <Col className='d-flex justify-content-center align-items-center pb-4'>
                      <Col md={3} className='text-white'>
                        <div className='lead'>SORTUJ WEDŁUG</div>
                        <div>DATA PRZESŁANIA</div>
                        <div>XYZ</div>
                      </Col>
                      <Col md={3} className='text-white'>
                        <div className='lead'>WYBIERZ WOJEWÓDZTWO</div>
                        <div>XYZ</div>
                        <div>XYZ</div>
                      </Col>
                    </Col>
                  </Row>
                )}
              </BubbleDiv>
            </Col>
            <Col md={12} className='px-0'>
              <h4>Komentarze</h4>
            </Col>
          </Row>
          <Row>
            {[10, 200, 341, 35, 27, 721, 24, 5, 12, 0].map((numb) => (
              <Comment rate={numb} />
            ))}
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
