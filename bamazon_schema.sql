CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER AUTO_INCREMENT,
    product_name VARCHAR(50),
    department_name VARCHAR (50),
    price DECIMAL (10,4) NOT NULL,
    stock_quantity INTEGER,
    PRIMARY KEY (item_id)

);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("1965 Framus 5/165-52GL Strato De Luxe Star Bass", "Instruments", 1275.15, 1),
("", "", 0.00 , 0 ),
("", "", 0.00 , 0 ),
("", "", 0.00 , 0 ),
("", "", 0.00 , 0 ),
("", "", 0.00 , 0 ),
("", "", 0.00 , 0 ),
("", "", 0.00 , 0 ),
("", "", 0.00 , 0 ),
("", "", 0.00 , 0 );

