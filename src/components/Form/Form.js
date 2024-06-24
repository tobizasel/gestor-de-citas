import React, { useState } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Button from '../general/Button';
import './form.css';

const Form = ({ citas, setCitas }) => {
    const initialState = {
        comprador: '',
        modelo: '',
        precio: '',
        direccion: '',
        fecha: '',
        hora: '',
        info: '',
    };

    const [inputs, setInputs] = useState(initialState);
    const [vacio, setVacio] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        setCitas([...citas, inputs]);
        setInputs(initialState); // Reiniciar inputs a su estado inicial
        setVacio(true); // Indicar que los campos deben mostrarse vacíos
    };

    const handleInputs = (event) => {
        setVacio(false); // Indicar que ya hay datos en los campos
        const { name, value } = event.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    return (
        <div className='form__wrapper'>
            <h2 className='form__titulo'>Crear mi cita</h2>
            
            <form className='form' onSubmit={handleSubmit}>
                <Input value={vacio ? "" : inputs.comprador} handleInput={handleInputs} label={"Comprador"} placeholder={"Nombre del comprador"} type={"text"} name={"comprador"}/>
                <Input value={vacio ? "" : inputs.modelo} handleInput={handleInputs} label={"Modelo del sillon"} placeholder={"Modelo del sillon"} type={"text"} name={"modelo"}/>
                <Input value={vacio ? "" : inputs.precio} handleInput={handleInputs} label={"Precio del envio"} placeholder={"Precio"} type={"number"} name={"precio"}/>
                <Input value={vacio ? "" : inputs.direccion} handleInput={handleInputs} label={"Direccion"} placeholder={"Olaya 1075"} type={"text"} name={"direccion"}/>
                <Input value={vacio ? "" : inputs.fecha} handleInput={handleInputs} label={"Fecha del envio"} placeholder={""} type={"date"} name={"fecha"}/>
                <Input value={vacio ? "" : inputs.hora} handleInput={handleInputs} label={"Hora del envio"} placeholder={""} type={"time"} name={"hora"}/>
                <TextArea value={vacio ? "" : inputs.info} handleInput={handleInputs} label={"Informacion Adicional"} placeholder={"Informacion adicional"} name={"info"}/>
                <Button />
            </form>
        </div>
    );
};

export default Form;
