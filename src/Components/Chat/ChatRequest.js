import React from 'react'
import '../Themes/Theme.css'
import './Styles/ChatRequest.css'
const ChatRequest = ({message}) => {
  return (
    <div className="chat-container">
      <div className="request">
        <p>{message.parts[0].text}</p>
      </div>
    </div>

  )
}

export default ChatRequest
