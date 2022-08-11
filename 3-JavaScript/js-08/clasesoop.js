


class Persona {

    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
  get nombre(){  //get se utiliza para leer un atributo
    return this.nombre; // el _ es para hacer publico la variable
  }  
  set nombre(nombre){ //set se utiliza para modificar el valor de un atributo
    this.nombre = nombre;
  }
}

let persona1 = new Persona('jose', 'perez',);
console.log(persona1);

persona2.nombre = 'Hugo Sanchez'
console.log(persona2);



let persona2 = new Persona('Ana', 'Sofi',);
console.log(persona2);

