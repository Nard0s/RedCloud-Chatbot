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
import ChatRequest from "../Components/Chat/ChatRequest";

const Chat = () => {
  const [tempTxt, setTempTxt] = useState("");
  const [messages, setMessages] = useState([]);

  const handleOnChange = (e) => {
    setTempTxt(e.target.value);
  };

  const handleSendBtnClick = () => {
    const newUserMessage = { role: "user", text: tempTxt };
    setMessages((prev) => [...prev, newUserMessage]);
    setTempTxt("");

    const result = `
  ## Hello!

This is a test **markdown** message with a code block:

\`\`\`js
console.log('Hello World');
\`\`\`
    `;

    const botReply = result;

    const newBotMessage = { role: "bot", text: botReply };
    setMessages((prev) => [...prev, newBotMessage]);
  };

  return (
    <div className=" container">
      <div className="sidebar">
        <div className="side-head">
          <h3>RC-Ai</h3>
          <div className="side-icon">
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
