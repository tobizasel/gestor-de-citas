import React from 'react'

const Input = ({label, placeholder, type, name, value, handleInput}) => {

  return (
    <div className='form__input--wrapper'>
        <label for={name}>{label}</label>
        <input className='form__input' type={type} name={name} placeholder={placeholder} value={value.name} onChange={handleInput}/>
    </div>
  )
}

export default Input