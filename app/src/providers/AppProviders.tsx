import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import ScrollToTop from 'hooks/useScrollToTop';
import { AppProvidersProps } from './AppProviders.types';

const queryClient = new QueryClient();

const AppProviders = ({ children }: AppProvidersProps) => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <ScrollToTop />
      {children}
    </Router>
  </QueryClientProvider>
);

export default AppProviders;
