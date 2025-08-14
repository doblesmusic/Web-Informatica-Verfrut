import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header'
import HeaderPhone from './components/Header-Phone/Header-Phone'
import Info from './components/Info/Info'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="d-none d-md-block">
      <Header />
    </div>
    <div className="d-block d-md-none">
      <HeaderPhone />
    </div>
    <main>
      <App />
    </main>
  </StrictMode>,
)
