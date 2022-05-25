import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BUTTON_VARIANTS from 'constants/Button';
import CustomButton from 'ui/atoms/Button/Button';
import Logo from 'ui/atoms/Logo/Logo';
import classnames from 'classnames';
import StyledLink from 'ui/atoms/StyledLink/StyledLink';
import AppRoute from 'routing/AppRoutes.enum';
import useRoute from 'hooks/useRoute';
import styles from './Navigation.module.css';

const Navigation = () => {
  const { isPathDisabled } = useRoute();
  if (isPathDisabled()) {
    return null;
  }
  return (
    <Navbar variant='dark' expand='lg' className={styles.navbar}>
      <Container>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className={classnames(
              'ms-lg-auto me-5',
              styles.navbarLinkContainer,
              styles['nav-link'],
            )}
            navbarScroll
          >
            <div className={styles.linkContainer}>
              <StyledLink destination={AppRoute.Comments}>
                Komentarze
              </StyledLink>
            </div>
            <div className={styles.linkContainer}>
              <StyledLink destination={AppRoute.Ranking}>
                Ranking kierowców
              </StyledLink>
            </div>
          </Nav>
          <Link to={AppRoute.Login}>
            <CustomButton variant={BUTTON_VARIANTS.PRIMARY}>
              Zaloguj
            </CustomButton>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
