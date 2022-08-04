

//arreglos
// coleccion de elementos
//cada elemento ocupa una posicion
//Esa posicion se conoce como indice y comienza apartir de 0

let arr = [1, 2, 3, 4];
console.log(arr);

//propiedades - describen
//metodos - acciones que puede realizar
console.log(arr[2]);
arr [4] = 190;    // se reemplaza el 4
arr [4] = "Hola"; //se sobrescribe 
console.log(arr);


//metodos de arreglos

const arreglo = ["adios"];

 //push () /se agrega un elemento al final 
arreglo.push (2);  
arreglo.push (true)

let num = 500
arreglo.push (num); 

arreglo.unshift ("A");//se agrega un elemento al principio del elemento
arreglo.unshift ("B");

console.log(typeof(arreglo [4]));// se ve el tipo de elemento 

console.log(arreglo);

//Metodos para quitar elementos
//pop()
// nos regresan el valor eliminado

let dato1 = arreglo.pop();
console.log(dato1);

let dato2 = arreglo.shift()
console.log(dato2);


//splice()
//quita una parte de cualquier elemento del arreglo 

console.log(arreglo);

arreglo.splice (1, 0, "iPhone") // (posicion a tomar, elementos a desaparecer, elemento o elementos a introducir)

console.log(arreglo);


//modifican el arreglo original 

//metodos que no modifican el arreglo original
//hacen una copia, modifica una copia

//slice ()
//Cortar partes de un arreglo

let dato3= arreglo.slice (0, 2);

//debemos indicar un rango
// y tambien genera un arreglo de los elementos cortados

console.log(dato3);




