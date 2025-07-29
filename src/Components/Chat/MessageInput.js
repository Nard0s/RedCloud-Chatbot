import React, { useRef } from 'react';
import './Styles/MessageInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import InputField from '../Shared/InputField';
import '../Themes/Theme.css';

const MessageInput = ({ handleSendBtnClick, handleOnChange, tempTxt }) => {
  const fileInputRef = useRef(null);

  // Trigger hidden input when plus icon clicked
  const handlePlusClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("File selected:", file);
      
    }
  };

  return (
    <div>
      {/* Desktop View */}
      <div className="message-input">
        <InputField
          placeholder="Ask Anything"
          type="text"
          width="100%"
          handleOnChange={handleOnChange}
          tempTxt={tempTxt}
        />

        <div className="icons">
          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

          {/* Plus icon triggers file input */}
          <FontAwesomeIcon
            icon={faPlus}
            className="upload-icon"
            onClick={handlePlusClick}
          />

          <div className="send-icon" onClick={handleSendBtnClick}>
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="message-input-small">
        <div className="small-message-input">
          <div className="upload-icon-small" onClick={handlePlusClick}>
            <FontAwesomeIcon icon={faPlus} className="upload-icon" />
          </div>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

          <div className="smallInput">
            <InputField
              placeholder="Ask Anything"
              type="text"
              width="100%"
              handleOnChange={handleOnChange}
              tempTxt={tempTxt}
            />
            <div className="send-icon" onClick={handleSendBtnClick}>
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
