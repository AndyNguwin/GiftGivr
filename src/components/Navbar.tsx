import React from 'react';
import './Navbar.css';
import { Button } from '@mui/material';import { purple } from '@mui/material/colors';
;

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="/" className="site-title">GiftGivr</a>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
        <Button 
            component="a" 
            href="/LogIn" 
            variant="contained" 
            sx={{ backgroundColor: 'purple', '&:hover': { backgroundColor: 'darkpurple' } }} // Custom styles
            className="login-button"
          >
            Log In
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;