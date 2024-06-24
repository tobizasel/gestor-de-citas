import React from 'react'


const Cita = ({id,comprador, modelo, precio,direccion, fecha, hora, citas ,setCitas}) => {

  
  const eliminar = () => {
    setCitas(citas.filter((cita) => citas.indexOf(cita) !== id));
  }

  return (
    <div className='cita'>
        <h3 className='cita__nombre'>{comprador}</h3>
        <div className='cita__info'>
            <h4 className='cita__modelo'>{modelo}</h4>
            <h4 className='cita__precio'>${precio}</h4>
        </div>
        <div className='cita__direccion'>
            <h4 className='cita__lugar'>{direccion}</h4>
            <h4 className='cita__fecha'>{fecha} {hora}</h4>
        </div>
        <button className='cita__eliminar' onClick={eliminar}>x</button>
    </div>
  )
}

export default Cita

