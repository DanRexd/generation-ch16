

function saludar ( ) {
    console.log("Hola");
}

//saludar ();


//Array o arreglos son las matrices 


let num = [ ];
console.log(num);

let arr1= new Array ();
console.log(arr1);         //cualquiera de las dos se puede utilizar, se utiliza mas la de arriba



// ¿Como usar un arreglo?}

const arr = [1,2,3,4,5 ];
console.log(arr);
//notacion de corchetes []
 
console.log(arr [3]);

arr [5] = 25;
arr [6] =8;
arr [6] =2; // lo sustituye al de arriba
//arr [7] = undefined
//arr [8] = undefined
//arr [9] = undefined
arr [10] =1;

console.log(arr);

//propiedades de los arreglos
//Las propiedades son las descripciones de nuestro arrelgo

console.log(arr.length);

//Metodos
//acciones que no spermiten 

//array push ejemplo


const frutas = ["Manzana", "Platano" ];
console.log(frutas);

//array push

let fruta = "Toronja" 

frutas.push ("Naranja")
frutas.push (fruta) //Se añadio un push como variable
console.log(frutas);

//pop
//quita un elemento al final del arreglo

/*frutas.pop ();
console.log(frutas); // ya se borro en la consoloa
console.log();
*/

let elementoBorrado = frutas.pop();      
//console.log(fruta);  // cualquieras de las dos se puede poner para que me devulva
console.log(elementoBorrado);

//unshift
//agrega un elemento al inicio del arreglo

let devolver = frutas.unshift("Uva","Pera")
console.log(frutas);
console.log(devolver);


//shift
//elimina un elemento del inicio de un arreglo

frutas.shift (); // se quita la uva
frutas.shift (); //se quota la pera
let frutaQuitada1 = frutas.shift (); //se quita la manzana y se pone variable
let frutaQuitada2 = frutas.shift (); //se quita el platano y se pone variable
console.log(frutas);    //se imprime ya quitado los primeros 4 elementos 
console.log(frutaQuitada1);
console.log(frutaQuitada2);


//Arreglo multidimencional



const newArr = [ 1, 45, "Hola", "Adios", true, null, [30, 31, 32],[
    "azul", "Amarillo", "Verde"] ];

    console.log(newArr [6]); // se imprime = (3) [30, 31, 32]
    console.log(newArr [6][1]); // se imprime el 31 del conjunto 6
    console.log(newArr [7][2]); // se imprime "Verde"

// Objetos
//Estructura especial llamada objeto 
//Nos permiten guardar pares de valores
// key - value 

const obj = {
              nombre : "Pedro", 
              edad : 25,
              color : "Azul",
              hobbies : [ "leer", "correr"],
              newArr : newArr     //Nos muestra el arreglo ya echo        
}; 

console.log(obj.edad); // Muestra la edad = 25
console.log(obj.hobbies[1]); // Muestra = Correr 


