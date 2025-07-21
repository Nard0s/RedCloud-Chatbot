import React ,{  useState } from 'react'
import './Styles/Chat.css'
import '../Components/Themes/Theme.css'
import MessageList from '../Components/Chat/MessageList'
import ChatHistory from '../Components/Chat/ChatHistory'
import MessageInput from '../Components/Chat/MessageInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FaXmark } from 'react-icons/fa6';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';


const Chat = () => {
    const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark-mode'); // Optional: toggle dark mode on body
  };
  return (
    <div className=' container'>
        
       <div className='sidebar'>
        <div className='side-head'>
          <h3>RC-Ai</h3>
          <div className='side-icon'> 
            <FaXmark /> 
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
        </div>

          {/* <hr></hr> */}
    
{/* ..............................New Chat................................ */}
        <div className="new-chat-btn">
              <FontAwesomeIcon icon={faPenToSquare} style={{ marginRight: '8px' }} />
              <h3>New Chat</h3> 
        </div>

        <hr></hr>


        <div className='chatHistory'>
          <ChatHistory/>
        </div>
        {/* .......................Logout............................... */}

        <div className='logout'>
          <FontAwesomeIcon icon={faRightFromBracket} />
          <h3>Logout</h3> 
        </div>

        {/* .......................Theme............................... */}
         {/* <div className="theme">
        <h3>Dark Mode</h3>
        <div className="switch" onClick={handleThemeToggle}>
          <div className={`on ${isDark ? 'active' : ''}`}>
            <FontAwesomeIcon icon={faToggleOn} />
          </div>
          <div className={`off ${!isDark ? 'active' : ''}`}>
            <FontAwesomeIcon icon={faToggleOff} />
          </div>
        </div>
      </div> */}
      </div>

      {/* ..................................Main.................................... */}
      <div className='main'>
        <div className='header'>
        </div>

        
        <div className='messageList'>
          <MessageList/>
        </div>

        <div className='messageInput'>
          <MessageInput/>
        </div>
        {/* ...........................footer........................ */}
        <div className='footer'> footer</div>
      </div>
    </div>
  )
}

export default Chat
