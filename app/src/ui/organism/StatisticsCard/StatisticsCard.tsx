import { Card } from 'react-bootstrap';
import goodMood from 'ui/assets/icons/moodGood.svg';
import badBood from 'ui/assets/icons/moodBad.svg';
import analyticsIcon from 'ui/assets/icons/analytics.svg';
import StatisticsCol from 'ui/molecules/StatisticsCol/StatisticsCol';
import classnames from 'classnames';
import styles from './StatisticsCard.module.css';
import { StatisticsCardProps } from './StatisticsCard.types';

const StatisticsCard = ({
  cardHeader,
  positive,
  negative,
}: StatisticsCardProps) => (
  <Card className={classnames('p-0', styles.card)}>
    <Card.Header as='h5'>{cardHeader}</Card.Header>
    <Card.Body className='d-flex flex-wrap'>
      <StatisticsCol
        icon={analyticsIcon}
        textMuted='Łączna liczba opinii'
        text={positive + negative}
        alt='analytics icon'
      />
      <StatisticsCol
        icon={goodMood}
        textMuted='Pozytywnych opinii'
        text={positive}
        alt='like icon'
        isPositive
      />
      <StatisticsCol
        icon={badBood}
        textMuted='Negatywnych opinii'
        text={negative}
        alt='dislike icon'
        isNegative
      />
    </Card.Body>
  </Card>
);

export default StatisticsCard;
