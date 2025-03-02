// WishList.tsx
//
// import { Routes, Route, Link } from 'react-router-dom';

import { TextField, Button } from '@mui/material';
import './Interests.css';

import { useState } from 'react';


function Interests() {
    // The Select your interests thing
    const [interests, setInterests] = useState<string[]>([]);
    const availableTags = ['Art', 'Sports', 'Music', 'Technology', 'Travel', 'Food', 'Nature', 'Two Baddies', 'One Porsche', 'Badminton', 'Pokemon', 'Lady Gaga', 'Monday Tuesday Wednesday Thursday Friday'];

    // The add your own tag thing
    const [userInput, setUserInput] = useState('');

    // Function for when you click on each tag
    const handleTagClick = (tag: string) => {
        setInterests((prevInterests) => {
            // If the tag is already selected, remove it, otherwise add it
            if (prevInterests.includes(tag)) {
                return prevInterests.filter(interest => interest !== tag);
            } else {
                return [...prevInterests, tag];
            }
        });
    };

    // Function for adding user input as a tag
    const handleUserInput = () => {
        if (userInput.trim() && !interests.includes(userInput)) {
            setInterests([...interests, userInput.trim()]);
        }
        setUserInput('');
    }

    return (
        <>  
            <div className='container h1'>
                <div className='logo'>
                    What are some of your interests?
                </div>

                <div id='input'> <TextField label='Enter interest' value={userInput} onKeyDown={handleUserInput}>
                    Hey
                </TextField></div>

                <div className='tags-container'>
                {availableTags.map((tag) => (
                    <button
                        key={tag}
                        className={`tag ${interests.includes(tag) ? 'selected' : ''}`}
                        onClick={() => handleTagClick(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="selected-tags">
                <h3>Your Interests:</h3>
                <ul>
                    {interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
                
            </div>
                <a href="/CreateWishlist">
                <div id='next'
                >
                    Next
                </div>
                </a>
                
            </div>
        </>
    )
}

export default Interests;