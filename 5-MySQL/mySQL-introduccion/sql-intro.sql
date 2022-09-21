show databases; 

/*
comentario en blque



*/

CREATE DATABASE tienda;

USE tienda;

-- DROP DATABASE tienda;

CREATE TABLE clientes( 
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR (50) NOT NULL,
apellido CHAR (50) NOT NULL,
telefono CHAR(50) NOT NULL,
direccion VARCHAR (150) NOT NULL
);

INSERT INTO clientes(nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Páramo', '5512890395', 'Comala'),
('Raul', 'Sanchez', '5512565258', 'Guadalajara'),
('Pedro', 'Páramo', '5512890395', 'Puelito');

SELECT * FROM clientes;

DELETE  FROM  clientes
WHERE clientes_id = 7;