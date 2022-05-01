import AppRoutes from 'routing/AppRoutes';
import Footer from 'ui/organism/Footer/Footer';
import Navigation from 'ui/organism/Navigation/Navigation';
import './App.css';

const App = () => (
  <>
    <Navigation />
    <main>
      <AppRoutes />
    </main>
    <Footer />
  </>
);

export default App;
