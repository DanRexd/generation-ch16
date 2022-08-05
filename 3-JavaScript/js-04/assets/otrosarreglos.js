
/* Sort */
//ordena los elementos de un arreglo


const arr = ["X", "A", "H", "a", "W", "b"];
arr.sort() // sort nos permite ordenar en fomra alfabetica, al igual que los numeros
console.log(arr);


const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];
arr2.sort ()
console.log(arr2);

const arr3 = [1, 15, 545, 5418, 348,481,8,3]
arr3.sort()
console.log(arr3);

const arr4 = [1, 15, 545, 5418, 348,481,8,3]
arr4.sort((a, b) => a - b)  // nos permite acomodar los numero en orden ascendente
console.log(arr4);

const arr5 = [1, 15, 545, 5418, 348,481,8,3]
arr5.sort((a, b) => b - a) //acomoda de fomra descendente
console.log(arr5);


//funcion declarada
//hoisting
//un proceso de reacomodo automatico de codigo

function sumar (a, b){
    return a + b;

}
console.log(sumar(5, 7));

//funciones expresadas
//hoisting no funciona


const multiplicar = function(a, b){
    return a * b;

}
console.log(multiplicar (3,5));

//funciones flecha

const dividir = (a, b) => a / b;

console.log(dividir(10, 2));

//forEach()
//ciclo automatico que recorre en todo nuestro arreglo

const arrNumeros = [1,4,6,8,10];

/* for( let i=0; i< arrNumeros.length; i++){
    arrNumeros[i] = arrNumeros[i] * 2;
} */
 /* console.log(arrNumeros); */


arrNumeros.forEach((elemento) =>  console.log (elemento *= 2) // (elemento *= 2) es lo mismo que (elemento = elemento * 2)
); //forEach (elemento, indice, arreglo completo)
