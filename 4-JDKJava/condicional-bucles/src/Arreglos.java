public class Arreglos {
    public static void main (String [] args){
        System.out.println("Arreglos");

       // En los arreglos no se pueden mezclar tipos de datos

        int[] numerosAleatorios = {1,2,3,4,5,6};
        String[] valores = {"Jalo","Adios","etc"};

        //byte otrosNumeros [] = {1, 2, 3}; otra forma de escribir un arreglo

        char [] caracteres = new char[4];
        caracteres[0] = 'h';
        caracteres[1] = 'o';
        caracteres[2] = 'l';
        caracteres[3] = 'a';

        System.out.println(numerosAleatorios[2]);
        System.out.println(valores[0]);
        System.out.println(caracteres);

        //For each

        for(String elemento : valores){
            System.out.println(elemento);

        }

        for (int numero : numerosAleatorios){
            System.out.println(numero);
        }



















    }
}
