import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Router import
import Home from './pages/Home';
import Interests from './pages/Interests';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Loading...");

  // Don't wrap BrowserRouter inside another Router here.
  return (
    <BrowserRouter> {/* This should be the only Router wrapping your app */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Interests" element={<Interests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;