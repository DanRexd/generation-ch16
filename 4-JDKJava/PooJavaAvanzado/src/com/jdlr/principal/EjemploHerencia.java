package com.jdlr.principal;

import com.jdlr.herencia.BasePadre;
import com.jdlr.herencia.Hija;
import com.jdlr.herencia.Hijo;

public class EjemploHerencia {
    public static void main(String[] args) {
        Hija h = new Hija();
        h.visualizarA();
        Hijo ho = new Hijo();
        ho.visualizarABC();

        BasePadre obj = new BasePadre();
        obj.setA(3216);

        System.out.println("Atributo de clase Base Padre ---> " + h.getA());

    }
}
