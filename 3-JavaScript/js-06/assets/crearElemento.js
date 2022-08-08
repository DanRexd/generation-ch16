

//Crear un elemento

const imagen = document.createElement('img'); // se crea el elemento


//modificar los atributos html del elemento
imagen.src = 'https://placeimg.com/200/200/animals'
imagen.alt = "imagenes aleatorias de animales"


//lo insertamos en un elemento padre
document.body.appendChild(imagen);
document.body.insertAdjacentElement("afterbegin",imagen) //incierta elementos al principio de body
document.body.insertAdjacentElement("afterend",imagen)  // insierta elementos despues del body
document.body.insertAdjacentElement("beforebegin",imagen) //Insierta en el head
document.body.insertAdjacentElement("beforeend",imagen) //insierta al final del body


//forma correcta de crear e insertar un elemento
//1.- se crea el elemento que tendra la imagen
//2.- seleccionar el elemento padre

const padreimg = document.getElementById ('padreImg');

//3.- crear el elemento

const imagen2 = document.createElement('img');

//4.-modificamos los atributos del elemento

imagen2.src = 'https://placeimg.com/200/200/nature';
imagen2.alt ='imagenes de naturaleza';

//5.-insertar elemento

padreimg.appendChild(imagen2);



//Utilizar forEach para pintar datos 

const frutas = ["Toroja", "Manzana", "Mandarina", "Limon", "Granada", "Melon" ]


const listaFrutas = document.getElementById ('frutas');

//forma 1
/* frutas.forEach((element) =>{
    const li = document.createElement('li');
    li.textContent =element
    listaFrutas.appendChild(li);
});
 
 */
//forma 2
frutas.forEach ((el) => {
    listaFrutas.innerHTML += `<li>${el}</li>`;
}

)