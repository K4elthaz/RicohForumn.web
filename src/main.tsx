import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import MouseMoveEffect from '@/components/mouse-move-effect'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <MouseMoveEffect />
      <App />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
