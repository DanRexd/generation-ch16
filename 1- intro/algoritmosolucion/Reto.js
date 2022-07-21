// Ejercicio Reto 
/*
Mario quiere averiguar si un numero es divisible entre 7 y 8. 
Ayuda a Mario a escribir una funcion que tome a un numero. 
Si el numero es divisible entre 7 y 8, el progrma debe retornar verdadero
Si el numero no es divisible entre 7 y 8 retornar falso
*/


let numeroDivisible = prompt ("Escribe un numero para saber si es divisible entre 7 y 8");

console.log(numeroDivisible);
console.log(divisibilidad(numeroDivisible));

function divisibilidad (numero){

if ( numero%7 === 0 && numero%8 === 0) {
    return true;
}

else {
    return false;
}


}
