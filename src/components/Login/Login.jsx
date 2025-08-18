function Login( {title, description, buttonText, registerLink, forgotPasswordLink, usernamePlaceholder, passwordPlaceholder}) {
    return (
        <div className="login-container">
            <div className="login-form">
                <div className="login-form-header">
                    <h1>{title}</h1> 
                </div>
                <div className="login-form-body">
                    <input type="text" placeholder={usernamePlaceholder} />
                    <input type="password" placeholder={passwordPlaceholder} />
                    <button>{buttonText}</button>
                    <p>{description}</p>
                    <p>¿No tienes una cuenta? <a href={registerLink}>Regístrate</a></p>
                    <p>¿Olvidaste tu contraseña? <a href={forgotPasswordLink}>Recupérala</a></p>

                </div>
            </div>
        </div>
    )
}

export default Login;