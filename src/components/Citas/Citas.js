import React, { useState } from 'react'
import Cita from './Cita'
import './citas.css'

const Citas = ({citas, setCitas}) => {
  console.log(citas);

  const buscarPos = (cita) => {
    console.log(citas.indexOf(cita));
    return citas.indexOf(cita)
  }

  return (
    <div>
      Listado de Citas
      {
        citas.map((cita, key) => ( 
          <Cita key={key} id={buscarPos(cita)} comprador={cita.comprador} modelo={cita.modelo} precio={cita.precio} direccion={cita.direccion} fecha={cita.fecha} hora={cita.hora} citas={citas} setCitas={setCitas}/>
          ))
      }
    </div>
  )
}

export default Citas