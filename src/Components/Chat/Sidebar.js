import React from 'react'
import './Styles/Sidebar.css'
import '../Themes/Theme.css'
import Button from '../Shared/Button.js'
import RClogo from '../../asset/redcloud-logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FaXmark, FaBars } from "react-icons/fa6";
import ChatHistory from './ChatHistory.js'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ chatList, handleChatOpen, isCollapsed, setIsCollapsed }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleCollapse = () => {
    setIsCollapsed(true);
  };

  const handleExpand = () => {
    setIsCollapsed(false);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : "expanded"}`}>
      <div className="side-head">
        <img
          src={RClogo}
          alt="RedCloud Logo"
          width="60px"
          height="30px"
          className={`logo-img ${isCollapsed ? "non" : "New Chat"}`}
          
        />
        <div className="side-icon">
          {isCollapsed ? (
            <FaBars onClick={handleExpand} />
          ) : (
            <FaXmark onClick={handleCollapse} />
          )}
        </div>
      </div>

      {/* New Chat */}
      <div className="newChat">
        <Button
          text={isCollapsed ? "" : "New Chat"}
          iconType={faPenToSquare}
        />
      </div>

      <hr />

      {/* Chat History ........... expanded */}
      {!isCollapsed && (
        <div className="chatHistory">
          {chatList.map((chat, key) => (
            <ChatHistory
              key={key}
              chat={chat}
              handleChatOpen={handleChatOpen}
            />
          ))}
        </div>
      )}

      {/* Logout */}
      <div className="logout" onClick={handleLogout}>
        {/* <Button
          text={isCollapsed ? "" : "Logout"}
          iconType={faRightFromBracket}
        /> */}

        {/* <div className='user'>
          <div className='icon'>
            <FontAwesomeIcon icon={faCircleUser} className='user-icon' />
          </div>
            {!isCollapsed && <h2>User Name</h2>}
        </div> */}
        
        <Button
          text={isCollapsed ? "" : "username"}
          iconType={faCircleUser}
        />

      </div>
    </div>
  );
};

export default Sidebar;
