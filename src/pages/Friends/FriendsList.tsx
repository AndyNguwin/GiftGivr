import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FriendsList() {
    const [friends, setFriends] = useState([]);
    const user_id = localStorage.getItem('user_id');
    useEffect(() => {
        axios.get("http://localhost:5000/api/friends", {
            params: {
                user_id: user_id
            }
        }).then(response => {
            console.log(response.data);
            setFriends(response.data);
        }).catch(error => {
            console.error("Error fetching friends list:", error);
        });
    }, [user_id]);
}