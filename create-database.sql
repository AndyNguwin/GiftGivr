-- Connect to the 'postgres' database (or any other default database)
\c postgres;

-- Drop the 'giftgivr' database if it exists
DROP DATABASE IF EXISTS giftgivr;

-- Create the 'giftgivr' database
CREATE DATABASE giftgivr;

-- Connect to the newly created 'giftgivr' database
\c giftgivr;

-- Create the 'users' table if it doesn't already exist
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    username VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    birthday DATE NOT NULL
    -- interests TEXT
);

-- CREATE TABLE IF NOT EXISTS birthdays (
--     id SERIAL PRIMARY KEY,
--     id INT REFERENCES users(id),
-- )

-- Create the 'wishlists' table if it doesn't already exist (one-to-many)
CREATE TABLE IF NOT EXISTS wishlists (
    user_id INT REFERENCES users(id),
    item_name VARCHAR(100),
    -- item_desc TEXT
    PRIMARY KEY (user_id, item_name)
);

-- Create the 'friends' table (many-to-many relationship) if it doesn't already exist
CREATE TABLE IF NOT EXISTS friends (
    user_id INT REFERENCES users(id), -- User in the friendship
    friend_id INT REFERENCES users(id), -- The other person in the friendship
    -- created_at TIMESTAMP DEFAULT NOW(), -- Timestamp for when the friendship was made
    PRIMARY KEY (user_id, friend_id), -- Ensure unique friendship
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_friend FOREIGN KEY (friend_id) REFERENCES users(id) ON DELETE CASCADE
    -- CONSTRAINT unique_friendship CHECK (user_id < friend_id) -- Ensures consistent ordering

    -- Inserting command to maintain consistent ordering to not need to hold duplicate
    -- INSERT INTO friends (user_id, friend_id) 
    -- VALUES (LEAST(user1_id, user2_id), GREATEST(user1_id, user2_id));
);

CREATE USER testuser WITH PASSWORD 'testpassword';
GRANT ALL PRIVILEGES ON DATABASE giftgivr TO testuser;
GRANT USAGE, CREATE ON SCHEMA public TO testuser;

GRANT INSERT, SELECT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO testuser;
GRANT USAGE, SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA public TO testuser;

ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT INSERT, SELECT, UPDATE, DELETE ON TABLES TO testuser;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT USAGE, SELECT, UPDATE ON SEQUENCES TO testuser;


