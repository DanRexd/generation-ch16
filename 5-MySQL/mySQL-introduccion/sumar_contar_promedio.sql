USE sakila;

-- SUM(), AVG(), COUNT()

SELECT customer_id, amount FROM payment;

-- COUNT  cuenta las filas de una tabla
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;

SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;

-- Cantodad de ventas que tuvo el trabajador 2 y 1
SELECT COUNT(*) FROM payment WHERE staff_id = 2;
SELECT COUNT(*) FROM payment WHERE staff_id = 1;

-- Cantidad de clientes distintos
SELECT COUNT(DISTINCT customer_id) FROM payment;

/*
SUM
*/

SELECT SUM(amount) AS 'Total de rentas' FROM payment;

SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id = 2;

-- ¿Cual cliente realizo mas rentas? 148 - 46 / 318 - 12
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) ASC;

-- Group by - 	Agrupa solo si se usa con SUM, AVG y COUNT, pero omite los valores repartidos
-- Group BY - ordena segun la columna o funcion que le indiquemos ASC / DESC
SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;

-- ¿Cual cliente gasto mas? 526 -221.55 / 248 - 50.85
SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total ASC;

-- AVG() -regresa el promdedio
SELECT AVG (amount) AS promedio FROM payment;

-- ¿Cual cliente gasto mas en promedio?
SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;
SELECT customer_id, AVG(amount) AS promediocliente FROM payment GROUP BY customer_id ORDER BY promediocliente DESC;

 



