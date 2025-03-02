import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Router import
import Home from './pages/Home';
import WishList from './pages/WishList';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Loading...");

  // Don't wrap BrowserRouter inside another Router here.
  return (
    <BrowserRouter> {/* This should be the only Router wrapping your app */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WishList" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;