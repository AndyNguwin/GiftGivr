import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Router import
import Home from './pages/Home';
<<<<<<< HEAD
=======
import Interests from './pages/Interests';
import About from './pages/About';

import Navbar from './components/Navbar';
import LogIn from './pages/LogIn';
>>>>>>> b069d18671d0be302bcb408b3d346904d0d9705d

import CreateAccount from './pages/CreateAcc/AccountCreation';
import CreateWishList from './pages/CreateWishList/CreateWishList';
import Interests from './pages/Interests/Interests';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Loading...");

  // Don't wrap BrowserRouter inside another Router here.
  return (
    <>
    <Navbar />
    <BrowserRouter> {/* This should be the only Router wrapping your app */}
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/CreateWishlist" element={<CreateWishList />} />
        <Route path="/Interests" element={<Interests />} />
=======
        <Route path="/Interests" element={<Interests />} />
        <Route path="/about" element={<About />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/CreateWishlist" element={<CreateWishList />} />
>>>>>>> b069d18671d0be302bcb408b3d346904d0d9705d
      </Routes>
    </BrowserRouter></>
  );
}

export default App;