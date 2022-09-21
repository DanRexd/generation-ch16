import java.util.Objects;
import java.util.Scanner;

public class Bucles {
    public static void main(String[] args) {

        //bucle controlado
        for(int i=0; i<10; i++){
            System.out.println(i);
        }

        //While
        //bucle no controlado
        //la condicion se debe modificar dentro del while
        //mientras la condicion sea true

        String condicion = "Hola";
        Scanner sc = new Scanner(System.in);

        // == != estamos comparando datos primitivos
        //la condicion se bede de modificar dentro del while
        while (!Objects.equals(condicion, "Hola")){

            System.out.println("Saludame");
            condicion = sc.next();


        }

        //el do while a diferencia del while ejecuta el codigo aunque sea una vez y despues pregunta

        do {
            System.out.println("Saludame x2");
            condicion = sc.next();
        } while (!Objects.equals(condicion, "Hola"));












    }
}
