import java.util.Map;
import java.util.HashMap;
import java.util.Scanner;

public class Diccionario {
    public static void main(String[] args) {

        /*
         *  Crear una clase llamada Diccionario
         *  Crear un programa en Java que realice lo siguiente:
         *  Crear un diccionario Español-Inglés, que contenga al menos 20 palabras (con traducción).
         *  Utilizar un objeto HashMap para almacenar los pares de palabras.
         *  Escoger al azar 5 palabras del mini diccionario.
         *  Pedir al usuario que teclee la palabra en inglés y que se imprima la traducción
         *
         * Extra:
         *  Pedir al usuario que teclee la traducción al inglés de cada una de las palabras y comprobará si son correctas.
         *  Al final debe mostrar por consola cuántas respuestas correctas e incorrectas tiene el usuario.
         * */


                Map<String, String> inglesEspañol = new HashMap<String,String>();
                inglesEspañol.put("Run", "Correr");
                inglesEspañol.put("Play", "Jugar");
                inglesEspañol.put("Jump", "Saltar");
                inglesEspañol.put("Fly", "Volar");
                inglesEspañol.put("Sing", "Cantar");
                inglesEspañol.put("Dance", "Bailar");
                inglesEspañol.put("Read", "Leer");
                inglesEspañol.put("Take", "Tomar");
                inglesEspañol.put("Scream", "Gritar");
                inglesEspañol.put("Walk", "Caminar");
                inglesEspañol.put("Drink", "Beber");
                inglesEspañol.put("Talk", "Hablar");
                inglesEspañol.put("Eat", "Comer");
                inglesEspañol.put("Wake-up", "Despertar");
                inglesEspañol.put("Greet", "Saludar");
                inglesEspañol.put("Fix", "Arreglar");
                inglesEspañol.put("Push", "Empujar");
                inglesEspañol.put("Drive", "Manejar");
                inglesEspañol.put("Forget", "Olvidar");
                inglesEspañol.put("Program", "Programar");

        System.out.println("Escribe la palabra en Inglés:");
        Scanner sc = new Scanner(System.in);
        String respuesta = sc.nextLine();
        String traducción = inglesEspañol.get(respuesta);
        System.out.println(traducción);






            }
        }









