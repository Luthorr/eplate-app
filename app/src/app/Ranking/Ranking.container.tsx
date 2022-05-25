import Col from 'react-bootstrap/Col';
import CustomTabs from 'ui/organism/CustomTabs/CustomTabs';
import { useDriversRanking } from 'hooks/useCommentsData';
import LoadingProcess from 'ui/organism/LoadingProcess/LoadingProcess';
import SiteError from 'ui/organism/SiteError/SiteError';

const RankingContainer = () => {
  const { data, isLoading, isError, isIdle } = useDriversRanking();

  if (isLoading || isIdle) {
    return <LoadingProcess />;
  }

  if (isError) {
    return <SiteError />;
  }

  return (
    <>
      {Object.keys(data)
        .sort()
        .reverse()
        .map((key) => (
          <Col key={key} xsm={12} md={6} lg={4}>
            <CustomTabs
              date={key}
              bestDrivers={data[key].best}
              worstDrivers={data[key].worst}
            />
          </Col>
        ))}
    </>
  );
};

export default RankingContainer;
