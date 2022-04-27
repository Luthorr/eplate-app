import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../app/Home/Home';
import AppRoute from './AppRoutes.enum';

const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.Home} element={<Home />} />
    <Route
      path={AppRoute.NotExisting}
      element={<Navigate replace to={AppRoute.Home} />}
    />
  </Routes>
);
export default AppRoutes;
