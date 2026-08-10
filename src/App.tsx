import { BrowserRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './AppRoutes';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}
