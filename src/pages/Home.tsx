// Home.tsx
import React, { useEffect, useState } from 'react';
import './Home.css';
import { Button } from '@mui/material';import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check login status on component mount
        const loginStatus = localStorage.getItem('isLoggedIn');
        console.log(loginStatus);
        if (loginStatus != 'true') {
          navigate('/LogIn');  // Redirect to login if not logged in
        }
      }, [navigate]);
      
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>GiftGivr</h1>
        <p>Create a wishlist with all your favorite items for your friends and family to shop from.
          Connect with your loved ones to see what they want for the Holidays and keep track of their birthday!
          Never forget a birthday or gift idea again!
        </p>
        <Button 
          className="home-button" 
          variant='contained'
          href="/createAccount"
          sx={{ backgroundColor: 'purple', '&:hover': { backgroundColor: 'darkpurple' } }} >
          Join Today!</Button>
        </div>
      <img className="home-img" src="src/assets/pexels-pixabay-17796.jpg" alt="Presents"/> 
    </div>
  );
}

export default Home;