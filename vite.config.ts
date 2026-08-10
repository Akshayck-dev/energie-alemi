import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Production environment validation
if (process.env.VITE_DEPLOYMENT_ENV === 'production') {
  const siteUrl = process.env.VITE_SITE_URL || '';
  if (!siteUrl) {
    throw new Error('VITE_SITE_URL is required for production builds');
  }
  if (siteUrl.includes('localhost') || siteUrl.includes('vercel.app')) {
    throw new Error('VITE_SITE_URL must not contain localhost or vercel.app in production');
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['maplibre-gl']
  }
});
