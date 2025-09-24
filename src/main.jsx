import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import  CoinContextProvider  from './context/CoinContextProvider.jsx' // make sure file name matches exactly

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoinContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CoinContextProvider>
  </StrictMode>
)
