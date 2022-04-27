import traffic from 'ui/assets/images/traffic.jpg';
import GradientWrapper from 'ui/atoms/GradientWrapper/GradientWrapper';
import HeroImage from 'ui/atoms/HeroImage/HeroImage';

const Home = () => (
  <div style={{ position: 'relative' }}>
    <GradientWrapper>
      <HeroImage img={traffic} alt='car driving through' />
    </GradientWrapper>
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}
    >
      <h1>Plate.io</h1>
      <h4>
        Maecenas mauris velit, tristique eget quam dictum, egestas ornare nunc.
      </h4>
    </div>
  </div>
);

export default Home;
