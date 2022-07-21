
const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
 console.log(personas);

 personas.splice(1,1); // (1 es el elemento numero 1, 1 es la cantodad de elementos que se vana a borrr apartir del seleccionado)
console.log(personas);

personas.splice(2,1);
console.log(personas);

personas.unshift ("Luis");
personas.splice (2,1);
console.log(personas);

//personas.unshift(personas.splice(1,1)[0]); //Es lo mismo para quitar y poner a Luis

personas.push ("Daniel");
console.log(personas);

console.log(personas.indexOf ("Maria")); //indexOf muestra la posicion del primer elemento buscado
//Si buscas un elemento que no exite va imprimer un "-1"

console.log(personas.indexOf ("Daniel"));
