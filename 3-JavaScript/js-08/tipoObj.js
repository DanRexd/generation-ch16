/* Tipo predefinida  */ 
let tiempo = new Date() //new declara un objeto 
console.log(tiempo);
console.log(Math);  //math es estatico por que no necesita ser declarado en una variable 

let objLit = {
    nombre : 'Juan',
    edad : 35
}
let objConstructor = new Object(); //el construcor es el primer metodo de una clase
objConstructor.nombre = 'Dora'; //se cambia el nombre en una copia
objConstructor.edad = 21 // Se cambia la edad en una copia
console.log(objLit);
console.log(objConstructor);

objLit ['nombre'];
let llave = 'nombre';
console.log('esto es con llave' + objLit [llave]);



/* Tipo cadena */
  let cadena = 'Esto es una cadena';  //Se esta definiendo un objeto de forma primitiva
  //String es una clase por que inicia con una mayuscula
  let cadenaObje= new String ('esto es otra cadena obj');//new declara un objeto / 
  console.log(cadena);
  console.log(cadenaObje);


  /* Tipo numerico */

let numero = 13;
let numeroObj = new Number (13.13);
console.log(numero);
console.log(numeroObj);

/* Tipo Array */
//Ya  es objeto unico
let lista = ['2', '3', '5', '7'];
let listaObj = new Array ('1', '4', '6', '8,', '9');
console.log(lista);
console.log(listaObj);