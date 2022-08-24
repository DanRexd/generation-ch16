public class EjemploSaludo {
    public static void main(String[] args) {

        Saludo objSaludo; //1.- Declarar el objeto
        objSaludo = new Saludo(); //2.- Crear el objeto
        objSaludo.saludar();// 3.- Llamando al metodo

        Saludo objSaludo0 = new Saludo();

        System.out.println(objSaludo.saludar0());
        System.out.println("este es otro objeto: ->" + objSaludo0.saludar0());



    }
}

