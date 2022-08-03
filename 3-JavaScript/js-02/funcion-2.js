


function miFuncion( a , b ) {
    return (a + b)
}
let resultado = miFuncion (3, 6)
console.log("El resultado es " + resultado);


            /* funcion expresion o anonimas  */
            
            //una function de tipo expresion de tiene nombre

let suma = function (a,b) {return (a+b)};
            
         //otra forma de verlo estructurado
let suma1 = function (a,b) {
    return (a+b)

};


let suma3 = function (a,b) {return (a+b)};
resultado = suma3 (2,3)

let caracteres = "La suma es : "
console.log(caracteres + resultado);


 // resta division y multiplicacion



 function resta (a , b) {
    let result = (a - b);
    console.log("El resultado es " + result);
 }
 

resta ( 10 , 2);

function division (a , b) {
    let result1 = (a / b);
    console.log("El resultado es " + result1);
 }
 

division ( 10 , 2);


function multiplicacion (a , b) {
    let result3 = (a * b);
    console.log("El resultado es " + result3);
 }
 

multiplicacion ( 10 , 2);


//resta multi y div con anonimo o expresion

//resta

let resta2 = function (a , b) {return (a - b)};
console.log(/* "El valor de la resta es " */ resta2 (5,5));

//multi

let multi2 = function (a , b) {return (a * b)}
console.log(multi2 (5, 5));

//div

let div2 = function (a , b){return (a / b)}
console.log(div2 (5, 5));



/* Self invoking */
// Esta funcion no es reutilizable y ocupa muy poca memoria 

(function(a, b){
    console.log("el resultado de self invoking es: " + (a + b));
}
) (10, 5)

