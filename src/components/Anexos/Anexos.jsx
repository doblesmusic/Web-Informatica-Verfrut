import React, { useState, useEffect } from 'react'
import './Anexos.scss'
import Footer from '../Footer/Footer'
import Select from '../Select/Select'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

const Anexos = () => {

  return (
    <>
  {/* Breadcrumb */}
  <div className="container-large">
    <Breadcrumb title="Anexos"/>
  </div>

<div className='anexos-container'>
  {/* Selects */}
  <div className="container">
    <div className="row justify-content-center align-items-center g-2">


      <div className="col-4">
        <div>
          <Select />
        </div>
      </div>

      <div className="col-4">
        <div>
          <Select />
        </div>
      </div>

{/* Crear componente para el input */}

      <div className="col-4">
      <input class="form-control form-control-lg" placeholder="Buscar" required="" type="text" />
      </div>
      
    </div>
  </div>

  {/* Tabla */}

  <div className="container mt-5">
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Empresa</th>
            <th scope="col">Departamento</th>
            <th scope="col">Trabajador</th>
            <th scope="col">Anexo</th>
            <th scope="col">Mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SOCIEDAD AGRICOLA EL PORVENIR S.A.</td>
            <td>Otros Anexos</td>
            <td>Casino</td>
            <td>801</td>
            <td>Sin mail</td>
          </tr>
          <tr>
            <td>SOCIEDAD AGRICOLA EL PORVENIR S.A.</td>
            <td>Dpto Personal</td>
            <td>Claudia Antonia Bustos Palominos</td>
            <td>802</td>
            <td>cbustos@verfrut.cl</td>
          </tr>
          <tr>
            <td>SOCIEDAD AGRICOLA EL PORVENIR S.A.</td>
            <td>Administracion</td>
            <td>Pablo Nicolas Eyheralde Munita</td>
            <td>803</td>
            <td>peyheralde@verfrut.pe</td>
          </tr>
          <tr>
            <td>SOCIEDAD AGRICOLA EL PORVENIR S.A.</td>
            <td>Dpto Personal</td>
            <td>Jorge Felipe Alvarez Correa</td>
            <td>804</td>
            <td>jalvarez@verfrut.cl</td>
          </tr>
          <tr>
            <td>SOCIEDAD AGRICOLA EL PORVENIR S.A.</td>
            <td>Dpto Abastecimientos</td>
            <td>Miriam Carolina Caceres Bustos</td>
            <td>806</td>
            <td>mcaceres@verfrut.cl</td>
          </tr>
          <tr>
            <td>SOCIEDAD AGRICOLA EL PORVENIR S.A.</td>
            <td>Dpto Finanzas</td>
            <td>Solange Belen Pizarro Correa</td>
            <td>808</td>
            <td>spizarro@verfrut.cl</td>
          </tr>
          <tr>
            <td>SOCIEDAD AGRICOLA EL PORVENIR S.A.</td>
            <td>Dpto Finanzas</td>
            <td>Romina Giselle Quintana Castro</td>
            <td>809</td>
            <td>rquintana@verfrut.cl</td>
          </tr>
          <tr>
            <td>SOCIEDAD AGRICOLA EL PORVENIR S.A.</td>
            <td>Otros Anexos</td>
            <td>Of. Archivos</td>
            <td>810</td>
            <td>Sin mail</td>
          </tr>
          <tr>
            <td>SOCIEDAD AGRICOLA EL PORVENIR S.A.</td>
            <td>Documentacion</td>
            <td>Felix Alejandro Toledo Aragon</td>
            <td>811</td>
            <td>atoledo@verfrut.cl</td>
          </tr>
          <tr>
            <td>SOCIEDAD AGRICOLA EL PORVENIR S.A.</td>
            <td>Comercializacion</td>
            <td>Ricardo Alfredo Paredes Valdebenito</td>
            <td>812</td>
            <td>rparedes@verfrut.cl</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Footer */}
  <div className="">
    <Footer />
  </div>
</div>

</>
  )
}

export default Anexos
