import classnames from 'classnames';
import avt from 'ui/assets/images/avatar.jpg';
import Avatar from 'ui/atoms/Avatar/Avatar';
import CommentRating from 'ui/atoms/CommentRating/CommentRating';
import styles from './Comment.module.css';

const Comment = ({ rate }: { rate: number }) => (
  <div className={classnames('d-flex py-3 my-2', styles.comment)}>
    <div className='me-4'>
      <CommentRating rate={rate} />
    </div>
    <div className='flex-grow-1'>
      <div className='d-flex justify-content-between align-items-center flex-wrap-reverse'>
        <div className='d-flex align-items-center'>
          <Avatar img={avt} />
          <p className={classnames('ms-4', styles.nickname)}>Luthorr</p>
          <p className='my-0 ms-4 text-muted'>data publikacji</p>
        </div>
        <div className='ms-auto my-2'>
          <span>Zgłoś</span>
        </div>
      </div>
      <div>
        <p className='mt-1 mb-2 text-muted'>
          Wystawiono dla:
          <span className='fw-bold'> BIA 9218K2</span>
        </p>
        <p>
          Mauris iaculis libero quis blandit luctus. Integer euismod eget odio
          sed scelerisque. Vivamus auctor sem elit. Pellentesque et orci quis
          nibh dapibus congue.
        </p>
      </div>
    </div>
  </div>
);

export default Comment;
