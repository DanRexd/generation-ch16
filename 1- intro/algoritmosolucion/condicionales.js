
//CONTROL DE FLUJO

/* let nombre = "1"
let edad = 20; */

let nombre = prompt ("Escribe tu nombre");
console.log(nombre);
let edad = parseInt (prompt ("Escribe tu edad")); //el: Let edad = prompt ("Escribe tu edad") / solo indentifica strin
console.log(edad);

if (nombre === "Daniel Rosas" && edad === 23){ 
    console.log("Eres un");
    console.log("Estudiante👌" ); //Si es verdadero se ejecuta el console
} 

else if (nombre === "Maria") {
    console.log("Eres una mentora😍");
}
else if (nombre === "Marina" || nombre ==="Dios"){
    console.log("Eres la gfa😶‍🌫️");
}
else if (nombre === "Jonathan Vazquez" || nombre === "Raul" ) { 
    console.log("Eres un Admin😎");
}
 
else {
    console.log("Eres un extraño👽");
}
console.log("Fin del programa😘");






