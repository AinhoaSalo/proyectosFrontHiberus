// Crear clase Dirección
//propiedades: calle, numero, poblacion

class Direccion{
    // Propiedades
    calle;
    numero;
    poblacion;

    // Constructores
    constructor(calle, numero, poblacion){
        this.calle = calle;
        this.numero = numero;
        this.poblacion = poblacion;
    }

    //Metodos
    mostrarInfo(){
        return `Vivo en la ${this.calle} con numero ${this.numero} en la poblacion ${this.poblacion}`
    }
}

