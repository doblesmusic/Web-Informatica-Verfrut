import React from 'react'
import Login from '../components/Login/Login'
import { LOGIN_CONSTANTS } from '../constants/loginConstants'

/**
 * Página de Login independiente que se abre en nueva pestaña
 * Sin header ni navegación, solo el formulario de login
 */
function LoginPage() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      background: 'linear-gradient(135deg, #15365a 0%, #225284 50%, #0b3456 100%)',
      minHeight: '100vh',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: '1rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Login 
          title={LOGIN_CONSTANTS.title}
          description={LOGIN_CONSTANTS.description}
          buttonText={LOGIN_CONSTANTS.buttonText}
          registerLink={LOGIN_CONSTANTS.registerLink}
          forgotPasswordLink={LOGIN_CONSTANTS.forgotPasswordLink}
          usernamePlaceholder={LOGIN_CONSTANTS.usernamePlaceholder}
          passwordPlaceholder={LOGIN_CONSTANTS.passwordPlaceholder}
          noBackground={true}
        />
      </div>
    </div>
  )
}

export default LoginPage
