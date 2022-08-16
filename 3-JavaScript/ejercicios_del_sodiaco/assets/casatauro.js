



const carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"]
console.log(carreritas);

//Andrea adelanta a Maria

/* const carreritasFinal = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"] */

carreritas [2] = "Andrea"
carreritas [3] = "Maria"
carreritas [4] = "Jesus"
carreritas [5] = "Jose"

/* carreritas.splice (2,0, "Andrea") //Manera mas eficiente
carreritas.splice (5,1) */

console.log(carreritas);


//Jose es descalificado

carreritas.pop()
console.log(carreritas);

//Detras de Lucia y antes de Roberto se clasifican: Cristobal Fernanda y Armando

carreritas.splice (1, 0, "Cristobal","Fernanda", "Armando")
console.log(carreritas);

//Toma el primer puesto nuevo concursate Federico.

carreritas.unshift ("Federico");
console.log(carreritas);






