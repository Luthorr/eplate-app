import { RankingRecord } from 'shared/types/Ranking.types';

export type CustomTabsProps = {
  date: string;
  bestDrivers: RankingRecord[];
  worstDrivers: RankingRecord[];
};
