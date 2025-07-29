import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleLoginLogout = (e: React.MouseEvent) => {
    e.preventDefault(); 

    if (storedIsLoggedIn) {
      console.log('Logging out...');
      // localStorage.setItem('isLoggedIn', 'false');
      localStorage.clear();
      navigate('/');
    } else {
      console.log('Logging in...');
      navigate('/login');
    }
  };

  return (
    <nav className="navbar">
      <a href="/" id="site-title">GiftGivr</a>
      <ul>
        <a href="/CreateWishlist" className="text">Wishlist</a>
        <a href="/about" className="text">About</a>
        <ul>
          <a 
            href="#" 
            className="text" 
            onClick={handleLoginLogout}
          >
            {storedIsLoggedIn ? 'Log out' : 'Log in'}
          </a>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
