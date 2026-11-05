import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PrivacyPolicy } from './pages/PrivacyPolicy.tsx'
import { TermsOfService } from './pages/TermsOfService.tsx'
import { Credits } from './pages/Credits.tsx'

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
  root = <Credits />;
} else {
  root = <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>{root}</StrictMode>,
)
