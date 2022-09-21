import java.util.Scanner;

public class Edad {
    public static void main(String[] args) {
        System.out.println("Esta en la clase Edad");

        //Determinar si una es mayor de edad

        //Tener la edad - pedir al usuario

        //Condicional para saber si es menor de 18

        //let nombre = prompt ("Escribe tu edad")

        Scanner escaner = new Scanner(System.in); //instanciar
        System.out.println("Escribe tu edad");
        int edad = escaner.nextInt();
        escaner.close();//Cuando ya no se necesita leer mas datos

        System.out.println(edad);

        //If else
        if (edad >= 18){
            System.out.println("Eres mayor de edad");
        }else {
            System.out.println("Eres menor de edad");
        }


        //Operador ternario
        String resultado = (edad >= 18)? "Eres mayor de edad" : "Eres menor de edad";
        System.out.println(resultado);















    }}
