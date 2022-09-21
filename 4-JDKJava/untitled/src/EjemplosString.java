
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

public class EjemplosString {
    public static void main (String [] args) {

        String curso = "Curso de Java";
        System.out.println("Estamos en el " + curso);
        String nombre = "Dany Rosas"; //declaracion Literal
        String resultado = new String( "Curso de Java"); //declaracion Referencia
        System.out.println("Me gusta el " + resultado);

        boolean esigual = curso == resultado; //compara la declaracion/objeto
        System.out.println("la variable curso y resultado es " + esigual);

        esigual = curso.equals(resultado); //equal compara el contenido de la declaracion y el equalsIgnoreCase ignora las mayusculas y minuculas
        System.out.println("esigual " + esigual);

        String concat = curso + " con " + nombre;
        System.out.println("Tomare el " + curso + " y me llamo " + nombre);

        String dia = "Entresemana";
        String concat2 = concat.concat(" los dias ").concat(dia);
        System.out.println("otra fomra de concatenar: " + concat2);





    }
}