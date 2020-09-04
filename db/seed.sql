-- SETUP TABLE & DATA
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(200),
    product_desc VARCHAR(2000),
    price INTEGER
);

INSERT INTO PRODUCTS (product_name, product_desc, price)
VALUES
('Starburst', 'Unexplainably Juicy', 2),
('Mango', 'Tropical', 1);

SELECT * FROM products;



--