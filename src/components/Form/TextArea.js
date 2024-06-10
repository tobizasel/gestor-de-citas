import React from 'react'

const TextArea = ({label, name, placeholder}) => {
  return (
    <div className='form__input--wrapper'>
        <label for={name}>{label}</label>
        <input className='form__input' name={name} placeholder={placeholder}/>
    </div>
  )
}

export default TextArea