import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PrivacyPolicy } from './pages/PrivacyPolicy.tsx'
import { TermsOfService } from './pages/TermsOfService.tsx'
// Credits pulls in the photo list (about 1 MB), so it loads only on its own page.
const Credits = lazy(() => import('./pages/Credits.tsx').then(m => ({ default: m.Credits })))

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

const path = window.location.pathname;
let root;
if (path === '/privacy') {
  root = <PrivacyPolicy />;
} else if (path === '/terms') {
  root = <TermsOfService />;
} else if (path === '/credits') {
  root = <Suspense fallback={null}><Credits /></Suspense>;
} else {
  root = <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>{root}</StrictMode>,
)
