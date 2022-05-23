import AppRoutes from 'routing/AppRoutes';
import Footer from 'ui/organism/Footer/Footer';
import Navigation from 'ui/organism/Navigation/Navigation';
import './App.css';

import { ReactQueryDevtools } from 'react-query/devtools';

const App = () => (
  <>
    <Navigation />
    <main>
      <AppRoutes />
    </main>
    <Footer />
    <div id='modalContainer' />
    <ReactQueryDevtools />
  </>
);

export default App;
