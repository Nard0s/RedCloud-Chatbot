import React from 'react'
import './Styles/InputField.css'
const InputField =({ placeholder, handleOnChange, width, tempTxt})=> {
  return (
    <div>
      <input type='text' placeholder={placeholder} value={tempTxt} onChange={handleOnChange} style={{ width }}></input>
    </div>
  )
}

export default InputField
