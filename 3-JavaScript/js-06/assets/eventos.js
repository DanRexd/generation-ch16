
function saludar  (){
      alert ('Hola');
}




//addventListener ()

const boton = document.getElementById ('boton');
console.log(boton);

boton.addEventListener('click', () =>{
    alert ('hola pai')
}
);


const formulario =document.getElementById('form');

formulario.addEventListener ('submit', (e) =>{
    e.preventDefault();
    alert(formulario[0].value);
}
)