"use stric"; /* No autocompleta */

//alt + flecha = cambias de posicion de linea

/* shift + alt + a */



/* Tipo de datos */
/* tipos de variables */
let a = 20  //loca

var b = 5    //global 

const c = 0   //constante local
 
//string

let cadena = "hola mundo"
let cadena2 = 'Hola mundo'
console.log(cadena2);

//numero

let numero = 5;
let numero1 = 5.3;
let numero2 = -5.3; 



//boolean

let booleano = true;
let booleano2 = false;

//undefined

let variable;
console.log(variable);

let variable2;
console.log(variable2 + 5); //= NaN not a number

//null

let vacio = null
console.log(vacio);


//tratar de realizar alguna operación aritmética con algún dato que no es un número
/* 
Plantillas literales
      template strings
      literal strings
      interpolación */

console.log(`Esta es una cadena ${5 + 4}`);
console.log("Esta es una cadena normal ${5+4}");

let nombre = 'Raul';

 let presentacion = ``;
console.log("Mi nombre es " + nombre);
console.log(`Yo me llamo ${nombre}`);


console.log("<h1>Hola</h1>");
console.log(`<h1>Hola</h1>`); 

//arreflos -matrices - arrays
let arr = [1, "A", null, undefined, [true, false]];
console.log(arr[4][0]);

if (arr.length >= 5){
    console.log("Tiene mas de 5 elementos"
    );
}

let arr2 = new Array ();
console.log(arr2);

/* Objetos */
//clave valor / valor 
const persona = {
    nombre:`Daniel`, 
    edad: 25,
    hobbies: [
        "comer",
        "ejercitarse",
        "fumar"
    ],
    auto: {
        marca: "Tesla",
        modelo: "Pointer",
        year: 2000
    },        
    saludar: function (){
        return "saludar" ;
    }
};

//Notacion de punto
console.log(`mi nombre es ${persona.nombre}`);

console.log(`mi hobbie fav es ${persona.hobbies[0]}`);

console.log(`Mi carro fav es ${persona.auto.marca}`);

console.log(`La accion que realizo es ${persona.saludar()}`);







