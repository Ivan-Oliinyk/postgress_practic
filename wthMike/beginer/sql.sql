-- CREATE TABLE USERS (
--   username TEXT NOT NULL PRIMARY KEY, 
--   password NOT NULL,
--   email NOT NULL
-- );

-- INSERT INTO users (username, password, email) VALUES ("mike", "123456", "mike@gmail.com");
-- INSERT INTO users (username, password, email) VALUES ("sarah", "12312312", "sarah@gmail.com");
-- INSERT INTO users (username, password, email) VALUES ("romas", "3432423", "romase@gmail.com");
-- INSERT INTO users (username, password, email) VALUES ("loki", "sdada2123", "loki@gmail.com");
-- INSERT INTO users (username, password, email) VALUES ("doly", "12sdas12", "doly@gmail.com");
-- INSERT INTO users (username, password, email) VALUES ("poly", "0000000", "poly@gmail.com");

-- SELECT * FROM users;

-- SELECT username FROM users;
-- SELECT password FROM users;
-- SELECT password FROM users WHERE username="mike";
-- SELECT email,username FROM users WHERE  password LIKE '%123%'
-- SELECT username FROM users WHERE username LIKE '%y';
-- SELECT username FROM users WHERE username LIKE '__k%';

    -- ( === change field === )
-- UPDATE users SET email="@gmail.com", password="1111111" WHERE username = "mike" 

    -- ( === remove field === )
-- DELETE FROM users WHERE username = "loki";