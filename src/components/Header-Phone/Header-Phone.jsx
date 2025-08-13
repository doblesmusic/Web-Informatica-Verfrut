import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Header-Phone.scss'

function HeaderPhone() {
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
            <a href="/" className="d-flex align-items-center justify-content-end">
              <img 
                src="/src/assets/logotipos-verfrut.svg" 
                alt="Logo Verfrut" 
                className="img-fluid"
                style={{
                  height: "30px",
                  transition: "transform 0.2s ease-in-out"
                }}
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
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Panel Principal</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Novedades</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Anuncios</a></li>
                    <li><a href="#" className="text-decoration-none text-dark">Calendario</a></li>
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
                  <div className="accordion" id="sistemasSubAccordion">
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#sistemasOpCollapse">
                          Sistemas Operacionales
                        </button>
                      </h2>
                      <div id="sistemasOpCollapse" className="accordion-collapse collapse" data-bs-parent="#sistemasSubAccordion">
                        <div className="accordion-body">
                          <ul className="list-unstyled ms-2">
                            <li className="mb-2 text-start"><a href="#" className="text-decoration-none text-dark"><i className="fi fi-rr-truck-check me-2"></i>Cuenta Corriente<span className="dots">...</span></a></li>
                            <li className="mb-2 text-start"><a href="#" className="text-decoration-none text-dark"><i className="fi fi-rr-apple-whole me-2"></i>Despacho de Fruta</a></li>
                            <li className="mb-2 text-start"><a href="#" className="text-decoration-none text-dark"><i className="fi fi-rr-file me-2"></i>Documentos Electrónicos</a></li>
                            <li className="text-start"><a href="#" className="text-decoration-none text-dark"><i className="fi fi-rr-house-user me-2"></i>Intranet Friopacking</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item border-0">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#sistemasAdmCollapse">
                          Sistemas Administrativos
                        </button>
                      </h2>
                      <div id="sistemasAdmCollapse" className="accordion-collapse collapse" data-bs-parent="#sistemasSubAccordion">
                        <div className="accordion-body">
                          <ul className="list-unstyled ms-2 text-start">
                            <li className="mb-2 text-start"><a href="#" className="text-decoration-none text-dark"><i className="fi fi-rr-chart-user me-2"></i>Plataforma DEC 5</a></li>
                            <li className="mb-2 text-start"><a href="#" className="text-decoration-none text-dark"><i className="fi fi-rr-usd-circle me-2"></i>Rendiciones</a></li>
                            <li className="mb-2 text-start"><a href="#" className="text-decoration-none text-dark"><i className="fi fi-rr-umbrella-beach me-2"></i>Vacaciones y Permisos</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="accordion" id="soporteSubAccordion">
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#incidenciasCollapse">
                          Incidencias y Solicitudes
                        </button>
                      </h2>
                      <div id="incidenciasCollapse" className="accordion-collapse collapse" data-bs-parent="#soporteSubAccordion">
                        <div className="accordion-body">
                          <ul className="list-unstyled ms-2">
                            <li className="mb-2 text-start"><a href="#" className="text-decoration-none text-dark"><img src="./src/assets/chile.svg" alt="Chile" className="me-2" style={{width: "18px"}}/>Portal Chile</a></li>
                            <li className="mb-2 text-start"><a href="#" className="text-decoration-none text-dark"><img src="./src/assets/peru.svg" alt="Perú" className="me-2" style={{width: "18px"}}/>Portal Perú</a></li>
                            <li className="text-start"><a href="#" className="text-decoration-none text-dark"><img src="./src/assets/solicitud.svg" alt="Solicitudes" className="me-2" style={{width: "18px"}}/>Solicitudes</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item border-0">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#contactoCollapse">
                          Contacto
                        </button>
                      </h2>
                      <div id="contactoCollapse" className="accordion-collapse collapse" data-bs-parent="#soporteSubAccordion">
                        <div className="accordion-body">
                          <ul className="list-unstyled ms-2">
                            <li className="mb-2"><a href="#" className="text-decoration-none text-dark"><i className="fi fi-rr-phone-call me-2"></i>Anexos...</a></li>
                            <li><a href="#" className="text-decoration-none text-dark"><i className="fi fi-rr-envelope me-2"></i>Correo de...</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="accordion" id="recursosSubAccordion">
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#documentacionCollapse">
                          Documentación
                        </button>
                      </h2>
                      <div id="documentacionCollapse" className="accordion-collapse collapse" data-bs-parent="#recursosSubAccordion">
                        <div className="accordion-body">
                          <ul className="list-unstyled ms-2">
                            <li className="mb-2 text-start"><a href="#" className="text-decoration-none text-dark"><i className="fi fi-rr-document me-2"></i>Ver...</a></li>
                            <li className="text-start"><a href="#" className="text-decoration-none text-dark"><i className="fi fi-rr-play-alt me-2"></i>Video...</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item border-0">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#herramientasCollapse">
                          Herramientas
                        </button>
                      </h2>
                      <div id="herramientasCollapse" className="accordion-collapse collapse" data-bs-parent="#recursosSubAccordion">
                        <div className="accordion-body">
                          <ul className="list-unstyled ms-2">
                            <li className="mb-2 text-start"><a href="#" className="text-decoration-none text-dark"><i className="fi fi-rr-envelope me-2"></i>Generar... <span className="badge bg-success ms-1">Nuevo</span></a></li>
                            <li className="text-start"><a href="#" className="text-decoration-none text-dark"><i className="fi fi-rr-comment-alt me-2"></i>Sugerencias <span className="badge bg-info ms-1">Beta</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Turnos */}
            <div className="row-12 pt-2">
              <div className="col-12">
                <a href="#" className="d-flex align-items-center justify-content-start text-decoration-none">
                  Turnos <i className="fi fi-rr-arrow-up-right ms-2"></i>
                </a>  
              </div>
            </div>

            {/* Turnos */}
            <div className="row-12 pt-1">
              <div className="col-12">
                <a href="#" className="d-flex align-items-center justify-content-start text-decoration-none">
                  Pagina oficial de Verfrut <i className="fi fi-rr-arrow-up-right ms-2"></i>
                </a>  
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </header>
  )
}

export default HeaderPhone