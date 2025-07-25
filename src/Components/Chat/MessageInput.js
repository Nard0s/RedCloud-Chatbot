import React, { useRef, useState } from 'react';
import './Styles/MessageInput.css'; // correct relative path if CSS is in the same folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import InputField from '../Shared/InputField';

import '../Themes/Theme.css'


const MessageInput = ({handleSendBtnClick, handleOnChange, tempTxt}) => {
  return (
    <div className="message-input">
      
      <InputField placeholder='Ask Anything' type='text' width='100%' handleOnChange={handleOnChange} tempTxt={tempTxt} />

      <div className="icons">
        {/* Hidden input */}
        <input
          type="file"
          style={{ display: 'none' }}
          onChange={(e)=>console.log(e.target.files)}
        />

        {/* Upload + Send Icons */}
        <FontAwesomeIcon
          icon={faPlus}
          className="upload-icon"
          // onClick={handleIconClick}
        />
        <div  className="send-icon" onClick={handleSendBtnClick}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
