import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Banner.scss'

function Banner() {
  return (

    <>
            <div className="gradient">
                <h1 className="text-start fw-bold gradient-title">Bienvenido a la soporte y sistemas.</h1>
                <p className="text-start fw-normal gradient-description">Mejora tu productividad con nuestros servicios de soporte y sistemas.</p>
                <button className='btn btn-primary btn-xl d-flex align-items-center px-4 py-3 fw-normal'>Incidencias</button>
            </div>
    </>
  )
}

export default Banner