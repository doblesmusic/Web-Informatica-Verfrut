import React from 'react'
import './Login.scss'
import password from '/svg/password.svg'
import Input from '../Input/Input'

/**
 * Componente de formulario de login
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título del formulario
 * @param {string} props.description - Descripción del formulario
 * @param {string} props.buttonText - Texto del botón de login
 * @param {string} props.registerLink - Enlace de registro
 * @param {string} props.forgotPasswordLink - Enlace de recuperación de contraseña
 * @param {string} props.usernamePlaceholder - Placeholder del campo usuario
 * @param {string} props.passwordPlaceholder - Placeholder del campo contraseña
 * @param {boolean} props.noBackground - Si es true, no aplica el fondo del contenedor
 */
function Login({
  buttonText,
  description,
  forgotPasswordLink,
  passwordPlaceholder,
  registerLink, 
  title,
  usernamePlaceholder,
  noBackground = false
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se puede agregar la lógica de autenticación
    console.log('Login submitted')
  }

  return (
    <div className={noBackground ? "login-container no-background" : "login-container"}>
      <div className="login-form">
        <div className="login-form-header p-3 d-flex justify-content-center align-items-center">
          <img src={password} alt="Logo Verfrut" style={{width: '6.5rem', paddingLeft: '0.5rem'}} />
        </div>

        <form onSubmit={handleSubmit} className="login-form-body">
          <div className="pt-3">
            <label htmlFor="username" className="form-label ms-2" style={{color: "#6c757d", textAlign: "left", fontSize: "0.9rem"}}>
              {usernamePlaceholder}
            </label>
            <div className="form-group has-label">
              <input 
                autoComplete="username"
                className="form-control"
                id="username"
                name="username"
                required
                type="text"
              />
            </div>
          </div>

          <div className="pt-3">
            <label htmlFor="password" className="form-label ms-2" style={{color: "#6c757d", textAlign: "left", fontSize: "0.9rem"}}>
              {passwordPlaceholder}
            </label>
            <div className="">
              <Input 
                autoComplete="current-password"
                className="form-control"
                id="password"
                name="password" 
                required
                type="password"
              />
            </div>
          </div>

          <div className="pt-3">
            <button type="submit" className="btn btn-primary btn-xl align-items-center justify-content-center w-100" style={{ fontSize: "0.9rem", height: "50px" }}>
              {buttonText}
            </button>
          </div>

          <div className="pt-3">
            <button type="submit" className="btn btn-secondary btn-xl align-items-center justify-content-center w-100" style={{ fontSize: "0.9rem", height: "50px" }}>
              {forgotPasswordLink}
            </button>
          </div>
        </form>

        <div className="pt-3">
          <p className="text-center" style={{fontSize: "0.8rem", color: "#000000"}}>
            ¿No tienes una cuenta?
            <a href={registerLink} className="text-primary"> Regístrate</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login