import { Link } from 'react-router-dom';
import classnames from 'classnames';
import BUTTON_VARIANTS from 'constants/Button';
import { Container, Row, Form } from 'react-bootstrap';
import CustomButton from 'ui/atoms/Button/Button';
import Input from 'ui/atoms/Input/Input';
import Logo from 'ui/atoms/Logo/Logo';
import styles from './Login.module.css';

const Login = () => (
  <Container
    className={classnames(
      'd-flex justify-content-center align-items-center',
      styles.wrapper,
    )}
    fluid
  >
    <Row className={styles.formContainer}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div>
        <h3 className='pb-4 text-center display-6'>Witaj!</h3>
        <Form className='d-flex flex-column'>
          <Input value='213' onChange={() => {}} />
          <Input value='213' onChange={() => {}} />
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Zapamiętaj mnie' />
          </Form.Group>
          <CustomButton variant={BUTTON_VARIANTS.PRIMARY}>
            Zaloguj się
          </CustomButton>
        </Form>
        <hr />
        <div className='d-flex flex-column text-center'>
          <Link to='/'>Stwórz konto</Link>
        </div>
      </div>
    </Row>
  </Container>
);

export default Login;
