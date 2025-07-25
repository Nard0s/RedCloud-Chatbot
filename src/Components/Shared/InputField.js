import React from 'react'
import './Styles/InputField.css'
const InputField =({ placeholder, handleOnChange, width, tempTxt, type})=> {
  return (
    <div>
      <input type={type} placeholder={placeholder} value={tempTxt} onChange={handleOnChange} style={{ width }} ></input>
    </div>
  )
}

export default InputField
