import React from 'react'
import './Styles/Button.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const Button = ({text,iconType}) => {
  return (
    <>
        <div className="new-chat-btn">
          <FontAwesomeIcon
            icon={iconType}
            style={{ marginRight: "8px" }}
          />
          <h3 className='btn-text'>{text} </h3>
        </div>
    </>
  )
}

export default Button
