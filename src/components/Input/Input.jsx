import React, { forwardRef } from 'react'
import './Input.scss'

const Input = forwardRef(function Input({ id, type = 'text', placeholder, value, onChange, className }, ref) {
    return (
        <input id={id} ref={ref} type={type} placeholder={placeholder} value={value} onChange={onChange} className={className} />
    )
})

export default Input
