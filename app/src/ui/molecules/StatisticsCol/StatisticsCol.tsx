import { Col, Image } from 'react-bootstrap';
import classnames from 'classnames';
import { StatisticsColProps } from './StatisticsCol.types';
import styles from './StatisticsCol.module.css';

const StatisticsCol = ({
  icon,
  textMuted,
  text,
  alt,
  isPositive,
  isNegative,
}: StatisticsColProps) => (
  <Col xs={12} sm={6} md={4} xl={4} className='py-3 py-md-0'>
    <div className='d-flex justify-content-center'>
      <div className='d-flex'>
        <div className='d-flex align-items-center col-2 justify-content-end'>
          <Image
            src={icon}
            alt={alt}
            width={100}
            className={classnames('display-6', {
              [styles.positiveImg]: isPositive,
              [styles.negativeImg]: isNegative,
            })}
          />
        </div>
        <div className='ms-3 col-10'>
          <div className='text-muted'>{textMuted}</div>
          <div
            className={classnames('display-6', {
              [styles.positive]: isPositive,
              [styles.negative]: isNegative,
            })}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  </Col>
);

export default StatisticsCol;
