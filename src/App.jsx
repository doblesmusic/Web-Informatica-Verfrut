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
import Videos from './components/Videos/Videos'
import HomePage from './components/HomePage/HomePage'
import LoginPage from './pages/LoginPage'
import Blog from './components/Blog/Blog'

function App() {
  const location = useLocation()
  const [isMobile, setIsMobile] = useState(false)

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

  // Scroll to top cuando cambia la ruta
  useEffect(() => {
    // Para la página de blog, usar scroll instantáneo sin animación
    if (location.pathname === '/blog') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
    } else {
      // Para otras páginas, usar scroll suave
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }, [location.pathname])

  // Si estamos en la página de login, renderizar solo la página de login
  if (location.pathname === '/login') {
    return <LoginPage />
  }

  return (
    <>
      {/* Header responsive */}
      {isMobile ? (
        <HeaderPhone />
      ) : (
        <Header />
      )}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/anexos" element={<Anexos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
