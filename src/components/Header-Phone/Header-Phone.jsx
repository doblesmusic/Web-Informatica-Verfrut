import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Header-Phone.scss'

function HeaderPhone({ onPageChange }) {
  const handleHomeClick = (e) => {
    e.preventDefault();
    onPageChange('home');
  }

  const handleTurnosClick = (e) => {
    e.preventDefault();
    onPageChange('turnos');
  }

  const handleLogin = () => {
    window.location.href = '/login';
  }

  return (

    <header className="th-header p-3">
      <div className="container-fluid">
        <div className="row-12 d-flex align-items-center justify-content-center">
            
          {/* Menu Toggle */}
          <div className="col-4 d-flex align-items-center justify-content-start">
            <button
              className="navbar-toggler border-0 p-0"
              type="button"
              data-bs-toggle="offcanvas" 
              data-bs-target="#mobileNav"
              aria-controls="mobileNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fi fi-rr-menu-burger" style={{fontSize: "1.2rem"}}></i>
            </button>
          </div>

          {/* Login Button */}
          <div className="col-4 d-flex align-items-center justify-content-center">
            <button 
              className="btn btn-primary btn-sm d-flex align-items-center justify-content-center"
              onClick={handleLogin}
            >
              <i className="fi fi-rr-user me-1"></i>
              <span style={{
                fontSize: "0.80rem", 
                maxWidth: "100px",
                textOverflow: "ellipsis", 
                overflow: "hidden", 
                whiteSpace: "nowrap"
              }}>Iniciar Sesión</span>
            </button>
          </div>

          {/* Logo */}
          <div className="col-4 d-flex align-items-center justify-content-end">
            <a href="/" className="d-flex align-items-center justify-content-end" onClick={handleHomeClick}>
              <img 
                src="/src/assets/logotipos-verfrut.svg" 
                alt="Logo Verfrut" 
                className="img-fluid"
                style={{
                  height: "30px",
                  transition: "transform 0.2s ease-in-out"
                }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              />
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Offcanvas */}
      <div 
        className="offcanvas offcanvas-start" 
        tabIndex="-1" 
        id="mobileNav"
        aria-labelledby="mobileNavLabel"
        style={{maxWidth: "85vw"}}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileNavLabel" style={{fontSize: "0.9rem"}}>Menú</h5>
          <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="accordion" id="mobileNavAccordion">
            {/* Inicio */}
            <div className="accordion-item border-0 mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#inicioCollapse">
                  Inicio
                </button>
              </h2>
              <div id="inicioCollapse" className="accordion-collapse collapse" data-bs-parent="#mobileNavAccordion">
                <div className="accordion-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark" onClick={handleHomeClick}>Panel Principal</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Novedades</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Anuncios</a></li>
                    <li><a href="#" className="text-decoration-none text-dark">Calendario</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Turnos - Nueva sección */}
            <div className="accordion-item border-0 mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#turnosCollapse">
                  Turnos
                </button>
              </h2>
              <div id="turnosCollapse" className="accordion-collapse collapse" data-bs-parent="#mobileNavAccordion">
                <div className="accordion-body">
                  <ul className="list-unstyled mb-0">
                    <li><a href="#" className="text-decoration-none text-dark" onClick={handleTurnosClick}>Ver Turnos</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sistemas */}
            <div className="accordion-item border-0 mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#sistemasCollapse">
                  Sistemas
                </button>
              </h2>
              <div id="sistemasCollapse" className="accordion-collapse collapse" data-bs-parent="#mobileNavAccordion">
                <div className="accordion-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Cuenta Corriente Envases</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Despacho de Fruta (Campo)</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Documentos Electrónicos (DTE)</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Intranet Friopacking</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Plataforma DEC 5</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Rendiciones</a></li>
                    <li><a href="#" className="text-decoration-none text-dark">Vacaciones y Permisos</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Soporte TI */}
            <div className="accordion-item border-0 mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#soporteCollapse">
                  Soporte TI
                </button>
              </h2>
              <div id="soporteCollapse" className="accordion-collapse collapse" data-bs-parent="#mobileNavAccordion">
                <div className="accordion-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Portal de Incidencias Chile</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Portal de Incidencias Perú</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Portal de Solicitudes</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Portal de GLPI (Chile)</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Portal de GLPI (Perú)</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Portal de concientización</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Anexos Telefónicos</a></li>
                    <li><a href="#" className="text-decoration-none text-dark">Correo de Soporte</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recursos */}
            <div className="accordion-item border-0 mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#recursosCollapse">
                  Recursos
                </button>
              </h2>
              <div id="recursosCollapse" className="accordion-collapse collapse" data-bs-parent="#mobileNavAccordion">
                <div className="accordion-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Ver documentación</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Video Tutoriales</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Generar Firmas</a></li>
                    <li><a href="#" className="text-decoration-none text-dark">Sugerencias</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderPhone