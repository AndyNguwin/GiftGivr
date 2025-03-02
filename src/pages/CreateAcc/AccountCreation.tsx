// CreateAccount.tsx
import React, { useState } from 'react';
import './AccountCreation.css';  // Import the CSS file
import axios from 'axios';

const CreateAccount: React.FC = () => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!username || !firstname || !lastname || !password || !email || !birthday) {
      setMessage('Please fill in all fields');
      return;
    }
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`email: ${email}`);

    // Simulate account creation
    axios.post('http://localhost:5000/api/newaccount',{
      firstName : firstname,
      lastName : lastname,
      username : username,
      email : email,
      password : password,
      birthday : birthday
    }).then(() => {
      console.log(`Account created for ${username}`);
      setMessage(`Account created for ${username}`);
      setFirstname("");
      setLastname("");
      setUsername('');
      setEmail("");
      setPassword('');
      setBirthday("");
    }).catch((error) => {
      console.error("Error creating account:", error.response ? error.response.data : error.message);
      setMessage(`Error creating account: ${error.response ? error.response.data.message : error.message}`);
    })
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
          <label htmlFor="firstname" style={{ display: 'block', marginBottom: '5px' }}>
            First Name
          </label>
          <input
            id="firstname"
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label htmlFor="lastname" style={{ display: 'block', marginBottom: '5px' }}>
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Enter your last name"
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
        <div>
          <label htmlFor="birthday" style={{ display: 'block', marginBottom: '5px' }}>
            Birthday
          </label>
          <input
            id="birthday"
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            placeholder="Enter your birthday"
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
