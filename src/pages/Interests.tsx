// WishList.tsx
//
// import { Routes, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './Interests.css';

import { useState } from 'react';


function Interests() {
    // The Select your interests thing
    const [interests, setInterests] = useState<string[]>([]);
    const availableTags = ['Art', 'Sports', 'Music', 'Technology', 'Travel', 'Food', 'Nature', 'Two Baddies', 'One Porsche', 'Badminton', 'Pokemon', 'Lady Gaga', 'Monday Tuesday Wednesday Thursday Friday'];
    const [newtag, setNewtag] = useState('');

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

    return (
        <>  
            <div className='container h1'>
                <div className='logo'>
                    What are some of your interests?
                </div>

                <div id='input'> <Button>
                    Hey
                </Button></div>

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

                <div id='next'>
                    Next
                </div>
                
            </div>
        </>
    )
}

export default Interests;