import React from "react";
import "../Themes/Theme.css";
import "./Styles/MessageList.css";
import ChatMessage from "./ChatMessage";
import ChatRequest from "./ChatRequest";

const MessageList = ({ messages }) => {
  return (

    <div className="continuer">
      <div className="chat">
        {messages.map((msg, key) => {
          if (msg.role === "user") {
            return (
              <div className="request" key={key} >
                <ChatRequest message={msg} />
              </div>
            );
          }

          if (msg.role === "model") {
            return (
              <div className="response" key={key} >
                <ChatMessage message={msg} />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
    
  );
};

export default MessageList;
