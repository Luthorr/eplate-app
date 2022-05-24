enum AppRoute {
  Home = '/',
  Login = '/login',
  Comments = '/comments',
  CommentDetails = '/comment/:id',
  Ranking = '/ranking',
  CommentSearch = '/comment/search/:param',
  NotExisting = '*',
}

export default AppRoute;
