import Image from 'react-bootstrap/Image';
import plus from 'ui/assets/icons/plus.svg';
import minus from 'ui/assets/icons/minus.svg';
import classnames from 'classnames';
import { CommentRatingProps } from './CommentRating.types';
import styles from './CommentRating.module.css';

const CommentRating = ({ votes }: CommentRatingProps) => (
  <div
    className={classnames(
      'd-flex flex-column align-items-center',
      styles.wrapper,
    )}
  >
    <Image className={styles.icon} src={plus} width={20} />
    <p className={styles.rating}>{votes}</p>
    <Image className={styles.icon} src={minus} width={20} />
  </div>
);

export default CommentRating;
