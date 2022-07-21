class Direccion{
    #calle;
    #numero;
    #poblacion;

    constructor(calle, numero, poblacion){
        this.setCalle(calle);
        this.setNumero(numero);
        this.setPoblacion(poblacion);
    }

    getCalle(){
        return this.#calle;
    }

    setCalle(calle){
        if (calle.length < 4 || calle.length > 20) {
            alert('Calle debe tener entre 4 y 20 caracteres')
        }else{
            this.#calle = calle;
        }
        
    }

    getNumero(){
        return this.#numero;
    }

    setNumero(numero){
        this.#numero = numero;
    }

    getPoblacion(){
        return this.#poblacion;
    }

    setPoblacion(poblacion){
        this.#poblacion = poblacion;
    }


    mostrarDireccion(){
        return `${this.#calle}, ${this.#numero} (${this.#poblacion})`;
    }
}