import React from 'react'

const Input = ({label, placeholder, type, name, value, handleInput}) => {

  return (
    <div>
        <label for={name}>{label}</label>
        <input type={type} name={name} placeholder={placeholder} value={value.name} onChange={handleInput}/>
    </div>
  )
}

export default Input