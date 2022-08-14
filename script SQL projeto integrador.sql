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

-- //////////////////////////////////////////////////////////////////////////////


ALTER TABLE products
	ADD arcana_id INT NOT NULL,
	ADD CONSTRAINT FOREIGN KEY (arcana_id) REFERENCES arcanas(id);
    
ALTER TABLE users
	ADD address_id INT,
	ADD CONSTRAINT FOREIGN KEY (address_id) REFERENCES addresses(id);
    
ALTER TABLE users
	MODIFY address_id int
    
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
    
ALTER TABLE users
	ADD user_picture VARCHAR(999);
    
ALTER TABLE purchase_products
	ADD purchase_id INT NOT NULL,
	ADD CONSTRAINT FOREIGN KEY (purchase_id) REFERENCES purchases(id);
    
ALTER TABLE purchase_products
	ADD product_id INT NOT NULL,
	ADD CONSTRAINT FOREIGN KEY (product_id) REFERENCES products(id);

-- ////////////////////////////////////////////////////////////////////

SELECT * FROM arcanas

INSERT INTO arcanas(id, arcana_type)
VALUE (1, 'Fool')

INSERT INTO arcanas(id, arcana_type)
VALUE (2, 'Magician')

INSERT INTO arcanas(id, arcana_type)
VALUE (3, 'Priestess')

INSERT INTO arcanas(id, arcana_type)
VALUE (4, 'Empress')

INSERT INTO arcanas(id, arcana_type)
VALUE (5, 'Emperor')

INSERT INTO arcanas(id, arcana_type)
VALUE (6, 'Hierophant')

INSERT INTO arcanas(id, arcana_type)
VALUE (7, 'Lovers')

INSERT INTO arcanas(id, arcana_type)
VALUE (8, 'Chariot')

INSERT INTO arcanas(id, arcana_type)
VALUE (9, 'Justice')

INSERT INTO arcanas(id, arcana_type)
VALUE (10, 'Hermit')

INSERT INTO arcanas(id, arcana_type)
VALUE (11, 'Fortune')

INSERT INTO arcanas(id, arcana_type)
VALUE (12, 'Strength')

INSERT INTO arcanas(id, arcana_type)
VALUE (13, 'Hanged Man')

INSERT INTO arcanas(id, arcana_type)
VALUE (14, 'Death')

INSERT INTO arcanas(id, arcana_type)
VALUE (15, 'Temperance')

INSERT INTO arcanas(id, arcana_type)
VALUE (16, 'Devil')

INSERT INTO arcanas(id, arcana_type)
VALUE (17, 'Tower')

INSERT INTO arcanas(id, arcana_type)
VALUE (18, 'Star')

INSERT INTO arcanas(id, arcana_type)
VALUE (19, 'Moon')

INSERT INTO arcanas(id, arcana_type)
VALUE (20, 'Sun')

INSERT INTO arcanas(id, arcana_type)
VALUE (21, 'Judgement')

-- ///////////////////////////////////////////////////////////////////
    
SELECT * FROM products

INSERT INTO products(persona_name, persona_img, persona_level, persona_description, arcana_id, product_price)
VALUES ('Izanagi', 'caminho', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1, 200);

INSERT INTO products(persona_name, persona_img, persona_level, persona_description, arcana_id, product_price)
VALUES ('Jiraiya', 'caminho-2', 4, 'Vestibulum vitae velit nec erat venenatis dapibus nec sit amet lorem. Aenean vel dolor vel nisl lacinia blandit.', 2, 260);

INSERT INTO products(persona_name, persona_img, persona_level, persona_description, arcana_id, product_price)
VALUES ('Senri', 'caminho-3', 9, 'Vivamus vel rhoncus felis. In a velit ullamcorper, sagittis neque at, blandit ligula.', 4, 400);

INSERT INTO products(persona_name, persona_img, persona_level, persona_description, arcana_id, product_price)
VALUES ('Omoikane', 'caminho-4', 7, 'Duis rhoncus ex augue, eu convallis dolor sollicitudin et. Nam nec dui consequat, porttitor justo nec, porta augue.', 6, 440);

INSERT INTO products(persona_name, persona_img, persona_level, persona_description, arcana_id, product_price)
VALUES ('Tomoe', 'caminho-5', 6, 'In hac habitasse platea dictumst. In vitae ligula at augue tincidunt rutrum in vitae sem.', 8, 420);

INSERT INTO products(persona_name, persona_img, persona_level, persona_description, arcana_id, product_price)
VALUES ('Angel', 'caminho-6', 4, 'Sed iaculis augue mi, sit amet euismod ante aliquam eget. Curabitur vestibulum enim in lorem facilisis facilisis.', 9, 410);

INSERT INTO products(persona_name, persona_img, persona_level, persona_description, arcana_id, product_price)
VALUES ('Forneus', 'caminho-7', 6, 'Nulla facilisi. Maecenas velit felis, eleifend ut placerat vel, facilisis non eros.', 10, 490);

INSERT INTO products(persona_name, persona_img, persona_level, persona_description, arcana_id, product_price)
VALUES ('Sandman', 'caminho-8', 5, 'Nullam sed lacus lobortis, mattis quam vitae, consectetur sapien. Suspendisse in aliquet purus.', 12, 490);

INSERT INTO products(persona_name, persona_img, persona_level, persona_description, arcana_id, product_price)
VALUES ('Valkyrie', 'caminho-9', 8, 'Curabitur eget suscipit sapien. Maecenas condimentum dapibus nulla, at sollicitudin felis tempus vel.', 12, 510);

INSERT INTO products(persona_name, persona_img, persona_level, persona_description, arcana_id, product_price)
VALUES ('Anzu', 'caminho-10', 15, 'Proin elementum, urna quis vestibulum luctus, neque felis semper est, a ultricies justo ligula eu risus.', 15, 612);


UPDATE products SET 
persona_img = "/DB-izanagi.jpeg"
WHERE id = 3;

UPDATE products SET 
persona_img = "/DB-jiraiya.jpg"
WHERE id = 4;

UPDATE products SET 
persona_img = "/DB-senri.jpg"
WHERE id = 5;

UPDATE products SET 
persona_img = "/DB-omoikane.jpg"
WHERE id = 6;

UPDATE products SET 
persona_img = "/DB-tomoe.png"
WHERE id = 7;

UPDATE products SET 
persona_img = "/DB-angel.png"
WHERE id = 8;

UPDATE products SET 
persona_img = "/DB-forneus.png"
WHERE id = 9;

UPDATE products SET 
persona_img = "/DB-sandman.png"
WHERE id = 10;

UPDATE products SET 
persona_img = "/DB-valkyrie.png"
WHERE id = 11;

UPDATE products SET 
persona_img = "/DB-anzu.png"
WHERE id = 12;

-- //////////////////////////////////////////////////////////////////////


SELECT * FROM users
SELECT * FROM addresses

ALTER TABLE users
	MODIFY senha VARCHAR(999) NOT NULL
    
ALTER TABLE users
ADD CONSTRAINT UNIQUE (email)