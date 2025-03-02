import React, {useState} from "react";
import './CreateWishList.css'
function WishList(){

    const [wishes, setWishes] = useState([]);

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
                <button className="hover-button">
                    Get AI Help
                    <span className="popup">Get AI reccommendations!</span>
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