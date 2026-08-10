import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './lib/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div className="fixed inset-0 bg-white" />}>
      <App />
    </Suspense>
  </StrictMode>,
)
