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
    // if (result.length > 0){
    //     return true;
    // } else {
    //     return false;
    // } 
    return result.rows[0].id; // Return the newly created user id
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

module.exports = { addUser };