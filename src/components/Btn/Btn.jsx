import React from 'react'

// Este es un componente Button reutilizable que puede renderizar tanto botones como enlaces
// Recibe las siguientes props:
// - text: El texto que se mostrará en el botón
// - icon: Clase CSS del ícono (ej: "fi fi-rr-user") 
// - onClick: Función que se ejecuta al hacer click
// - variant: Estilo del botón (primary, secondary, etc). Por defecto es 'primary'
// - size: Tamaño del botón (sm, md, lg). Por defecto es 'md'
// - style: Estilos CSS adicionales
// - iconColor: Color del ícono
// - className: Clases CSS adicionales
// - disabled: Si el botón está deshabilitado
// - type: Tipo de botón (button, submit). Por defecto es 'button'
// - href: Si se proporciona, el botón se renderiza como un enlace <a>
// - target: Target del enlace (_blank, _self, etc)

function Btn({ 
    text, 
    icon, 
    onClick, 
    variant = 'primary', 
    size = 'md', 
    style, 
    iconColor, 
    className = '',
    disabled = false,
    type = 'button',
    href,
    target
}) {
    // Si se proporciona href, renderizar como enlace
    if (href) {
        return (
            <a 
                href={href}
                target={target}
                className={`btn btn-${variant} btn-${size} d-flex align-items-center gap-2 ${className}`}
                style={style}
                onClick={onClick}
            >
                {icon && <i className={icon} style={{color: iconColor}}></i>}
                {text}
            </a>
        )
    }

    // Renderizar como botón normal
    return (
        <button 
            type={type}
            className={`btn btn-${variant} btn-${size} d-flex align-items-center gap-2 ${className}`}
            onClick={onClick}
            style={style}
            disabled={disabled}
        >
            {icon && <i className={icon} style={{color: iconColor}}></i>}
            {text}
        </button>
    )
}

export default Btn