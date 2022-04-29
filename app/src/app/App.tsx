import AppRoutes from 'routing/AppRoutes';
import Navigation from 'ui/organism/Navigation/Navigation';
import './App.css';

const App = () => (
  <>
    <Navigation />
    <main>
      <AppRoutes />
    </main>
  </>
);

export default App;
