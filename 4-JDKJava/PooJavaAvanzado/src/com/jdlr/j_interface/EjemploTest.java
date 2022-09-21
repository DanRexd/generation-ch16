package com.jdlr.j_interface;
    public class EjemploTest{
        public static void main(String[] args) {
            System.out.println("Test.CONV = " + Test.CONV);
            System.out.println("Prueba =" + Prueba.CONV);
            Prueba p = new Prueba();
            System.out.println("p.CONV = " + p.CONV);

            //Tengo 2 metodos y quiero 1 pero no los puedo llamar diretamente con "Test ts = new Test()"
            // Es una instancia/declaracion tipo referencia "Test ts = new Prueba();"
            Test ts = new Prueba();
            ts.metodo1(3);
            //ts.metodo2("hola");
            System.out.println("ts.metodo2( \"hola\") = " + ts.metodo2( "hola"));
            p.metodoPropio();

            // Solo metodoPropio se puede llamar con p (class Prueba)  y no con ts (class Interface) por que esta afuera de la interface


            Test1 s1 = new Prueba();
            s1.metodo01();
            System.out.println("asi se impime el metodo 02 = " + s1.metodo02());


    }
}

