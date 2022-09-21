package MetPrincipal;

import MenuP.MenuOp;
import MiEjemploJava.Persona;
import MiFecha.Fecha;
import MiSaludo.Saludo;

import java.util.Scanner;

public class EjecutaT {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        MenuOp menuOP = new MenuOp();
        //menuOP.menu();
        System.out.println("Eliga una opción ->");
        int op =sc.nextInt();

      do {

          menuOP.menu();

          switch (op) {
              case 1:
                  Saludo s = new Saludo();
                  s.saludar0();
                  s.saludar();
                  break;
              case 2:
                  Persona p = new Persona();
                  p.setNombre("Diego");
                  p.setEdad(18);
                  p.setNss(321);
                  System.out.println("el valor de la variable p nombre es " + p.getNombre());
                  System.out.println("el valor de la variable p edad es " + p.getEdad());
                  System.out.println("el valor de la variable p nss es " + p.getNss());
                  break;
              case 3:

                  Fecha objF = new Fecha(25, 8, 2022);
                  objF.setDia(25);
                  objF.setMes(8);
                  objF.setAño(2022);
                  System.out.println(objF.FormaF());
                  break;
              case 4:
                  break;
              default:
                  System.out.println("opcion no valida pai");
          }

          }while ((op>= 5));

    }
}