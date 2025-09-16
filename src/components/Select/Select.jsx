import React from 'react'
import './Select.scss'

const Select = () => {
    return (
        <div>
            <select className='form-select'>
                <option value="1">Selecciona una opción</option>
                <option value="2">Sistemas</option>
                <option value="3">Desarrollo</option>
            </select>
        </div>
    )
}

export default Select