import java.util.*;

public class Colecciones3 {
    public static void main (String [] args){

        System.out.println("Array list");

        List<String> comidas = new ArrayList<String>();
        comidas.add("Pozole");
        comidas.add("Tostadas");
        comidas.add("Ceviche");
        comidas.add(2,"Esquites");

        System.out.println(comidas);

        List<Integer> numeros = new ArrayList<Integer>(Arrays.asList(1,2,3,4,456,618));
        System.out.println(numeros);

        System.out.println("______________________________________________");
        System.out.println("HashSet");

        Set<String> ciudades = new HashSet<>();
        ciudades.add("CDMX");
        ciudades.add("GLD");
        ciudades.add("MTY");

        System.out.println(ciudades);

        //Otra forma de crear un HashSet

        Set<Boolean> verdad = new HashSet<>(Arrays.asList(true,false,true,false));
        System.out.println(verdad);

        System.out.println("_____________________________________");
        System.out.println("HashMap");

        //Nos permite guardar pares de valores
        //llave : valor
        //HashMap <Llave, Valor>

        Map<Integer,String> alumnos = new HashMap<>();
        alumnos.put(1, "Pedro");
        alumnos.put(2, "Sofia");
        alumnos.put(3,"Salma");
        alumnos.put(4,"Miguel");
        alumnos.put(4,"Saul"); //Se sobreescribe
        alumnos.put(5,"Miguel");

        System.out.println(alumnos);
        System.out.println(alumnos.size());
        System.out.println(alumnos.values());
        System.out.println(alumnos.keySet());
        System.out.println(alumnos.get(2));

        System.out.println("___________");
        System.out.println("-for");

        for (int i=0; i<alumnos.size(); i++){
            Object llaves = alumnos.keySet().toArray()[i];
            System.out.println(alumnos.get(llaves));

        }























    }
}
