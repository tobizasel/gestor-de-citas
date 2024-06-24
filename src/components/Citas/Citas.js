import React, { useState } from 'react'
import Cita from './Cita'
import './citas.css'

const Citas = ({citas, setCitas}) => {

  // const buscarPos = (cita) => {

  //   console.log(citas.indexOf(cita));
  //   return citas.indexOf(cita)
  // }

  return (
    <div>
      <h2 className='citas__titulo'>Listado de Citas</h2>
      {
        citas.map((cita, key) => ( 
          <Cita key={key} id={citas.indexOf(cita)} comprador={cita.comprador} modelo={cita.modelo} precio={cita.precio} direccion={cita.direccion} fecha={cita.fecha} hora={cita.hora} citas={citas} setCitas={setCitas}/>
          ))
      }
    </div>
  )
}

export default Citas