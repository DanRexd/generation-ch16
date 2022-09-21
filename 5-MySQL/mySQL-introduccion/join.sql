USE tienda;

-- Inner join
-- Explicita

SELECT *
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

SELECT 
clientes.cliente_id AS 'Numero de cliente',
clientes.nombre AS Nombre,
compra.fecha_compra
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Union implcita
SELECT *
FROM clientes, compra
WHERE clientes.cliente_id = compra.cliente_id;

-- LEFT JOIN
SELECT *
FROM clientes
LEFT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Mostrar  las direcciones de cada pais
USE sakila;

/*
adress - city_id / address 

city - city_id / city / country_id

country - country_id / country
*/

SELECT
address.address,
city.city,
city.country_id
FROM address
INNER JOIN city
ON address.city_id = city.city_id;

SELECT
country.country_id AS Pais,
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON city.city_id = country.country_id 
INNER JOIN address ON address.address_id = city.city_id; 

