import classnames from 'classnames';
import useRoute from 'hooks/useRoute';
import styles from './Footer.module.css';

const Footer = () => {
  const { isPathDisabled } = useRoute();
  if (isPathDisabled()) {
    return null;
  }
  return (
    <footer className={classnames('py-3 text-center', styles.footer)}>
      <p className='py-0 my-0'>
        <span>&copy; </span>
        Przemysław Stupak, 2022
      </p>
    </footer>
  );
};

export default Footer;
