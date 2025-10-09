import React, { forwardRef } from 'react'
import './Input.scss'

const Input = forwardRef(function Input({ 
    id, 
    type = 'text', 
    placeholder, 
    value, 
    onChange, 
    className = '',
    variant = 'default', // 'default' or 'prime'
    ariaDescribedBy,
    name,
    autoComplete,
    required = false
}, ref) {
    const inputClasses = variant === 'prime' 
        ? `p-inputtext p-component w-full border-round-xl py-3 ${className}`.trim()
        : className;

    return (
        <input 
            id={id} 
            ref={ref} 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            className={inputClasses}
            aria-describedby={ariaDescribedBy}
            name={name}
            autoComplete={autoComplete}
            required={required}
        />
    )
})

export default Input
