import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ranking from 'ui/assets/images/ranking.svg';
import SiteHeading from 'ui/atoms/SiteHeading/SiteHeading';
import RankingContainer from './Ranking.container';

const Ranking = () => (
  <Container className='pt-5'>
    <Row className='pb-0 pb-md-5'>
      <Col className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
        <Col md={6}>
          <Image src={ranking} fluid />
        </Col>
        <Col md={6} className='pt-5 pb-4'>
          <SiteHeading text='Ranking kierowców' />
        </Col>
      </Col>
    </Row>
    <Row>
      <RankingContainer />
    </Row>
  </Container>
);

export default Ranking;
