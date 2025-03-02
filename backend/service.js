const { Pool } = require('pg');
require('dotenv').config();

// PostgreSQL Connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

// Function to add a user
const addUser = async (firstName, lastName, username, email, password, birthday) => {
  try {
    const query = `
      INSERT INTO users (first_name, last_name, username, email, password, birthday)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id;
    `;

    const values = [firstName, lastName, username, email, password, birthday];
    const result = await pool.query(query, values);
    return result.rows[0].id; // Return the newly created user id
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

const userLogin = async (username, password) => {
    try {
        const query = `
            SELECT id FROM users WHERE username = $1 AND password = $2;
        `;
        const values = [username, password];
        const result = await pool.query(query, values);
        // Check if a user was found
        if (result.rows.length === 0) {
            // No matching user found
            return { error: "Invalid username or password" };
        } else {
            // Return the user id (or other user data as needed)
            return { userId: result.rows[0].id };
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return { error: "An error occurred during login" };
    }
}

module.exports = { addUser, userLogin };