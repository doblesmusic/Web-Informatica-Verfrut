import '../../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Header() {
  return (
    <header className="th-header p-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">
            <img src="/src/assets/logotipos-verfrut.svg" alt="Logo" style={{height: "40px"}} />
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
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button">
                      Sistemas
                    </a>
                    <ul className="dropdown-menu animate slideIn">
                      <li><a className="dropdown-item" href="#">Sistema 1</a></li>
                      <li><a className="dropdown-item" href="#">Sistema 2</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Sistema 3</a></li>
                      <li><a className="dropdown-item" href="#">Sistema 4</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button">
                      Soporte TI
                    </a>
                    <ul className="dropdown-menu animate slideIn">
                      <li><a className="dropdown-item" href="#">Mesa de Ayuda</a></li>
                      <li><a className="dropdown-item" href="#">Solicitudes</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Tutoriales</a></li>
                      <li><a className="dropdown-item" href="#">FAQ</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button">
                      Recursos
                    </a>
                    <ul className="dropdown-menu animate slideIn">
                      <li><a className="dropdown-item" href="#">Documentos</a></li>
                      <li><a className="dropdown-item" href="#">Formularios</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Manuales</a></li>
                      <li><a className="dropdown-item" href="#">Plantillas</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Turnos</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-3 text-end">
            <div className='btn btn-primary btn-xl'>Iniciar Sesión</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
