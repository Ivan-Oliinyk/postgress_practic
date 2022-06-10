-- CREATE TABLE users(
--   userID INTEGER PRIMARY KEY AUTOINCREMENT,
--   user_name TEXT VARCHAR(20) NOT NULL,
--   password NOT NULL,
--   email TEXT NOT NULL
-- )

-- CREATE TABLE orders (
--   orders_id INTEGER PRIMARY KEY AUTOINCREMENT,
--   userID INTEGER,
--   product VARCHAR(30) NOT NULL
-- );


-- INSERT INTO users (user_name, password, email) VALUES ("Tom", "123", "tom@mail.com");
-- INSERT INTO users (user_name, password, email) VALUES ("Tom", "123", "tom@mail.com");
-- INSERT INTO users (user_name, password, email) VALUES ("Sarah", "1232", "tom@mail.com");
-- INSERT INTO users (user_name, password, email) VALUES ("Poly", "asdas123", "Poly@mail.com");
-- INSERT INTO users (user_name, password, email) VALUES ("Doly", "asdads", "Doly@mail.com");
-- INSERT INTO users (user_name, password, email) VALUES ("Vrask", "12321", "Vrask@mail.com");

-- INSERT INTO orders (userID, product) VALUES (1, "car");
-- INSERT INTO orders (userID, product) VALUES (1, "bus");
-- INSERT INTO orders (userID, product) VALUES (1, "bike");
-- INSERT INTO orders (userID, product) VALUES (2, "cat");
-- INSERT INTO orders (userID, product) VALUES (3, "dog");
-- INSERT INTO orders (userID, product) VALUES (5, "chair");
-- INSERT INTO orders (userID, product) VALUES (6, "sofa");
-- INSERT INTO orders (userID, product) VALUES (4, "door");
-- INSERT INTO orders (userID, product) VALUES (10, "cucumber");


-- SELECT * FROM users;
-- SELECT * FROM orders;

-- SELECT * FROM orders INNER JOIN users ON orders.userID = users.userID;
-- SELECT * FROM users INNER JOIN orders ON users.userID = orders.userID;

-- SELECT * FROM orders INNER JOIN users ON orders.userID = users.userID AND user_name="Tom";
-- SELECT user_name, product FROM orders INNER JOIN users ON orders.userID = users.userID;

SELECT user_name, product FROM orders LEFT JOIN users ON orders.userID = users.userID;





