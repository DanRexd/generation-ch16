

let x = 10
console.log(x.length);

//objeto persona y sus atributos nombre apellido creo y edad

let personas = {
    nombre :'Daniel',

    apellido:'Rosas',

    correo:'daniel@gmail.com',

    edad:25

}

console.log(personas);


let newPersonas = new Object ();

newPersonas.nombre = "Luis"
newPersonas.apellido = "Santoyo"
newPersonas.correo = "luis@gmail.com"
newPersonas.edad = 25 

console.log(newPersonas);


let people = {
    nombre :'Daniel',

    apellido:'Rosas',

    correo:'daniel@gmail.com',

    edad:25,

    /* nombreCompleto: function (){
        return this.nombre + ' ' + this.apellido
    } */

    idioma: 'es',

  get leng (){
    return this.idioma.toUpperCase()
  },  

  set leng (lang){
    this.idioma = lang.toLocaleLowerCase();
  }

}


console.log(people.leng);
people.lang = 'ES'
console.log(people.idioma)




people.tel= '5512890395' //Se agrego el atributo tel
people.tel2 = '5512551255' // 
//let algo = new Object ();
console.log(people);
console.log(people.nombre);
console.log(people.nombreCompleto());

//for in

for (varPropiedad in people){
    console.log(people[varPropiedad]);
}

let peopleString = JSON.stringify(people)
console.log(peopleString);