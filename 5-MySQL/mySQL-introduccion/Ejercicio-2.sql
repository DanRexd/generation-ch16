CREATE DATABASE ejercicio_relaciones;

USE ejercicio_relaciones;

CREATE TABLE cohorte(
cohorte12_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumnos_id INT NOT NULL,
instructor INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR(255) NOT NULL
);

SELECT * FROM cohorte;

CREATE TABLE alumno(
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255),
nivel_ingles VARCHAR(255) NOT NULL,
amonestaciones INT NOT NULL
);

SELECT * FROM alumno;

CREATE TABLE instructor(
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
cumpleanios DATE NOT NULL,
RFC VARCHAR(255) NOT NULL,
supervisor VARCHAR(255) NOT NULL,
sesiones VARCHAR(255) NOT NULL
);

SELECT * FROM instructor;

CREATE TABLE equipo(
equipo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL);

SELECT * FROM equipo;

CREATE TABLE direccion(
direccion_id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL
);

SELECT * FROM equipo;

INSERT INTO cohorte(alunmos_id, instructor_id, numero_alumnos, horario, tipo_sesiones, ciudad)
VALUES (1, 1, 47, '9:30 a 5:30', 'tecnicas', 'ciudad'),
(1, 1, 47, '9:30 a 5:30', 'tecnicas', 'ciudad');





