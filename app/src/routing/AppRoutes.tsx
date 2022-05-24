import Comments from 'app/Comments/Comments';
import Login from 'app/Login/Login';
import Ranking from 'app/Ranking/Ranking';
import { Route, Routes, Navigate } from 'react-router-dom';
import CommentDetails from 'app/CommentDetails/CommentDetails';
import CommentSearch from 'app/CommentSearch/CommentSearch';
import Home from '../app/Home/Home';
import AppRoute from './AppRoutes.enum';

const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.Home} element={<Home />} />
    <Route path={AppRoute.Comments} element={<Comments />} />
    <Route path={AppRoute.Ranking} element={<Ranking />} />
    <Route path={AppRoute.CommentDetails} element={<CommentDetails />} />
    <Route path={AppRoute.Login} element={<Login />} />
    <Route path={AppRoute.CommentSearch} element={<CommentSearch />} />
    <Route
      path={AppRoute.NotExisting}
      element={<Navigate replace to={AppRoute.Home} />}
    />
  </Routes>
);
export default AppRoutes;
