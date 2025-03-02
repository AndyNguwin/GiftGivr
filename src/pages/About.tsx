// About.tsx
import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About GiftGivr</h1>
      <p>Welcome to GiftGivr! Ever run out of gift ideas or fear that the person won't like them?
        GiftGivr is here to help you! With the ability to connect with friends and view their wishlist,
        you can easily find the perfect gift! With reminders for birthdays and gift suggestions, 
        you will never forget the perfect item for a special occasion. 
        <br />
        <br />
        Join us today, and let's make every celebration memorable!
      </p>
    </div>
  );
}

export default About;