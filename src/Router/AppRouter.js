import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ChatMessage from '../Components/Chat/ChatMessage.js'
import MessageList from '../Components/Chat/MessageList.js'
import ChatRequest from '../Components/Chat/ChatRequest.js'
import InputField from '../Components/Shared/InputField.js'
import Chat from '../pages/Chat.js'
import LoginForm from '../Components/Auth/LoginForm.js'
const AppRouter = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>

     </div>
  )
}

export default AppRouter
