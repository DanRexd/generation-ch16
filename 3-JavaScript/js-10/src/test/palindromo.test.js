const palindromo = require ('../js/palindromo');


describe('Pruebas de la funcion palindromo', () =>{

    test ('debe regresar "Es un palindromo" si ingresamos ojo', () => {
              let mensaje = 'Es un palindromo';
              let palabra = 'ojo';

              expect ( palindromo(palabra)).toBe(mensaje);
    })

    test ('No debe regresar "Es un palindromo" al ingresar generation', () =>{
        let mensaje = 'Es un palindromo';
        let palabra = 'generation';

        expect( palindromo(palabra)).not.toBe(mensaje)
    })

    test ('Al ingresas un numero deber regresar el mensaje', () => {
        let mensaje = 'No es una palabra';
        let valor = 1

        expect( palindromo(valor)).toBe(mensaje)
    })

    


});