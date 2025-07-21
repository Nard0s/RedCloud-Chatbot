import React from 'react'
import '../Themes/Theme.css'
import './Styles/MessageList.css'
import ChatMessage from './ChatMessage'
import ChatRequest from './ChatRequest'
import MessageInput from './MessageInput'
const MessageList = () => {
  return (
    <div className='continuer'>
      <div className='chat'>
        <div className='request'>
           <ChatRequest/>
        </div>

<div className='response'>
     <ChatMessage
  message={{
    role: "assistant",
    content: `
  ## Hello!

This is a test **markdown** message with a code block:

\`\`\`js
console.log('Hello World');
\`\`\`
    `
  }}
/>
</div>
 

 </div>
      
     
    </div>
  )
}

export default MessageList
