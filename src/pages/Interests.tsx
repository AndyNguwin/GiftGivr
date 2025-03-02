// WishList.tsx
//
// import { Routes, Route, Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import './Interests.css';

import { useState } from 'react';


function Interests() {
    // The Select your interests thing
    const [interests, setInterests] = useState<string[]>([]);
    const [availableTags, setAvailableTags] = useState<string[]>([
        'Art', 'Sports', 'Music', 'Technology', 'Travel', 'Food', 'Nature', 'Two Baddies', 'One Porsche'
    ]);
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
            setAvailableTags([...availableTags, userInput.trim()]);
            setInterests([...interests, userInput.trim()]);
        }
        setUserInput('');
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    };

    return (
        <>  
            <div className='container h1'>
                <div className='logo'>
                    What are some of your interests?
                </div>

                <div id='input'> 
                    <TextField 
                        label='Enter interest' 
                        value={userInput} 
                        onChange={(e) => setUserInput(e.target.value)} 
                        onKeyDown={handleKeyDown}>
                    </TextField>
                    <Button onClick={handleUserInput} style={{ marginLeft: '10px' }}>
                        Add
                    </Button>
                </div>

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

                <div id='next' href=''>
                    Next
                </div>
                
            </div>
        </>
    )
}

export default Interests;