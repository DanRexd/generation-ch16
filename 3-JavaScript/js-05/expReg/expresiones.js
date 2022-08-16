let texto = "Hoy parece que va a salir el sol"

let texto01 = "la espero en el aeropuerto de LA" 

let buscar = /La/; //busca conjunto de caracteres 




let texto1 = "te marqué anoche"

let buscar1 = /[eo]/ //busca caracteres individuales


console.log(buscar1.test(texto1));




let texto2 = "o = 9";

let buscar2 = /[1-10]]/; //busca rango de numero PERO NO FUNCIONO

console.log(buscar2.test(texto2));




let texto3 = "hola pai como estas te dejo mi numero 555 32 65 26"

let buscar3 = /\d{3}/; // busca el numero de digitos juntos

console.log(buscar3.test(texto3));




let texto4 = "daniel_5@outlook.com"

let buscar4 = /[\w]+@{1}[\w]+\.[a-z]{2,3}/; //busca correo electronico

console.log(buscar4.test(texto4));
