/* For control; condicion, modificador */


for (let i = 0; i < 5; i ++){  //(i = i + 1)--> eso equivale a (i++) / pero si se quiere ir de 2 en 2 se pone i = i +2
    console.log(i);
}

// console.log("El valor de i es: " + i ); / no se ejecuta hasta que se ponga var en lugar de let 

//decremento

for (let i =5; i > 0; i --){ // -- para decremenar
    console.log(i);
}

//While

let control = 0; //variable de control

while (control < 5){ //condicion
    console.log("while: " + control);

    control++; //modificador
}

/* 
let control2 = true; CUIDADO CON LA RAM

while (control2 === false){
    alert("estoy trabajando")
} */


// do... while

let control3 =0

do{
       console.log("Do...while:" + control3);
       control3++;

}while(control3 < 5)