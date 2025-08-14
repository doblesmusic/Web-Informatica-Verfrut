import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/Banner/Banner'
import Marcas from './components/Marcas/Marcas'
import Info from './components/Info/Info'
import Info2 from './components/Info-2/Info2'

function App() {
  return (
    <>
      <Banner />
      <Marcas />
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
    </>
  )
}

export default App
