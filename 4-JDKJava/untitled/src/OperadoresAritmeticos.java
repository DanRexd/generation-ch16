import java.awt.*;
import java.util.Scanner;

public class OperadoresAritmeticos {
    public static void main (String [] args){

        int i = 5, j = 4, suma = i + j;
        System.out.println("la suma de i + j es : " + suma); //9
        System.out.println("La suma de i + j es: " + (i + j));//9
        System.out.println("La suma de i + j es: " + i + j);//54

        int resta = i - j;
        System.out.println("la resta de i - j es: " + resta);//1
        System.out.println("la resta de i - j es: " + (i-j));//1

        int multi = i * j;
        System.out.println("la multi de i * j es: " + multi);//20
        System.out.println("la multi de i * j es: " + (i * j));//20

        //int div = i / j;
        //System.out.println("la division de i / j es: " + div);
        //System.out.println("la division de i / j es: " + (i / j));

        float div = (float) i /(float) j;
        System.out.println("la division de i / j es: " + div);
        System.out.println("la division de i / j es: " + ((float) i /(float) j));

        int resto = i % j;
        System.out.println("El residuo de i % j es: " + resto);
        System.out.println("la division de i % j es: " + (i % j));

        Scanner scanner = new Scanner(System.in);
        System.out.println("cual es tu nombre pai?");
        String dato = scanner.next();
        System.out.println("Mucho gusto mi queridisimo señor " + dato);





    }
}
