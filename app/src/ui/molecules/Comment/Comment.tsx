import { Link } from 'react-router-dom';
import classnames from 'classnames';
import avt from 'ui/assets/images/avatar.jpg';
import Avatar from 'ui/atoms/Avatar/Avatar';
import CommentRating from 'ui/atoms/CommentRating/CommentRating';
import { CommentProps } from 'shared/types/Comment.types';
import Opinion from 'constants/Opinion';
import Icon from 'ui/atoms/Icon/Icon';
import goodMood from 'ui/assets/icons/moodGood.svg';
import badMood from 'ui/assets/icons/moodBad.svg';
import styles from './Comment.module.css';

const Comment = ({
  id,
  nick,
  avatar,
  votes,
  date,
  plateText,
  plateId,
  commentMsg,
  opinionId,
  handleCommentRating,
}: CommentProps) => {
  const handleVote = (vote: number) => {
    handleCommentRating(id, vote);
  };

  return (
    <div className={classnames('d-flex py-3 my-2', styles.comment)}>
      <div className='me-4'>
        <CommentRating votes={votes} handleVote={handleVote} />
      </div>
      <div className='flex-grow-1'>
        <div className='d-flex justify-content-between align-items-center flex-wrap-reverse'>
          <div className='d-flex align-items-center'>
            {avatar ? <Avatar img={avatar} /> : <Avatar img={avt} />}
            <p className={classnames('ms-4', styles.nickname)}>{nick}</p>
            <p className='my-0 ms-4 text-muted'>{date}</p>
            <div className='my-0 ms-3'>
              {opinionId === Opinion.Negative ? (
                <Icon imag={badMood} opinionId={opinionId} />
              ) : (
                <Icon imag={goodMood} opinionId={opinionId} />
              )}
            </div>
          </div>
          <div className='ms-auto ps-3 my-2'>
            <span>Zgłoś</span>
          </div>
        </div>
        <div>
          <p className='mt-1 mb-2 text-muted'>
            Wystawiono dla:
            <span className='fw-bold'>
              <Link to={`/comment/${plateId}`}>{` ${plateText}`}</Link>
            </span>
          </p>
          <p>{commentMsg}</p>
        </div>
      </div>
    </div>
  );
};
export default Comment;
