import React, { useEffect, useState } from "react";
import "./Styles/Chat.css";
import "../Components/Themes/Theme.css";
import MessageList from "../Components/Chat/MessageList";
import ChatHistory from "../Components/Chat/ChatHistory";
import MessageInput from "../Components/Chat/MessageInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FaXmark } from "react-icons/fa6";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import RClogo  from'../asset/redcloud-logo.png'
import ChatRequest from "../Components/Chat/ChatRequest";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chat = () => {
  const [tempTxt, setTempTxt] = useState("");
  const [messages, setMessages] = useState([]);

  const handleOnChange = (e) => {
    setTempTxt(e.target.value);
  };

  let history_obj = {
    history: [
      {
        role: "user",
        parts: [
          {
            text: "My name is Pitter, and I want you to treat me like a child. And my gender is boy.",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Ok, Pitter I will call Pitter from know, and I will treat you like a boy child.",
          },
        ],
      },
    ],
  };


  useEffect(()=>{
    setMessages(history_obj.history);
  },[]);

  const ai = new GoogleGenerativeAI("AIzaSyCUnFE_h7VY22QwLwi-it2TUGruE_lGqLM");

  const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
  const chat = model.startChat(history_obj);

  const handleSendBtnClick = async () => {
    const result = await chat.sendMessage(tempTxt);
    const newUserMessage = { role: "user", parts: [{ text: tempTxt }] };
    const botReply = await result.response.text();
    const newBotMessage = { role: "model", parts: [{ text: botReply }] };

    history_obj.history = chat.getHistory();

    setMessages((prev) => [...prev, newUserMessage, newBotMessage]);
    setTempTxt("");
  };

  return (
    <div className=" container">
      <div className="sidebar">
        <div className="side-head">
<img src={RClogo} alt="RedCloud Logo" width="60px" height="30px" />

          <div className="side-icon">{}
            <FaXmark />
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
        </div>

        {/* <hr></hr> */}

        {/* ..............................New Chat................................ */}
        <div className="new-chat-btn">
          <FontAwesomeIcon
            icon={faPenToSquare}
            style={{ marginRight: "8px" }}
          />
          <h3>New Chat</h3>
        </div>

        <hr></hr>

        <div className="chatHistory">
          <ChatHistory />
        </div>
        {/* .......................Logout............................... */}

        <div className="logout">
          <FontAwesomeIcon icon={faRightFromBracket} />
          <h3>Logout</h3>
        </div>
      </div>

      {/* ..................................Main.................................... */}
      <div className="main">
        <div className="header"></div>

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
        {/* ...........................footer........................ */}
        <div className="footer"> footer</div>
      </div>
    </div>
  );
};

export default Chat;
