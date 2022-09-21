import java.util.HashSet;
import java.util.Set;

public class Colecciones2 {
    public static void main(String[] args) {

        //SET no permite elementos duplicados
        //HashSet

        //no guradan los valores en el orden que se van agregando

        Set<String> miSet = new HashSet<>();

        miSet.add("Juan");
        miSet.add("Pedro");
        miSet.add("Luis");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");

        miSet.remove("Felipe");

        System.out.println(miSet);
        System.out.println(miSet.size());
        System.out.println(miSet.contains("Felipe"));//Regresa un boolean

        for (String nombre : miSet){
            System.out.println(nombre);
        }













    }
}
