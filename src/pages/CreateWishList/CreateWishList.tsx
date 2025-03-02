import { useNavigate } from 'react-router-dom';
import WishList from './CreateWishComp';
import { useEffect } from 'react';

function CreateWishList() {
    const navigate = useNavigate();
    useEffect(() => {
        // Check login status on component mount
        const loginStatus = localStorage.getItem('isLoggedIn');
        console.log(loginStatus);
        if (loginStatus != 'true') {
            navigate('/LogIn');  // Redirect to login if not logged in
        }
    }, [navigate]);
    
    return(
        <WishList/>
    );
};


export default CreateWishList;