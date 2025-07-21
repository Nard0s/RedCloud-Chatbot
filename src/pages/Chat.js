import React from 'react'
import './Styles/Chat.css'
import '../Components/Themes/Theme.css'
import MessageList from '../Components/Chat/MessageList'
import ChatHistory from '../Components/Chat/ChatHistory'
import MessageInput from '../Components/Chat/MessageInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const Chat = () => {
  return (
    <div className=' container'>
        
       <div className='sidebar'>
        <div className='side-head'>
          <h3>RC-Ai</h3>
          <div className='side-icon'>  
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
        </div>

          {/* <hr></hr> */}

        <div className="new-chat-btn">
              <FontAwesomeIcon icon={faPenToSquare} style={{ marginRight: '8px' }} />
              <h3>New Chat</h3> 
        </div>

        <hr></hr>


        <div className='chatHistory'>
          <ChatHistory/>
        </div>
      </div>
      <div className='main'>
        <div className='header'></div>
        <div className='messageList'>
          <MessageList/>
        </div>

        <div className='messageInput'>
          <MessageInput/>
        </div>
        <div className='footer'> footer</div>
      </div>
    </div>
  )
}

export default Chat
