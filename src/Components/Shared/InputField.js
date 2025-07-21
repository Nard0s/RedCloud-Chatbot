import React from 'react'
import './Styles/InputField.css'
const InputField =({ placeholder , width})=> {
  return (
    <div>
      <input type='text' placeholder={placeholder} style={{ width }}></input>
    </div>
  )
}

export default InputField
