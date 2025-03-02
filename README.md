# Setup

## Setting up the Frontend

### Prerequisites
    - Please download Node.js
    - Put Node.js into your system environment variables

### Install Frontend Dependencies
1. Change directory into the root project folder (./giftgivr)
2. Install dependencies
    ```sh
    npm install
    ```

## Setting up the Backend

### Prerequisites
    - Please download PostgreSQL
    - Put PostgreSQL into your system environment variables

### Create and Populate Database
1. Change directory into the backend folder
    ```sh
    cd ./backend/
    ```
2. Install dependencies for backend
    ```sh 
    npm install 
    ```
3. Create initial database (use password you input during PostgreSQL download)
    ```sh
    psql -U postgres -f create-database.sql
    ```
    - Simple database with a test user.
        ```
        Username: testuser
        Password: testpassword
        ```
4. Populate the database (use "testpassword")
    ```sh
    psql -U testuser -d postgres -f add-data.sql 
    ```

# Usage
1. In the root project folder (./giftgivr/) run:
    ```sh
    npm run start
    ```
2. Sample users to login with
    ```
    Username: jane.doe
    Password: password123
    ```
    ```
    Username: john.doe
    Password: password123
    ```

    

