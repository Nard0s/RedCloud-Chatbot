import React, { useEffect, useState } from "react";
import "./Styles/Chat.css";
import "../Components/Themes/Theme.css";
import MessageList from "../Components/Chat/MessageList";
import MessageInput from "../Components/Chat/MessageInput";
import { FaXmark, FaBars } from "react-icons/fa6";
import RClogo from '../asset/redcloud-logo.png';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Sidebar from "../Components/Chat/Sidebar.js";

const Chat = () => {
  const [tempTxt, setTempTxt] = useState("");
  const [messages, setMessages] = useState([]);
  const ai = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
  const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true); 
  const [isCollapsed, setIsCollapsed] = useState(false); 

  let data = require("../db/chat.json").user_id_1;

  const handleOnChange = (e) => {
    setTempTxt(e.target.value);
  };

  const handleChatOpen = (index) => {
    const selectedChat = chats[index];
    setChat(selectedChat);
    setMessages(selectedChat.history);
  };

  useEffect(() => {
    setChats(data);
  }, []);

  const bot = model.startChat(messages);

  const handleSendBtnClick = async () => {
    const result = await bot.sendMessage(tempTxt);
    const newUserMessage = { role: "user", parts: [{ text: tempTxt }] };
    const botReply = await result.response.text();
    const newBotMessage = { role: "model", parts: [{ text: botReply }] };

    chat.history = bot.getHistory();

    setMessages((prev) => [...prev, newUserMessage, newBotMessage]);
    setTempTxt("");
  };

  return (
    <div className="container">
      <div className='header'></div>
      {/* ===== Sidebar ===== */}
      <div className={`ChatSidebar `}>
        <Sidebar chatList={chats} handleChatOpen={handleChatOpen} isCollapsed ={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* ===== Main ===== */}
      <div className="main">
        <div className="header-small-screen">
          <div className="sidebar-icons">
            {sidebarOpen ? (
              <FaXmark onClick={() => setSidebarOpen(false)} className="icon" />
            ) : (
              <FaBars onClick={() => setSidebarOpen(true)} className="icon" />
            )}
          </div>
          <img
            src={RClogo}
            alt="RedCloud Logo"
            width="70px"
            height="40px"
            className="header-logo"
          />
          <hr />
        </div>

        <div className="messageList">
          <MessageList messages={messages} />
        </div>

        <div className="messageInput">
          <MessageInput
            handleSendBtnClick={handleSendBtnClick}
            handleOnChange={handleOnChange}
            tempTxt={tempTxt}
          />
        </div>

        <div className="footer">&copy; 2025 Red Cloud. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Chat;