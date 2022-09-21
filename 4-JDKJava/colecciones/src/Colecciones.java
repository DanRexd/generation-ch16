import java.util.ArrayList;
import java.util.List;

public class Colecciones {
    public static void main (String [] args){

        //list -- ArrayList
        //los valores se ordenan segun el orden en que se agreguen
        // permiten tener valores duplicados
        // Es una coleccion de objetos de un mismo tipo

        List <String> meses = new ArrayList<String>();

        meses.add("Enero");
        meses.add("Febrero");
        meses.add("Marzo");
        meses.add(1,"Abril");

        String mes = meses.remove(3); //String mes = / para guardar el elemento borrado


        System.out.println(meses);
        System.out.println(mes);
        System.out.println(meses.get(0));
        System.out.println(meses.size());

        for (String elemento : meses){
            System.out.println(elemento);
        }


        //List<int> numeros = new ArrayList<int>();

        int num1 = 10;
        Integer num2 = 10;

        System.out.println(num1 + 10);
        System.out.println(num2 - 5);
        System.out.println(num2.getClass().getSimpleName());

        List<Integer> numeros = new ArrayList<Integer>();

        numeros.add(2);
        numeros.add(252);
        numeros.add(24);
        numeros.add(12);

        System.out.println(numeros);

    }
}
