import Button from 'react-bootstrap/Button';
import classnames from 'classnames';
import BUTTON_VARIANTS from 'constants/Button';
import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

const CustomButton = ({ children, variant, handleClick }: ButtonProps) => (
  <Button
    type='button'
    className={classnames('px-4 py-2', styles.button, {
      [styles.piPrimary]: variant === BUTTON_VARIANTS.PRIMARY,
    })}
    onClick={handleClick}
  >
    {children}
  </Button>
);

export default CustomButton;
