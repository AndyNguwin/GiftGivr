import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    console.log('Navbar component rendered');
  return (
    <nav className="navbar">
      <a href="/" className="site-title">GiftGivr</a>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/login">Log In</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;