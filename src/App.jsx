import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import HeaderPhone from './components/Header-Phone/Header-Phone'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import Marcas from './components/Marcas/Marcas'
import Info from './components/Info/Info'
import Info2 from './components/Info-2/Info2'
import Acordion from './components/Acordion'
import Turnos from './components/Turnos/Turnos'
import Anexos from './components/Anexos/Anexos'
import HomePage from './components/HomePage/HomePage'
import LoginPage from './pages/LoginPage'

function App() {
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState('home')
  const [isMobile, setIsMobile] = useState(false)
  
  const handlePageChange = (page) => {
    setCurrentPage(page)
    console.log('cambiando a la pagina', page)
  }

  // Detectar si es móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Verificar al cargar
    checkIsMobile()
    
    // Verificar al cambiar tamaño de ventana
    window.addEventListener('resize', checkIsMobile)
    
    // Limpiar event listener
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Si estamos en la página de login, renderizar solo la página de login
  if (location.pathname === '/login') {
    return <LoginPage />
  }

  return (
    <>
      {/* Header responsive */}
      {isMobile ? (
        <HeaderPhone onPageChange={handlePageChange} />
      ) : (
        <Header onPageChange={handlePageChange} />
      )}
      
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'turnos' && <Turnos />}
        {currentPage === 'anexos' && <Anexos />}
      </main>
    </>
  )
}

export default App
