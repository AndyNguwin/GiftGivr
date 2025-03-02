import React, {useEffect, useState} from "react";
import './CreateWishList.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
function WishList(){
    const navigate = useNavigate();
    useEffect(() => {
        // Check login status on component mount
        const loginStatus = localStorage.getItem('isLoggedIn');
        console.log(loginStatus);
        if (loginStatus != 'true') {
            navigate('/LogIn');  // Redirect to login if not logged in
        }
    }, [navigate]);

    const user_id = localStorage.getItem('user_id');
    const [wishes, setWishes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/wishlist", {
            params: {user_id : user_id}
        }).then(response => {
            console.log(response.data);
            setWishes(response.data);
        }).catch(error => {
            console.error("Error fetching wishlist:", error);
        });
    }, [user_id]);

    const [newWish, setNewWish] = useState("");
    const [message, setMessage] = useState('');

    function handleInputChange(e: { target: { value: React.SetStateAction<string>; }; })
    {
        setNewWish(e.target.value);

    }
    
    function addWish()
    {
        if (newWish.trim() !== "")
        {
            setWishes(() => [...wishes, newWish]);
            console.log(wishes);
            setNewWish("");
        }

    }

    function removeWish(index: number)
    {
        const updatedWishes = wishes.filter((_, i)=> i !== index);
        setWishes(updatedWishes);

    }

    function MovetoNext(){
        if (wishes.length == 0)
        {
            // move along 
            setMessage('You need to wish for something!');
            return;
        }
        else 
        {
            // go to next page (routing) 
        }


    }
    return (
        <div>
        <div className="box">
        <div className="wishlist">
            <h1 style={{marginRight:'630px'}}>Create Your Perfect Wishlist</h1>
            <div>
                <input 
                type="text"
                placeholder="Enter your gift"
                value={newWish}
                onChange={handleInputChange}/>

                <button
                    className="add-button"
                    onClick={addWish}>
                    Add
                </button>

                <a href="https://chatgpt.com/">
                <button
                    className="hover-button"
                    onClick={addWish}>
                    AI Help
                    <div className="hover-popup">Get AI Help!</div>
                </button>
                </a>
            </div>

            <ol>
                {wishes.map((wish, index) =>
                    <li key={index}>
                        <span className="text">{wish}</span>
                        <button 
                            className="delete-button"
                            onClick={() => removeWish(index)}>
                            X</button>
                    </li>
                    
                )}
            </ol>
        </div>
        </div>
        <button className="continue-button"
                    onClick={MovetoNext}>
                Continue
            </button>

            {message && (
            <p className={`message ${message.includes('created') ? 'success' : 'error'}`}>
            {message}
            </p>
        )}
        </div>
        

    );
}

export default WishList