import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
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

function App() {
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

  return (
    <>
      {/* Header responsive */}
      {isMobile ? (
        <HeaderPhone onPageChange={handlePageChange} />
      ) : (
        <Header onPageChange={handlePageChange} />
      )}
      
      <main>
        {currentPage === 'home' && (
          <>
            <Banner />
            <Marcas />
            <Acordion
              className="pt-5"
              title="La Importancia de Desarrollar Nuevas Tecnologías"
              description="Transformación Digital y Desarrollo Empresarial"
              imageSrc="./src/assets/laptop.png"
              imageAlt="Laptop"
              title2="Innovación y Competitividad"
              title3="Mejora de la Eficiencia Operativa"
              title4="Sostenibilidad y Responsabilidad Social"
              title5="Adaptación al Futuro del Mercado Frutícola"
              bodyText="Desarrollar nuevas tecnologías permite a las empresas 
                        mantenerse competitivas en mercados en constante cambio. La innovación 
                        tecnológica facilita la creación de productos y servicios diferenciados 
                        que atraen a clientes y mejoran la experiencia del usuario. Además, posiciona 
                        a la empresa como líder en su industria al aprovechar las últimas tendencias y 
                        herramientas disponibles."
              bodyText2="La implementación de tecnologías avanzadas 
                          automatiza tareas repetitivas, optimiza procesos internos y 
                          reduce costos. Esto permite a los equipos concentrarse en actividades 
                          estratégicas, mientras que la empresa opera de manera más rápida y eficiente. 
                          Desde software de gestión hasta inteligencia artificial, la tecnología impacta 
                          positivamente la productividad."
              bodyText3="El desarrollo de tecnologías impulsa la sostenibilidad en el proceso 
                          de producción de fruta. Esto incluye reducir el uso de recursos, minimizar los 
                          desechos y garantizar un manejo más responsable con el medio ambiente. 
                          Estas prácticas no solo benefician al entorno, sino que también responden a 
                          las expectativas de mercados internacionales que valoran la sostenibilidad."
              bodyText4="El desarrollo tecnológico ayuda a las empresas a 
                          enfrentar los retos futuros del sector, como cambios en la demanda, 
                          regulaciones internacionales más estrictas y la necesidad de una mayor 
                          transparencia en los procesos. Estar preparados para adaptarse a estas 
                          exigencias asegura que las empresas chilenas sigan liderando en la exportación 
                          de frutas a nivel mundial."
            />
            <Info 
              className="pt-5"
              title="¿Cómo realizar una incidencia correctamente? Aquí te lo contamos."
              description="Aprende cómo reportar de forma clara y efectiva cualquier incidencia técnica que encuentres. Sigue estos pasos y ayuda a que nuestro equipo de soporte te atienda rápidamente. 🚀✨"
              imageSrc="./src/assets/incidencias.png"
              imageAlt="Personas trabajando en laptop"
              buttonText="Ver Más"
            />
            <Info2
              className="pt-5"
              tag="Soluciones Tag"
              title="FrutApp: La solución integral para gestionar tu proceso frutícola"
              description="FrutApp es nuestra innovadora aplicación diseñada para optimizar y simplificar la gestión de distintos módulos clave en el proceso frutícola. Con una interfaz intuitiva y funcional, FrutApp permite a los usuarios acceder a herramientas específicas para cada etapa del proceso, mejorando la productividad y garantizando un manejo eficiente de la información."
              imageSrc="./src/assets/img/brand/frutapp-info.png"
              imageAlt="FrutApp"
              buttonText="Descargar"
            />
            <Info 
              className="pt-5"
              title="Cuidado con el anzuelo: Todo lo que debes saber sobre el phishing"
              description="El phishing es un fraude donde ciberdelincuentes imitan a entidades legítimas para robar datos personales, como contraseñas o información bancaria, mediante mensajes o sitios web falsos."
              imageSrc="./src/assets/pishing.png"
              imageAlt="Phishing"
              buttonText="Ver Video"
            />
            <Footer />
          </>
        )}
        
        {currentPage === 'turnos' && <Turnos />}
        
        {currentPage === 'anexos' && <Anexos />}
      </main>
    </>
  )
}

export default App
