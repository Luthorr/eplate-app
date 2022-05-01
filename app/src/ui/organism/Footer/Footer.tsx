import classnames from 'classnames';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={classnames('py-3 text-center', styles.footer)}>
    <p>
      <span>&copy; </span>
      Przemysław Stupak, 2022
    </p>
  </footer>
);

export default Footer;
