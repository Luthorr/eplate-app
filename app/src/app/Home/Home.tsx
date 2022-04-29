import SearchBar from 'ui/molecules/SearchBar/SearchBar';
import Comment from 'ui/organism/Comment/Comment';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import rating from 'ui/assets/images/rating2.svg';
import classnames from 'classnames';
import styles from './Home.module.css';

const Home = () => (
  <Container fluid className='px-0'>
    <Container className='px-3'>
      <Row className='d-flex flex-column-reverse flex-md-row py-5 '>
        <Col
          md={7}
          className='d-flex flex-column justify-content-center align-items-center py-5'
        >
          <h1 className='display-4 fw-bold text-center text-md-start'>
            Plate.io - rankomat kierowców
          </h1>
          <h5 className='text-muted'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </h5>
        </Col>
        <Col
          md={5}
          className='d-flex flex-column justify-content-center align-items-center'
        >
          <Image src={rating} fluid />
        </Col>
      </Row>
    </Container>
    <Container fluid className={classnames('px-0', styles.bgGray)}>
      <Container className='px-3'>
        <Row>
          <Col
            className={classnames(
              'd-flex justify-content-center align-items-center col-12 py-5 bubbleDiv',
              styles.bubbleDiv,
            )}
          >
            <Col className='col-12 d-flex justify-content-center align-items-center'>
              <SearchBar />
            </Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className='text-center display-5'>Najnowsze komentarze</h3>
          </Col>
        </Row>
        <Row className='my-4'>
          {[8, 52, 312].map((rate) => (
            <Comment rate={rate} />
          ))}
        </Row>
      </Container>
    </Container>
  </Container>
);

export default Home;
