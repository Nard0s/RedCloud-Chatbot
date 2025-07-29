import React from 'react'
import '../Themes/Theme.css'
import './Styles/ChatRequest.css'
const ChatRequest = ({message}) => {
  return (
      <div className="request">
        <p className='requestText'>{message.parts[0].text}</p>
      </div>
  )
}

export default ChatRequest
