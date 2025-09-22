import React from 'react'
import './Select.scss'

const Select = ({ id, value, onChange, options = [], placeholder = 'Selecciona una opción', className = 'form-select' }) => {
    return (
        <div>
            <select id={id} className={className} value={value} onChange={onChange}>
               
                {options.map(opt => (
                    <option key={opt.value ?? opt} value={opt.value ?? opt}>
                        {opt.label ?? opt}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select