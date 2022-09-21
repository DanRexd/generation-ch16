CREATE DATABASE generation;
USE generation;

CREATE TABLE cohorte_16(
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
companieros INT NOT NULL,
direccion VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL
);

SELECT * FROM cohorte_16;

INSERT INTO cohorte_16 (nombre, apellido, companieros, direccion, proyecto)
VALUES ( 'Victor', 'Fernandez', 7, 'Tulancingo Hidalgo', 'Java' ),
( 'Jonathan', 'Vazquez', 6, 'CDMX', 'JavaScript' ),
( 'Raul', 'Sanchez', 4, 'Guadalajara', 'JavaScript' ),
( 'Maria', 'Vargas', 4, 'Estado de Mexico', 'Java' ),
( 'Magali', 'Quiro', 7, 'CDMX', 'JavaScript' );

SELECT * FROM cohorte_16;

DELETE FROM cohorte_16
WHERE alumno_id = 3;

SELECT * FROM cohorte_16;

-- DROP TABLE cohorte_16;

UPDATE cohorte_16
SET nombre = 'Marina',
apellido = 'Pardo'
WHERE alumno_id = 5;

SELECT * FROM cohorte_16;

SELECT nombre, apellido FROM cohorte_16 WHERE nombre = 'Victor';

SELECT * FROM cohorte_16;

SELECT nombre, apellido, companieros FROM cohorte_16 ORDER BY companieros DESC;
-- ASC - DESC


