import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BUTTON_VARIANTS from 'constants/Button';
import CustomButton from 'ui/atoms/Button/Button';
import Logo from 'ui/atoms/Logo/Logo';
import classnames from 'classnames';
import StyledLink from 'ui/atoms/StyledLink/StyledLink';
import AppRoute from 'routing/AppRoutes.enum';
import styles from './Navigation.module.css';

const Navigation = () => (
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
          <Nav.Link>
            <StyledLink destination={AppRoute.Comments}>Komentarze</StyledLink>
          </Nav.Link>
          <NavDropdown title='Województwa' id='navbarScrollingDropdown'>
            <NavDropdown.Item>Podlaskie</NavDropdown.Item>
            <NavDropdown.Item>Mazowieckie</NavDropdown.Item>
            <NavDropdown.Item>ETC.</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <StyledLink destination={AppRoute.Ranking}>
              Ranking kierowców
            </StyledLink>
          </Nav.Link>
        </Nav>
        <CustomButton variant={BUTTON_VARIANTS.PRIMARY}>Zaloguj</CustomButton>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
