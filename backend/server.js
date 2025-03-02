require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const { addUser, userLogin, getWishlist } = require('./service');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// PostgreSQL Connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

pool.connect()
  .then(() => console.log("Connected to PostgreSQL!"))
  .catch(err => console.error("Connection error:", err));

// Simple API Route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Fetch all users
// app.get("/api/users", async (req, res) => {
//     try {
//       const result = await pool.query("SELECT id, first_name, last_name, email FROM users");
//       res.json(result.rows);
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Server Error");
//     }
//   });

// Create new account
app.post("/api/newaccount", async (req, res) => {
    try {
        console.log(req.body);
        const {firstName, lastName, username, email, password, birthday} = req.body;

        if (!firstName || !lastName || !username || !email || !password || !birthday) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if the email already exists
        const emailCheckQuery = 'SELECT id FROM users WHERE email = $1';
        const emailCheckResult = await pool.query(emailCheckQuery, [email]);
    
        if (emailCheckResult.rows.length > 0) {
        // If email exists, send a response indicating the email is already taken
        return res.status(400).json({ message: 'Email is already in use' });
        }

        const newUser = await addUser(firstName, lastName, username, email, password, birthday);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Log in
app.post("/api/login", async (req, res) =>{
    try {
        console.log(req.body);
        const {username, password} = req.body;

        const usernameCheckQuery = 'SELECT id FROM users WHERE username = $1';
        const usernameCheckResult = await pool.query(usernameCheckQuery, [username]);

        if (usernameCheckResult.rows.length == 0) {
            // If user doesn't exists, send a response indicating the username doesn't exist
            return res.status(400).json({ message: 'Username doesn\'t exist' });
        }

        const user_id = await userLogin(username, password);
        res.status(201).json(user_id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/wishlist", async (req, res) => {
    try {
        const user_id = req.query.user_id;
        // console.log(user_id)

        // Check if user_id exists
        if (!user_id) {
            return res.status(400).json({ error: "user_id is required" });
        }
        const wishlist = await getWishlist(user_id);
        console.log(wishlist);
        res.status(200).json(wishlist)
        // console.log(res);
    } catch (error) {
        console.error("Error fetching wishlist:", error);
        res.status(500).json({ error: "An error occurred while fetching the wishlist" });
    }
})

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
