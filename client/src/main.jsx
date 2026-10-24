import React, { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initAnalytics } from './utils/analytics'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// En producción el HTML ya viene prerenderizado (scripts/prerender.js); en desarrollo el contenedor está vacío
if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)

initAnalytics()
