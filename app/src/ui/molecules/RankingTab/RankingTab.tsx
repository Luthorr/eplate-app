import classnames from 'classnames';
import { RankingTabProps } from './RankingTab.types';
import styles from './RankingTab.module.css';

const RankingTab = ({ data }: RankingTabProps) => (
  <div className={classnames('py-2', styles.platesContainer)}>
    {data.length ? (
      data.map((val, ind) => (
        <h3 key={val.plateId}>
          {ind + 1}. {val.plateText}
        </h3>
      ))
    ) : (
      <h4>Brak pasujących rekordów.</h4>
    )}
  </div>
);

export default RankingTab;
