import React, { useEffect, useMemo, useRef, useState } from 'react'
import './Anexos.scss'
import Footer from '../Footer/Footer'
import Select from '../Select/Select'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Input from '../Input/Input'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { esES } from '@mui/x-data-grid/locales'

// No axios in deps; use fetch

const Anexos = () => {
  const [anexos, setAnexos] = useState([])
  const [empresaOptions, setEmpresaOptions] = useState([])
  const [departamentoOptions, setDepartamentoOptions] = useState([])
  const [empresa, setEmpresa] = useState('todas')
  const [departamento, setDepartamento] = useState('todos')
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    const handleKey = (event) => {
      if (event.metaKey && event.key === 'b') {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    const fetchAnexos = async () => {
      try {
        const res = await fetch('https://api.verfrut.cl/ApiAuth/GetAnexos')
        const json = await res.json()
        const data = json.result ?? []
        setAnexos(Array.isArray(data) ? data : [])
      } catch (e) {
        console.error('Error al obtener los anexos:', e)
      }
    }
    fetchAnexos()
  }, [])

  // Build select options from data
  useEffect(() => {
    const empresas = Array.from(new Set(anexos.map(a => a.empresa))).sort()
    const departamentos = Array.from(new Set(anexos.map(a => a.departamento))).sort()
    setEmpresaOptions(empresas.map(e => ({ value: e, label: e })))
    setDepartamentoOptions(departamentos.map(d => ({ value: d, label: d })))
  }, [anexos])

  // Filtered dataset
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = anexos
    if (empresa !== 'todas' && empresa !== '') list = list.filter(a => a.empresa === empresa)
    if (departamento !== 'todos' && departamento !== '') list = list.filter(a => a.departamento === departamento)
    if (q) {
      list = list.filter(a => {
        const mail = a.mail ? String(a.mail).toLowerCase() : ''
        return (
          String(a.empresa).toLowerCase().includes(q) ||
          String(a.departamento).toLowerCase().includes(q) ||
          String(a.trabajador).toLowerCase().includes(q) ||
          String(a.nroAnexo).toLowerCase().includes(q) ||
          mail.includes(q)
        )
      })
    }
    return list
  }, [anexos, empresa, departamento, query])

  // Reset page when filters change
  useEffect(() => {
    // DataGrid maneja su propia paginación; no necesitamos estado local de página
  }, [empresa, departamento, query])

  const capitalizeWords = (text) => {
    if (!text) return ''
    return String(text)
      .toLowerCase()
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  }

  // Definir columnas para DataGrid
  const columns = useMemo(() => ([
    { field: 'empresa', headerName: 'Empresa', flex: 1.5, minWidth: 220 },
    { field: 'departamento', headerName: 'Departamento', flex: 1, minWidth: 160 },
    { field: 'trabajador', headerName: 'Trabajador', flex: 1.4, minWidth: 200 },
    { field: 'nroAnexo', headerName: 'Anexo', width: 120 },
    { field: 'mail', headerName: 'Mail', flex: 1, minWidth: 220 },
  ]), [])

  const gridRows = useMemo(() => (
    (filtered ?? []).map((a, i) => ({
      id: a.nroAnexo ? `${a.nroAnexo}-${i}` : i,
      empresa: a.empresa ?? '',
      departamento: capitalizeWords(a.departamento ?? ''),
      trabajador: capitalizeWords(a.trabajador ?? ''),
      nroAnexo: a.nroAnexo ?? '',
      mail: a.mail ? String(a.mail).toLowerCase() : 'Sin mail',
    }))
  ), [filtered])

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

      <div className="col-md-5 col-sm-12">
        <div>
          <Select
            id="selectempresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value || 'todas')}
            options={[{ value: 'todas', label: 'Todas las empresas' }, ...empresaOptions]}
          />
        </div>
      </div>

      <div className="col-md-5 col-sm-12">
        <div>
          <Select
            id="selectdepartamento"
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value || 'todos')}
            options={[{ value: 'todos', label: 'Seleccione Departamento (Todos)' }, ...departamentoOptions]}
          />
        </div>
      </div>

      <div className="col-md-2 col-sm-12">
        <div>
          <Input id="floatingInput" ref={inputRef} placeholder="Buscar" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>

    </div>
  </div>

  {/* Tabla (DataGrid) */}
  <div className="container mt-4 data-grid-container">
    <div className="table-responsive">
      <div style={{ width: '100%'}}>
        <DataGrid
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            '& .MuiDataGrid-columnHeaders': { fontWeight: 600, fontSize: 13 },
            '& .MuiDataGrid-cell': { fontSize: 14 },
          }}
          rows={gridRows}
          columns={columns}
          density="standard"
          rowHeight={45}
          columnHeaderHeight={56}
          pageSizeOptions={[10, 25, 50]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10, page: 0 } },
            sorting: { sortModel: [{ field: 'empresa', sort: 'asc' }] },
          }}
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 300 },
            },
          }}
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        />
      </div>
    </div>
  </div>
  {/* Footer */}
  <Footer/>
</div>
</>
  )
}

export default Anexos
