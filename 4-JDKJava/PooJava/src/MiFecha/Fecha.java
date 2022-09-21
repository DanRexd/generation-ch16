package MiFecha;

public class Fecha {

    private int dia;
    private int mes;
    private int año;

    //constructor


    public Fecha(int dia, int mes, int año) {
        this.dia = dia;
        this.mes = mes;
        this.año = año;
    }

    //get


    public int getDia() {
        return dia;
    }

    public int getMes() {
        return mes;
    }

    public int getAño() {
        return año;
    }

    //set


    public void setDia(int dia) {
        this.dia = dia;
    }

    public void setMes(int mes) {
        this.mes = mes;
    }

    public void setAño(int año) {
        this.año = año;
    }

    //formaF() String

    public String FormaF(){
        return getDia() + "/" + getMes() + "/" + getAño() ;
    }


}
