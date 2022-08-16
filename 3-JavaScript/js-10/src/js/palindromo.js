/* const palindromo = (palabra) => {
          let palabraInvertida = palabra.split('').reverse().join('')
}
console.log('Generation');
 */


/* Operador ternario */

const palindromo = (palabra) => {

    if(typeof palabra === 'number'){
        return 'No es una palabra'
    }



    let palabraInvertida = palabra.split('').reverse().join('');
    return (palabra === palabraInvertida) ? 'Es un palindromo' : 'No es un palindromo'

}

console.log(palindromo('ojo'));

//(condicion) ? verdadera  :falsa
//(condicion) ? if         : else


module.exports = palindromo 