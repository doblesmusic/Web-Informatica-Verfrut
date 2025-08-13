import '../../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@flaticon/flaticon-uicons/css/all/all.css';


function Header() {
  return (
    <header className="th-header p-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">
            <a href="/" className="d-flex align-items-center">
              <img 
                src="/src/assets/logotipos-verfrut.svg" 
                alt="Logo Verfrut" 
                className="img-fluid"
                style={{
                  height: "45px",
                  transition: "transform 0.2s ease-in-out"
                }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              />
            </a>
          </div>
          <div className="col-6">
            <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse" 
                data-bs-target="#mainNav"
                aria-controls="mainNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="mainNav">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button">
                      Inicio
                    </a>
                    <ul className="dropdown-menu animate slideIn">
                      <li><a className="dropdown-item" href="#">Panel Principal</a></li>
                      <li><a className="dropdown-item" href="#">Novedades</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Anuncios</a></li>
                      <li><a className="dropdown-item" href="#">Calendario</a></li>
                    </ul>
                  </li>



                  {/* Sistemas */}
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Sistemas
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">Sistemas Operacionales<i className="fi fi-rr-angle-right"></i></a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-truck-check"></i>Cuenta Corriente Envases</a></li>
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-apple-whole"></i>Despacho de Fruta (Campo)</a></li>
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-file"></i>Documentos Electrónicos (DTE)</a></li>
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-house-user"></i>Intranet Friopacking</a></li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Sistemas Administrativos
                          <i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-chart-user"></i>Plataforma DEC 5</a></li>
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-usd-circle"></i>Rendiciones</a></li>
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-umbrella-beach"></i>Vacaciones y Permisos</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>


                  {/* Soporte TI */}
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button">
                      Soporte TI
                    </a>
                    <ul className="dropdown-menu animate slideIn">
                      
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Incidencias y Solicitudes
                          <i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href="#"><img src="./src/assets/chile.svg" alt="Incidencias Chile" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de Incidencias Chile</a></li>
                          <li><a className="dropdown-item" href="#"><img src="./src/assets/peru.svg" alt="Incidencias Perú" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de Incidencias Perú</a></li>
                          <li><a className="dropdown-item" href="#"><img src="./src/assets/solicitud.svg" alt="Solicitudes" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de Solicitudes</a></li>
                          <li><a className="dropdown-item" href="#"><img src="./src/assets/glpi.svg" alt="GLPI" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de GLPI (Chile)</a></li>
                          <li><a className="dropdown-item" href="#"><img src="./src/assets/glpi.svg" alt="GLPI" style={{width: "20px", height: "20px", marginRight: "15px"}}/>Portal de GLPI (Perú)</a></li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Seguridad
                          <i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-shield-check"></i>Portal de concientización</a></li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Contacto
                          <i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-phone-call"></i>Anexos Telefónicos</a></li>
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-envelope"></i>Correo de Soporte</a></li>
                        </ul>
                      </li>
                      
                    </ul>
                  </li>


                  {/* Recursos */}
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button">
                      Recursos
                    </a>
                    <ul className="dropdown-menu animate slideIn">
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Documentación<i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-document"></i>Ver documentación</a></li>
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-play-alt"></i>Video Tutoriales</a></li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle-sub" href="#">
                          Herramientas<i className="fi fi-rr-angle-right"></i>
                        </a>
                        <ul className="submenu">
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-envelope"></i>Generar Firmas <span className="badge bg-success ms-2">Nuevo</span></a></li>
                          <li><a className="dropdown-item" href="#"><i className="fi fi-rr-comment-alt"></i>Sugerencias <span className="badge bg-info ms-2">Beta</span></a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Turnos</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-3 text-end d-flex justify-content-end">
            <div className='btn btn-primary btn-sm d-flex align-items-center'><i className="fi fi-rr-user" style={{color: "#87CEEB"}}></i>Iniciar Sesión</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
