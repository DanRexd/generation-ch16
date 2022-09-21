package MiFecha;

public class EjemploFecha {
    public static void main(String[] args) {


        Fecha objF = new Fecha(25,8,2022);
        objF.setDia(25);
        objF.setMes(8);
        objF.setAño(2022);
        System.out.println(objF.FormaF());
    }
}
