import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ranking from 'ui/assets/images/ranking.svg';
import SiteHeading from 'ui/atoms/SiteHeading/SiteHeading';
import CustomTabs from 'ui/organism/CustomTabs/CustomTabs';

const Ranking = () => (
  <Container className='pt-5'>
    <Row className='pb-0 pb-md-5'>
      <Col className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
        <Col md={6}>
          <Image src={ranking} fluid />
        </Col>
        <Col md={6} className='pt-5 pb-4'>
          <SiteHeading>
            <div className='ms-md-3'>Ranking kierowców</div>
          </SiteHeading>
        </Col>
      </Col>
    </Row>
    <Row>
      <Col xsm={12} md={6} lg={4}>
        <CustomTabs />
      </Col>
      <Col xsm={12} md={6} lg={4}>
        <CustomTabs />
      </Col>
      <Col xsm={12} md={6} lg={4}>
        <CustomTabs />
      </Col>
      <Col xsm={12} md={6} lg={4}>
        <CustomTabs />
      </Col>
      <Col xsm={12} md={6} lg={4}>
        <CustomTabs />
      </Col>
    </Row>
  </Container>
);

export default Ranking;
