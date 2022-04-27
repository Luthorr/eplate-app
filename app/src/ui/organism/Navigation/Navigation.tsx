import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BUTTON_VARIANTS from 'constants/Button';
import CustomButton from 'ui/atoms/Button/Button';
import Logo from 'ui/atoms/Logo/Logo';
import classnames from 'classnames';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [transparentNavbar, setTransparentNavbar] = useState<boolean>(true);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setTransparentNavbar(false);
    } else {
      setTransparentNavbar(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', changeBackground);
    return () => document.removeEventListener('scroll', changeBackground);
  });
  return (
    <Navbar
      variant='dark'
      expand='lg'
      className={classnames('py-3 position-fixed w-100', styles.navbar, {
        [styles.navbarTransparent]: transparentNavbar,
      })}
    >
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
            <Nav.Link>Komentarze</Nav.Link>
            <NavDropdown title='Województwa' id='navbarScrollingDropdown'>
              <NavDropdown.Item>Podlaskie</NavDropdown.Item>
              <NavDropdown.Item>Mazowieckie</NavDropdown.Item>
              <NavDropdown.Item>ETC.</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Ranking kierowców</Nav.Link>
          </Nav>
          <CustomButton variant={BUTTON_VARIANTS.PRIMARY}>Zaloguj</CustomButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
