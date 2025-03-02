require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

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
app.get("/users", async (req, res) => {
    try {
      const result = await pool.query("SELECT id, first_name, last_name, email FROM users");
      res.json(result.rows);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
