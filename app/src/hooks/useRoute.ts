import { useLocation } from 'react-router-dom';
import AppRoute from 'routing/AppRoutes.enum';

const avoidRoutes = [AppRoute.Login as string];

const useRoute = () => {
  const location = useLocation();

  const isPathDisabled = () => {
    const { pathname } = location;
    return avoidRoutes.includes(pathname);
  };

  return { isPathDisabled };
};

export default useRoute;
