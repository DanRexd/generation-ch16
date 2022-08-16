/* URL a consumir */

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";



/* Elementos del DOM */
const imgPokemon =document.getElementById("img-pokemon");
//console.log(imgPokemon); se hace el console para verificar si se trae correctamente

const idPokemon = document.getElementById("id-pokemon");
//console.log(idPokemon);

const nombrePokemon = document.getElementById("nombre-pokemon");
//console.log(nombrePokemon);

const listaHabilidades = document.getElementById ("ista-habilidades")
//console.log(listaHabilidades);

const listaTipos = document.getElementById ("lista-tipos")
//console.log(listaHabilidades);

const formulario = document.getElementById ("buscador-pokemon")
console.log(formulario);


/* Eventos */

formulario.addEventListener("submit", (e) => {
      e.preventDefault()
      console.log("Botonsotes");

      const inputPokemon = document.getElementById("busqueda-pokemon")
      console.log(inputPokemon.value);

      const nuevaBusqueda = urlPokemon + inputPokemon.value
      console.log(nuevaBusqueda);
    
      obtenerPokemon(nuevaBusqueda);

})






/* Funciones */

try {
      
} catch (error) {
      
}

async function obtenerPokemon (url){
      
      try {
            const respuesta = await fetch(url)
            const datos = await respuesta.json()
      /* 
            console.log(datos);
            console.log(datos.forms[0].name);
            console.log(datos.abilities);
            console.log(datos.id);
            console.log(datos.types);
            console.log(datos.sprites.other["official-artwork"].front_default); */
      
             const pokemon = {
      
               nombre:datos.forms[0].name,
               habilidades:datos.abilities,
               id:datos.id,
               tipo:datos.types,
               imagen:datos.sprites.other["official-artwork"].front_default
      
            }
             
            //imagen, nombre y ID
            imgPokemon.src = pokemon.imagen;
            idPokemon.textContent = `ID: ${pokemon.id}`;
            nombrePokemon.textContent = pokemon.nombre
              
            //habilidades
            //con inner creas la lista y con el = sustituyes el contenido y con += lo sumas a la lista ya echa en HTML
            let template = `  ` 
      
            for (let i=0; i < pokemon.habilidades.length; i++){
      
                  const nombreHabilidad = pokemon.habilidades[i].ability.name
                  //console.log(nombreHabilidad);
            
                  template += `<li class="list-group-item"> ${nombreHabilidad} </li>` 
            }
      
            listaHabilidades.innerHTML = template;
      
            //tipos
      
            //console.log(pokemon.tipo);
      
            let templateTipos = "" ;
        
            pokemon.tipo.forEach((tipo) => {
                
                const nombreTipo = tipo.type.name
                //console.log(nombreTipo);
        
                templateTipos += `<li class="list-group-item"> ${nombreTipo} </li>`
            })
                  listaTipos.innerHTML = templateTipos 
      } catch (error) {
            
      }
      
}
/* obtenerPokemon(urlPokemon); */
