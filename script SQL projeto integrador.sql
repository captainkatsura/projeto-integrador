  CREATE TABLE addresses (
	id INT PRIMARY KEY AUTO_INCREMENT,
    street VARCHAR(80) NOT NULL,
    house_number VARCHAR(6) NOT NULL,
    district VARCHAR(40) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    city VARCHAR(80) NOT NULL,
    state VARCHAR(2) NOT NULL,
    country VARCHAR(20) NOT NULL
);

CREATE TABLE arcanas (
	id INT PRIMARY KEY,
    arcana_type VARCHAR(15) NOT NULL
);

CREATE TABLE products (
	id INT PRIMARY KEY AUTO_INCREMENT,
    persona_name VARCHAR(50),
    persona_level INT,
    persona_img VARCHAR(999),
    persona_description VARCHAR(999),
    product_price DECIMAL(4, 2)
);

CREATE TABLE users (
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(45),
    email VARCHAR(30),
    cpf VARCHAR(14),
    phone_number VARCHAR(15),
    senha VARCHAR(12)
);

CREATE TABLE purchases (
	id INT PRIMARY KEY AUTO_INCREMENT,
    total DECIMAL(6, 2)
);

CREATE TABLE purchase_products (
	id INT PRIMARY KEY AUTO_INCREMENT
);



ALTER TABLE products
	ADD arcana_id INT NOT NULL,
	ADD CONSTRAINT FOREIGN KEY (arcana_id) REFERENCES arcanas(id);
    
ALTER TABLE users
	ADD address_id INT NOT NULL,
	ADD CONSTRAINT FOREIGN KEY (address_id) REFERENCES addresses(id);
    
ALTER TABLE purchases
	ADD user_id INT NOT NULL,
	ADD CONSTRAINT FOREIGN KEY (user_id) REFERENCES users(id),
    ADD purchase_address INT NOT NULL,
    ADD CONSTRAINT FOREIGN KEY (purchase_address) REFERENCES addresses(id);
    
ALTER TABLE purchases
	ADD product_id INT NOT NULL,
	ADD CONSTRAINT FOREIGN KEY (product_id) REFERENCES products(id),
    ADD purchase_id INT NOT NULL,
    ADD CONSTRAINT FOREIGN KEY (purchase_id) REFERENCES purchases(id);