
// Variable que simula los datos pedidos

const saludo = "Hola pai"
//Estrucutura JSON
const datos = [
    {
        nombre: "Daniel",
        apellido: "Rosas"
    },
    {
        nombre: "Daniel",
        apellido: "Rosas"
    },
    {
        nombre: "Daniel",
        apellido: "Rosas"
    },
]


//Funcion para simular una peticion
function obtenerDatos (){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            if(true){

                resolve(datos);

            } else{

                reject ("nunca te quiso");

            }

        }, 2000)
    })
}
 


//forma #1
obtenerDatos().then((datos) =>{ //podemos porer dentro de then cualquier cosa, reenombrar.
   console.log(datos);
}).catch((error) => {
console.log("existe un error en la peticion 1");
console.log(error);

})
/* console.log(obtenerDatos()); */


// Forma #2 - Funciones asincronas - await asycrona


async function funcionAsincrona() {
    console.log("Forma 2");
    try {
      const datos = await obtenerDatos();
      console.log(datos);
    } catch (error) {
      console.log(error);
    }
  }
  
  funcionAsincrona();
  