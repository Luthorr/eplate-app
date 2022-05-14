import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import ScrollToTop from 'hooks/useScrollToTop';
import { AppProvidersProps } from './AppProviders.types';
import queryClient from './QueryClient';

const AppProviders = ({ children }: AppProvidersProps) => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <ScrollToTop />
      {children}
    </Router>
  </QueryClientProvider>
);

export default AppProviders;
