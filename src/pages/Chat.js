import React, { useEffect, useState } from "react";
import "./Styles/Chat.css";
import "../Components/Themes/Theme.css";
import MessageList from "../Components/Chat/MessageList";
import ChatHistory from "../Components/Chat/ChatHistory";
import MessageInput from "../Components/Chat/MessageInput";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FaXmark, FaBars } from "react-icons/fa6";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import RClogo from "../asset/redcloud-logo.png";
import ChatRequest from "../Components/Chat/ChatRequest";
import Button from "../Components/Shared/Button";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Sidebar from "../Components/Chat/Sidebar.js";

const Chat = () => {
  const [tempTxt, setTempTxt] = useState("");
  const [messages, setMessages] = useState([]);
  const ai = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
  const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState({}); // Single chat history from chats
  // Note: it is not the state variable "messages",
  // "messages" would get its data from this "chat"

  let data = require("../db/chat.json").user_id_1; // all user chats fetched from the server

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

    // ==============================================sidebar=============================
  };

  return (
    <div className=" container">
      {/* =====================================sidebar===================================== */}
      <div className="ChatSidebar">
        <Sidebar chatList={chats} handleChatOpen={handleChatOpen} />
      </div>
      {/* =====================================Main=============================================== */}
      <div className="main">
        <div className="header">
          <img src={RClogo} alt="RedCloud Logo" width="30px" height="30px" />
        </div>

        <div className="messageList">
          <MessageList messages={messages} />
        </div>

        <div className="ChatMessageInput">
          <MessageInput
            handleSendBtnClick={handleSendBtnClick}
            handleOnChange={handleOnChange}
            tempTxt={tempTxt}
          />
        </div>
        {/* ...........................footer........................ */}
        <div className="footer"> footer</div>
      </div>
    </div>
  );
};

export default Chat;
