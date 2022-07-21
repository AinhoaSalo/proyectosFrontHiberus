// Una clase encapsulada, tiene todas sus propiedades declaradas como privadas y se accede a ellas a traves de metodos get y set publicos.

// Cuando una propiedad es privada, solo se puede acceder a ella desde la clase donde ha sido declarada

class FechaEncapsulada{
    // Propiedades privadas
    #dia;
    #mes;
    #anyo;

    // Constructor
    constructor(dia, mes, anyo){
        this.setDia(dia);
        this.setMes(mes);
        this.setAnyo(anyo);
    }

    // Metodos de acceso
    getDia(){
        return this.#dia;
    }

    setDia(dia){
        if (dia < 1 || dia >= 30) {
            alert('Día no valido');
        } else {
            this.#dia = dia;
        }
    }

    getMes(){
        return this.#mes;
    }

    setMes(mes){
        if (mes < 1 || mes > 12) {
            alert('Mes no valido');
        } else {
            this.#mes = mes;
        }
    }

    getAnyo(){
        return this.#anyo;
    }

    setAnyo(anyo){
        if (anyo < 2022) {
            alert('Año no valido');
        } else {
            this.#anyo = anyo;
        }
    }

    //Mostrar
    mostrarFecha(){
        // 21/07/2022
        return this.#dia + '/' + this.#mes + '/' + this.#anyo;
    }
}