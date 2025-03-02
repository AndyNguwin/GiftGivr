// CreateAccount.tsx
import React, { useState } from 'react';
import './AccountCreation.css';  // Import the CSS file

const CreateAccount: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!username || !password || !email) {

      setMessage('Please fill in both fields');
      return;
    }
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`email: ${email}`);

    // Simulate account creation
    setMessage(`Account created for ${username}`);
    setUsername('');
    setPassword('');

    
  };

  return (
    
    <div className="container">

      <div className="cornerH">
        <h1>GiftGivr</h1>
      </div>
      <div className="square"></div>

      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
      {message && (
        <p className={`message ${message.includes('created') ? 'success' : 'error'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default CreateAccount;
