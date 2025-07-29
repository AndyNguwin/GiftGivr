import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function FriendsPage() {
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
        <></>
    );
}