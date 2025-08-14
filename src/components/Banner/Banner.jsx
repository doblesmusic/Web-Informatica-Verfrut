import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Banner.scss'

function IncidenciaModal() {
    return (
        <>
        <div className="container">
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-sm modal-incidencias">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close-incidencia" data-bs-dismiss="modal" aria-label="Close">✕</button>
                    </div>
                    <div className="modal-body">
                        <div className="logo-container">
                            <img src="./src/assets/logotipos-verfrut.svg" alt="Logo Verfrut" />
                        </div>
                        <h5 className="modal-title">Seleccione su ubicación</h5>
                        <div className="d-grid gap-2">
                            <a href="https://incidencias.verfrut.cl/login" target="_blank" className="btn btn-primary btn-xl" style={{fontSize: '16px', padding: '15px 20px'}}>
                                <img src="./src/assets/chile.svg" alt="Chile" style={{width: '20px', marginRight: '8px'}} />Incidencias Chile
                            </a>
                            <a href="https://incidencias.verfrut.pe/login" target="_blank" className="btn btn-primary btn-xl" style={{fontSize: '16px', padding: '15px 20px'}}>
                                <img src="./src/assets/peru.svg" alt="Peru" style={{width: '20px', marginRight: '8px'}} />Incidencias Perú
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

function Banner() {
  return (

    <>
            <div className="gradient">
                <h1 className="gradient-title">Bienvenido <br />a sistemas & soporte.</h1>
                <p className="gradient-description">Gestionamos la infraestructura tecnológica de Verfrut con soluciones vanguardistas que impulsan la eficiencia
                el crecimiento continuo.</p>
                <button className='btn btn-primary btn-xl d-flex align-items-center gap-2' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{fontSize: '16px', padding: '15px 20px'}}>
                    <i className="fi fi-rr-arrow-right"></i>
                    Incidencias
                </button>
                <img src="./src/assets/pc.png" alt="Logo Soporte" className='pc-image' />
                <img src="./src/assets/phone.png" alt="Logo Soporte" className='phone-image' />
            </div>
            <IncidenciaModal />
    </>
  )
}

export default Banner