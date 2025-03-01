// Home.tsx
import React from 'react';
import './Home.css';
import { Button } from '@mui/material';
import presents from '../assets/presents.png';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>Create a wishlist with all your favorite items for your friends and family to shop from.
         Connect with your loved ones to see what they want for the Holidays and keep track of their birthday!
        Never forget a birthday or gift idea again!
      </p>
      <Button className="home-button" variant='contained'>Join Today!</Button>
      <img src={presents} alt="Presents" /> 
    </div>
  );
}

export default Home;
