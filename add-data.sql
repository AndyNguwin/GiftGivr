\c postgres;

\c giftgivr;

INSERT INTO users (first_name, last_name, email, password, birthday)
VALUES 
('Jane', 'Doe', 'jane.doe@example.com', 'password123', '1990-01-01')
ON CONFLICT (email) DO NOTHING;

INSERT INTO wishlists (user_id, item_name)
VALUES 
(1, 'Laptop'),
(1, 'Desk'),
(1, 'Keyboard')
ON CONFLICT (user_id, item_name) DO NOTHING;

INSERT INTO users (first_name, last_name, email, password, birthday)
VALUES 
('John', 'Doe', 'john.doe@example.com', 'password123', '1992-02-02')
ON CONFLICT (email) DO NOTHING;

INSERT INTO wishlists (user_id, item_name)
VALUES 
(2, 'iPad'),
(2, 'iPhone')
ON CONFLICT (user_id, item_name) DO NOTHING;

INSERT INTO friends (user_id, friend_id) 
VALUES (LEAST(1, 2), GREATEST(1, 2))
ON CONFLICT (user_id, friend_id) DO NOTHING;