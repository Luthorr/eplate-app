import Spinner from 'react-bootstrap/Spinner';

const LoadingProcess = () => (
  <div className='d-flex justify-content-center p-5'>
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '4rem',
        height: '4rem',
        border: '0.6em solid black',
        borderRightColor: 'transparent',
      }}
    >
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  </div>
);

export default LoadingProcess;
