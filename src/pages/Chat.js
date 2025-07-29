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
import RClogo  from'../asset/redcloud-logo.png'
import ChatRequest from "../Components/Chat/ChatRequest";
import Button from '../Components/Shared/Button'
import { GoogleGenerativeAI } from "@google/generative-ai";
import Sidebar from '../Components/Chat/Sidebar.js'

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

      {
        role: "user",
        parts: [
          {
            text: "give me simple code",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay, Pitter! Do you want a super-duper simple code? Like a secret way to write things that only we know?Here s a fun one! It s called the Happy Letter Code !It s very easy!Every time you see a smiley face 😊, it means the letter A!Every time you see a star ⭐, it means the letter B!Every time you see a heart ❤️, it means the letter C!So, if I write:😊 ⭐What do you think that says, Pitter? Can you figure out our secret message?",
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


    // ==============================================sidebar=============================

  };

  return (
    <div className=" container">
      {/* =====================================sidebar===================================== */}
      <div className="ChatSidebar">
        <Sidebar/>
      </div>
      {/* =====================================Main=============================================== */}
      <div className="main">
        <div className="header"><img src={RClogo} alt="RedCloud Logo" width="30px" height="30px" /></div>

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
