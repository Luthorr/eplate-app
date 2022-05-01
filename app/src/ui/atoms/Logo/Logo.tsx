import { Link } from 'react-router-dom';
import AppRoute from 'routing/AppRoutes.enum';
import styles from './Logo.module.css';

const Logo = () => (
  <span className={styles.logo}>
    <Link to={AppRoute.Home}>Plate.io</Link>
  </span>
);

export default Logo;
