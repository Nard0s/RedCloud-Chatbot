// src/components/LoginForm.jsx
import React, { useState } from 'react';
import '../Themes/Theme.css'
import './Styles/LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [action, setAction] = useState('Sign up');
  // const [action, setAction] = useState('Log in');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };


  return (
    <div className='form'>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">{action} to <spam>RC-AI</spam> </h2>

          {action === "Log in"?<div></div>:
          <div>
              <input
              type="text"
              placeholder="Full Name"
              className="login-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              />
              <input
              type="password"
              placeholder="New Password"
              className="login-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              />
            <input
              type="password"
              placeholder="Confirm Password"
              className="login-input"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button">Sign up</button>
            <p>Already have an account  <a onClick={()=>{setAction("Log in")}}> <spam>Sign in</spam></a></p>
        </div>}

          {/* ====================================== Login =============================== */}

          {action === "Sign up"?<div></div>:
            <div >
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /> 
              
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button">Log In</button>
            <p >If u did't have account <a onClick={()=>{setAction("Sign up")}}><spam>Create account</spam></a></p>
          </div>} 
      
        </form>
      </div>



    

    </div>
  );
};

export default LoginForm;