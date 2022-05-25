import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import RankingTab from 'ui/molecules/RankingTab/RankingTab';
import { CustomTabsProps } from './CustomTabs.types';

const CustomTabs = ({ date, bestDrivers, worstDrivers }: CustomTabsProps) => {
  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const month = formattedDate.toLocaleDateString('default', { month: 'long' });
  return (
    <div className='pt-2 pb-5'>
      <h4 className='text-center fw-bold text-muted text-uppercase'>{`${month} ${year}`}</h4>
      <Tabs className='customTabs' defaultActiveKey='bestDriversKey'>
        <Tab eventKey='bestDriversKey' title='NAJLEPSI'>
          <RankingTab data={bestDrivers} />
        </Tab>
        <Tab eventKey='worstDriversKey' title='NAJGORSI'>
          <RankingTab data={worstDrivers} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default CustomTabs;
