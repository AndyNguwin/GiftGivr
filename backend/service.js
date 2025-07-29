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

const addWish = async (userId, wishItem) => {
    try {
        const query = `
            INSERT INTO wishlists (user_id, item_name)
            VALUES ($1, $2);
        `;
        const values = [userId, wishItem];
        await pool.query(query, values);
        return { success: true, message: "Wish item added successfully" };
    } catch (error) {
        console.error('Error adding wish:', error);
        return { error: "An error occurred adding wish" };
    }
}

const getWishlist = async (userId) => {
    try {
        const query = `
            SELECT item_name FROM wishlists WHERE user_id = $1;
        `;
        const values = [userId];
        const result = await pool.query(query, values);
        // console.log(result.rows);
        // return result.rows;
        return result.rows.map(row => row.item_name);
    } catch (error) {
        console.error('Error getting wishes:', error);
        return { error: "An error occurred getting wishes" };
    }
}

const getFriends = async (userId) => {
    try {
        const query = `
            SELECT u.first_name, u.last_name
            FROM friends f
            JOIN users u ON u.id = f.friend_id
            WHERE f.user_id = $1;
        `
        const values = [userId];
        const result = await pool.query(query, values);
        return result.rows.map(row => `${row.first_name} ${row.last_name}`);
    } catch (error) {
        console.error('Error getting friends:', error);
        return { error: "An error occurred getting friends" };
    }
}

module.exports = { addUser, userLogin, addWish, getWishlist };