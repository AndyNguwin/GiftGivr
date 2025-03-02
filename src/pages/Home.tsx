// Home.tsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
    const [users, setUsers] = useState([]); 

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Error fetching users:", error)
            });
    }, []);

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is a simple Home page.</p>
            <h1>USERS</h1>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>{user.first_name} {user.last_name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
