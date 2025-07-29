import React, { useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaTrash, FaPen } from 'react-icons/fa';
import '../Themes/Theme.css';
import './Styles/ChatHistory.css';


const ChatHistory = ({chat, handleChatOpen}) => {
  const [showMenu, setShowMenu] = useState(false);
3
  return (
    <div 
      className='chatHistory-item' 
      onMouseLeave={() => setShowMenu(false)}
    >
      
      <p onClick={() => {handleChatOpen(chat.chat_id)}} >{chat.title}</p>

      <div 
        className="more-icon" 
        onClick={() => setShowMenu(!showMenu)}
      >
        <FiMoreHorizontal size={20}/>
      </div>

      {showMenu && (
        <div className="chat-popup-menu">
          <button><FaPen size={12} /> Rename</button>
          <button><FaTrash size={12} /> Delete</button>
        </div>
      )}
    </div>
  );
};

export default ChatHistory;
