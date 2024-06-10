import React from 'react'
import Cita from './Cita'
import './citas.css'

const Citas = ({citas}) => {

  console.log(citas);

  return (
    <div>
      Listado de Citas
      {
        citas.map((cita, key) => ( 
          <Cita key={key} comprador={cita.comprador} modelo={cita.modelo} precio={cita.precio} direccion={cita.direccion} fecha={cita.fecha} hora={cita.hora}/>
        ))
      }
    </div>
  )
}

export default Citas