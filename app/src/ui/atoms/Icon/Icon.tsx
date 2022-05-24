import Image from 'react-bootstrap/Image';
import classnames from 'classnames';
import Opinion from 'constants/Opinion';
import styles from './Icon.module.css';

type IconProps = {
  imag: string;
  size?: number;
  opinionId?: number;
};

const Icon = ({ imag, size, opinionId }: IconProps) => (
  <Image
    src={imag}
    width={size}
    className={classnames({
      [styles.paintGreen]: opinionId === Opinion.Positive,
      [styles.paintRed]: opinionId === Opinion.Negative,
    })}
  />
);

export default Icon;

Icon.defaultProps = {
  size: 25,
  opinionId: 0,
};
