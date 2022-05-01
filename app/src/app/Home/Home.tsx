import SearchBar from 'ui/molecules/SearchBar/SearchBar';
import Comment from 'ui/organism/Comment/Comment';
import BubbleDiv from 'ui/atoms/BubbleDiv/BubbleDiv';
import CustomButton from 'ui/atoms/Button/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import rating from 'ui/assets/images/rating2.svg';
import classnames from 'classnames';
import BUTTON_VARIANTS from 'constants/Button';
import SiteHeading from 'ui/atoms/SiteHeading/SiteHeading';
import styles from './Home.module.css';

const Home = () => (
  <Container fluid className='px-0'>
    <Container className='px-3'>
      <Row className='d-flex flex-column-reverse flex-md-row py-5 '>
        <Col
          md={6}
          className='d-flex flex-column justify-content-center align-items-center py-5'
        >
          <SiteHeading>Plate.io - rankomat kierowców</SiteHeading>
          <h5 className='text-muted'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </h5>
        </Col>
        <Col
          md={6}
          className='d-flex flex-column justify-content-center align-items-center'
        >
          <Image src={rating} fluid />
        </Col>
      </Row>
    </Container>
    <Container fluid className={classnames('px-0 pb-5', styles.bgGray)}>
      <Container className='px-3'>
        <Row>
          <div
            className={classnames('home__bubbleDiv', styles.bubbleDivWrapper)}
          >
            <BubbleDiv>
              <Col className='col-12 d-flex justify-content-center align-items-center py-5'>
                <SearchBar />
              </Col>
            </BubbleDiv>
          </div>
        </Row>
        <Row>
          <Col>
            <h3 className='text-center display-5'>Najnowsze komentarze</h3>
          </Col>
        </Row>
        <Row className='my-4'>
          {[8, 52, 312].map((rate) => (
            <Comment key={rate} rate={rate} />
          ))}
        </Row>
        <Row>
          <div className='d-flex justify-content-center align-items-center'>
            <CustomButton variant={BUTTON_VARIANTS.PRIMARY}>
              Zobacz więcej
            </CustomButton>
          </div>
        </Row>
      </Container>
    </Container>
  </Container>
);

export default Home;
