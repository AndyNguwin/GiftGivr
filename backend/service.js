const { Pool } = require('pg');
require('dotenv').config();

// PostgreSQL Connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

// Function to add a user
const addUser = async (firstName, lastName, email, password, birthday) => {
  try {
    const query = `
      INSERT INTO users (first_name, last_name, email, password, birthday)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const values = [firstName, lastName, email, password, birthday];
    const result = await pool.query(query, values);
    
    return result.rows[0]; // Return the newly created user
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

module.exports = { addUser };