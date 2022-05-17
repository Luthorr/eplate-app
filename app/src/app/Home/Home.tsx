import { Link } from 'react-router-dom';

import AppRoute from 'routing/AppRoutes.enum';
import classnames from 'classnames';

import SearchBar from 'ui/molecules/SearchBar/SearchBar';
import BubbleDiv from 'ui/atoms/BubbleDiv/BubbleDiv';
import CustomButton from 'ui/atoms/Button/Button';
import SiteParagraph from 'ui/atoms/SiteParagraph/SiteParagraph';
import SiteHeading from 'ui/atoms/SiteHeading/SiteHeading';
import CommentsContainer from 'app/Comments/Comments.container';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import rating from 'ui/assets/images/rating2.svg';
import BUTTON_VARIANTS from 'constants/Button';

import styles from './Home.module.css';

const Home = () => (
  <Container fluid className='px-0'>
    <Container className='px-3'>
      <Row className='d-flex flex-column-reverse flex-md-row py-5 '>
        <Col
          md={6}
          className='d-flex flex-column justify-content-center align-items-center py-5'
        >
          <SiteHeading text='Plate.io - rankomat kierowców' />
          <SiteParagraph
            text='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.'
          />
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
          <CommentsContainer visibleRecords={3} />
        </Row>
        <div className='d-flex justify-content-center align-items-center'>
          <Link to={AppRoute.Comments}>
            <CustomButton variant={BUTTON_VARIANTS.PRIMARY}>
              Zobacz więcej
            </CustomButton>
          </Link>
        </div>
      </Container>
    </Container>
  </Container>
);

export default Home;
