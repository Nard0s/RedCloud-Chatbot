import React from 'react'
import'./Styles/Sidebar.css'
import '../Themes/Theme.css'
import Button from '../Shared/Button.js'
import RClogo  from'../../asset/redcloud-logo.png'
import { FaXmark, FaBars } from "react-icons/fa6";
import ChatHistory from './ChatHistory.js'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const Sidebar = ({chatList, handleChatOpen}) => {
  return (
   <div className="sidebar">
        <div className="side-head">
      <img src={RClogo} alt="RedCloud Logo" width="60px" height="30px" />

          {/* <div className="side-icon">{}
            <FaXmark />
            <FaBars />
          </div> */}
        </div>

        {/* <hr></hr> */}

        {/* ..............................New Chat................................ */}
        <Button text='New Chat' iconType={faPenToSquare}/>
        <hr></hr>
        {/* ..............................Chat History................................ */}
        <div className="chatHistory">
          {chatList.map((chat, key) => {
            return <ChatHistory key={key} chat={chat} handleChatOpen={handleChatOpen} />
          })}
        </div>
        {/* .......................Logout............................... */}
        <div className="logout">
          <Button text='Logout' iconType={faRightFromBracket}/>
        </div>

      </div>
  )
}

export default Sidebar
