import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../CSS/root.css'
import '../CSS/header.css'
import '../CSS/dashboard.css'
import '../CSS/product.css'
import '../CSS/transaction.css'
import '../CSS/searchBar.css'
import '../CSS/compliancepage.css'
import '../CSS/payout.css'
import '../CSS/newproduct.css'
import '../CSS/newPayoutAccount.css'
import '../CSS/payoutRequest.css'
import '../CSS/usermenu.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
