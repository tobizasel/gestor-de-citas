import React, { useState } from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Button from '../general/Button'
import './form.css'

const Form = ({citas, setCitas}) => {

    const [inputs, setInputs] = useState({
        comprador: "",
        modelo: "",
        precio: "",
        direccion: "",
        fecha: "",
        hora: "",
        info: ""
    })

    const handleInputs = (event) => {
        console.log(event.target.name, event.target.value);
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs, "INPUT");
        console.log(citas => [...citas, inputs]);
        setCitas(citas => [...citas, inputs]);
        console.log(citas);
    }   


  return (
    <div className='form__wrapper'>
        <h2 className='form__titulo'>Crear mi cita</h2>
        
        <form className='form' onSubmit={handleSubmit}>
            <Input value={inputs} handleInput={handleInputs} label={"Comprador"} placeholder={"Nombre del comprador"} type={"text"} name={"comprador"}/>
            <Input value={inputs} handleInput={handleInputs} label={"Modelo del sillon"} placeholder={"Modelo del sillon"} type={"text"} name={"modelo"}/>
            <Input value={inputs} handleInput={handleInputs} label={"Precio del envio"} placeholder={"Precio"} type={"number"} name={"precio"}/>
            <Input value={inputs} handleInput={handleInputs} label={"Direccion"} placeholder={"Olaya 1075"} type={"text"} name={"direccion"}/>
            <Input value={inputs} handleInput={handleInputs} label={"Fecha del envio"} placeholder={""} type={"date"} name={"fecha"}/>
            <Input value={inputs} handleInput={handleInputs} label={"Hora del envio"} placeholder={""} type={"time"} name={"hora"}/>
            <TextArea value={inputs} handleInput={handleInputs} label={"Informacion Adicional"} placeholder={"Informacion adicional"} name={"info"}/>
            <Button/>
        </form>
    </div>
  )
}

export default Form