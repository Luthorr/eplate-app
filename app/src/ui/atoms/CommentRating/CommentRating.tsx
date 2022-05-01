import Image from 'react-bootstrap/Image';
import plus from 'ui/assets/icons/plus.svg';
import minus from 'ui/assets/icons/minus.svg';
import classnames from 'classnames';
import styles from './CommentRating.module.css';

const CommentRating = ({ rate }: { rate: number }) => (
  <div
    className={classnames(
      'd-flex flex-column align-items-center',
      styles.wrapper,
    )}
  >
    <Image className={styles.icon} src={plus} width={20} />
    <p className={styles.rating}>{rate}</p>
    <Image className={styles.icon} src={minus} width={20} />
  </div>
);

export default CommentRating;
