import React, { useState } from 'react';
import Input from './Input';

/**
 * Ejemplo de uso del componente Input con estilo PrimeNG
 */
function InputExample() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Ejemplo de Input estilo PrimeNG</h2>
      
      {/* Input con estilo PrimeNG */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="nombre" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Nombres Completos
        </label>
        <Input
          id="nombre"
          name="nombres_completos"
          variant="prime"
          placeholder="Juan Jose Vasquez Perez"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          ariaDescribedBy="nombres completos"
          required
        />
      </div>

      {/* Otro ejemplo */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Correo Electrónico
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          variant="prime"
          placeholder="correo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
      </div>

      {/* Input estilo por defecto (para comparar) */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="default" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Input Estilo Default (para comparar)
        </label>
        <Input
          id="default"
          className="form-control"
          placeholder="Input con estilo por defecto"
        />
      </div>
    </div>
  );
}

export default InputExample;

