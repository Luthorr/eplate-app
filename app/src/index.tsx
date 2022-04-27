import ReactDOM from 'react-dom/client';
import AppProviders from './providers/AppProviders';
import App from './app/App';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <AppProviders>
    <App />
  </AppProviders>,
);
