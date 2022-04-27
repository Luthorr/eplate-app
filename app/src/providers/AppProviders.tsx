import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvidersProps } from './AppProviders.types';

const AppProviders = ({ children }: AppProvidersProps) => (
  <Router>{children}</Router>
);

export default AppProviders;
