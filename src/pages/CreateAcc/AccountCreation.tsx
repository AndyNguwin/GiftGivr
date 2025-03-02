// CreateAccount.tsx
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './AccountCreation.css';  // Import the CSS file


const AccountCreation = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!username || !password || !email) {

      setMessage('Please fill in both fields');
      return;
    }

    navigate("/Interests");
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`email: ${email}`);

    // Simulate account creation
    setMessage(`Account created for ${username}`);
    setUsername('');
    setPassword('');

    
  };
  return (


    <div className='container'>
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input' >
          <input id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='youremail@something.com'/>
        </div>
        <div className='input'>
          <input id="username"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='YourUsername'/>
        </div>
        <div className='input'>
          <input id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='apples123'/>
        </div>
      </div>
      <div className="submit-container">
        <button className="submit" onClick={handleSubmit}> Sign up</button>
      </div>. {message && (
        <p className={`message ${message.includes('created') ? 'success' : 'error'}`}>
          {message}
        </p>
      )}


    </div>
  )
}

export default AccountCreation