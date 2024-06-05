import React from 'react'

const TextArea = ({label, name, placeholder}) => {
  return (
    <div>
        <label for={name}>{label}</label>
        <input name={name} placeholder={placeholder}/>
    </div>
  )
}

export default TextArea