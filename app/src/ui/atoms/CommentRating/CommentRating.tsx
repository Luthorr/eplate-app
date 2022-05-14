import Image from 'react-bootstrap/Image';
import plus from 'ui/assets/icons/plus.svg';
import minus from 'ui/assets/icons/minus.svg';
import classnames from 'classnames';
import { CommentRatingProps } from './CommentRating.types';
import styles from './CommentRating.module.css';

const CommentRating = ({ votes, handleVote }: CommentRatingProps) => (
  <div
    className={classnames(
      'd-flex flex-column align-items-center',
      styles.wrapper,
    )}
  >
    <Image
      className={styles.icon}
      src={plus}
      width={20}
      title='Lubię komentarz'
      onClick={() => handleVote(1)}
    />
    <p
      className={classnames(styles.rating, {
        [styles.negative]: votes < 0,
        [styles.positive]: votes > 0,
      })}
    >
      {votes}
    </p>
    <Image
      className={styles.icon}
      src={minus}
      width={20}
      title='Nie lubię komentarza'
      onClick={() => handleVote(-1)}
    />
  </div>
);

export default CommentRating;
