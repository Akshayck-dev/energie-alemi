import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import './lib/i18n-server'; // Load synchronous translation configuration for SSR
import AppRoutes from './AppRoutes';

export function render(url: string, helmetContext: any) {
  // Wrap with HelmetProvider context to capture head metadata during SSR
  return ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );
}
