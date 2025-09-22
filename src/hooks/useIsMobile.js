import { useState, useEffect } from 'react'

/**
 * Hook personalizado para detectar si el dispositivo es móvil
 * @returns {boolean} true si es móvil, false si es desktop
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

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

  return isMobile
}
