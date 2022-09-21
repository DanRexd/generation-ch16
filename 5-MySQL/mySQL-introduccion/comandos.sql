USE world;

SELECT * FROM country;

SELECT NAME, Population FROM country ORDER BY Population DESC;

SELECT NAME, Population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE NAME = 'Mexico';

-- Alias
SELECT 5 + 5; 

SELECT Name AS Nombre_de_pais, Population AS 'Población del país' FROM country ORDER BY Nombre_de_pais DESC;

SELECT DISTINCT Continent FROM country; -- filtra datos repetidos

-- WHERE clausula
-- < > <= >= != = 

SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country Where Continent = 'North America' ORDER BY Continent ASC;

-- Between 
-- Se utiliza junto con WHERE

SELECT * FROM Country WHERE Population BETWEEN 5000000 AND 7000000 ORDER BY Population DESC;
SELECT * FROM Country WHERE Population NOT BETWEEN 5000000 AND 7000000 ORDER BY Population DESC;

-- OR / AND != -- logicos 

SELECT * FROM country WHERE Continent = 'Asia' OR Continent = 'Europe' OR Continent = 'North America';
SELECT * FROM country WHERE Continent != 'Asia' AND Continent != 'Europe' AND Continent != 'North America';

-- operador IN
SELECT * FROM country WHERE Continent IN ('Asia', 'Europe', 'South America') ORDER BY continent;

-- Filtrar valores NULL
SELECT * FROM country WHERE IndepYear IS NULL;
SELECT * FROM country WHERE IndepYear IS NOT NULL;

-- LIKE para buscar un patron especifico
-- '%' buscar cualquier cantidad de caracteres
-- '__' especificamos un caracter

SELECT * FROM country WHERE Name LIKE '%co%'; 
SELECT * FROM country WHERE Name LIKE '%e_a'; -- busca e y a separado con un caracter de diferencia
SELECT * FROM country WHERE Continent LIKE 'asia';