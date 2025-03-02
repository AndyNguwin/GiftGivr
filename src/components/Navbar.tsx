import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="/" id="site-title">GiftGivr</a>
      <ul>
          <a href="/about" className='text'>About</a>
        <ul>
            <a href="/LogIn" className='text'>Log in</a>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;