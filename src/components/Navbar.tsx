import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="/" className="site-title">GiftGivr</a>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/createaccount">CreateAccount</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;