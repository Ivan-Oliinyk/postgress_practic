-- CREATE TABLE products(ID INT PRIMARY KEY, name VARCHAR(20), price INT, color VARCHAR(20)); 
-- DROP TABLE products;

-- INSERT INTO products(name, price, color) VALUES("car",10200,"orange");
-- INSERT INTO products(name, price, color) VALUES("car",5070,"black");
-- INSERT INTO products(name, price, color) VALUES("car",24000,"gold");
-- INSERT INTO products(name, price, color) VALUES("bike1 turbo",10000,"purple");
-- INSERT INTO products(name, price, color) VALUES("bike12 smart5 ",20050,"yellow");
-- INSERT INTO products(name, price, color) VALUES("bike pro1 slow ",2500,"white");
-- INSERT INTO products( name, price, color) VALUES("bike",150,"green");

-- SELECT * FROM products;

-- SELECT * FROM products WHERE price = 500 and color = "red";
-- SELECT * FROM products WHERE price BETWEEN 20 AND 1000;
-- SELECT * FROM products WHERE color IN ("red", "black"); 
-- SELECT * FROM products WHERE color IN ("red", "yellow", "green", "gold") AND price BETWEEN 500 AND 100000 AND name="car";
-- SELECT * FROM products WHERE color LIKE 'g%'
-- SELECT * FROM products WHERE price LIKE '15%';
-- SELECT * FROM products WHERE name LIKE '%1%';
-- SELECT * FROM products WHERE name LIKE '__r%' AND color LIKE '___d';

