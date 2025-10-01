import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../CSS/root.css'
import '../CSS/header.css'
import '../CSS/dashboard.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <App />
  </StrictMode>
)
