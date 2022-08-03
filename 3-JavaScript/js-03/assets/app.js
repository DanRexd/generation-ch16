


/* CONTROL DE FLUJO */
/* Condicionales */
/* if */

let condicion = "5" // asignacion solo es un =

// == igual que, devulebe un verdaderi cuando se cumple la condicion.

if(condicion === "A"){

    /* codigo que se hace si se cumple
    la condicion A */

    console.log("Entro en la condicion A");
} else if(condicion === "B"){

    /* codigo que se hace si se cumple
    la condicion B */

    console.log("Entro en la condicion B");
} else if(condicion === "C"){

    /* codigo que se hace si se cumple
    la condicion C */

    console.log("Entro en la condicion C");
} else{

    /* codigo que se hace si NO se cumple
    ninguna de las condiciones anteriores */
    
    console.log("No entro en ninguna posicion");
}


function dividr (a , b){

    if (b=== 0){
        console.log("no se puede realizar esta operacion");
    }
    else {
        console.log((a/b));
    }
}



/* Swicht  */

let nuevaCondicion = "Sumar";

switch (nuevaCondicion){
    case "Restar":
        console.log("Buenos dias");
        break

    case "Multiplicar":
        console.log("Nos vemos");
        break
      
    case "Dividir":
        console.log("Te mando un saludo");
        break 
    
    default:      //No es necesario ponerle un break
        console.log("No entendi tu mensaje");    
}


let edad = 30

    switch(edad >= 18){
        case true:
            console.log("mayor");
            break
        case false:
            console.log("menor");
    }






    /* calculadora */

    let elegir = "Sumar";

switch (nuevaCondicion){
    case "Restar":
        console.log("Vamos a restar");
        break

    case "Multiplicar":
        console.log("Vamos a multiplicar");
        break
      
    case "Dividir":
        console.log("Vamos a dividir");
        break 

    case "Sumar":
        console.log("Vamos a sumar");
        break 
    
    default:      //No es necesario ponerle un break
        console.log("No entendi tu mensaje");    
}


if(elegir === "Sumar"){

    console.log("Vamos a sumar");

}else if(elegir == "Restar"){

    console.log("Vamos a restar");

}else if(elegir == "Dividir"){

    console.log("Vamos a dividir");

}else if(elegir == "Multiplicar"){

    console.log("Vamos a multiplicar");

} else {

    console.log("No entiendo");

}

