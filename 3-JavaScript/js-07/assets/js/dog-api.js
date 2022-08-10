`use stric`


//URLs para consumir

const urlAeatorios = "https://dog.ceo/api/breeds/image/random"

//elementos del DOM
const imagenPerrito = document.getElementById("img-perrito");
console.log(imagenPerrito);


const btn = document.getElementById("btn-perrito")
console.log(btn);


//eventos asociados
btn.addEventListener("click" , () => {

    console.log("Boton presionado");

//Agregar funcionalidad
    obtenerPerritoAleatorio(urlAeatorios)
    
    
})

//Funciones
async function obtenerPerritoAleatorio (url){

    const respuesta = await fetch (url)
    const datos = await respuesta.json()

    console.log(datos);
    console.log(datos.message);
    console.log(datos.status);

    imagenPerrito.src = datos.message
}

 obtenerPerritoAleatorio(urlAeatorios) 