class Cliente {
    #nombre;
    #cif;
    #direccion

    constructor(nombre, cif, direccion){
        this.setNombre(nombre);
        this.setCif(cif);
        this.setDireccion(direccion);
    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getCif(){
        return this.#cif;
    }

    setCif(cif){
        this.#cif = cif;
    }

    getDireccion(){
        return this.#direccion;
    }

    setDireccion(direccion){
        this.#direccion = direccion;
    }


    mostrarCliente(){
        return ` Nombre: ${this.#nombre}, CIF: ${this.#cif}, Dirección: ${this.#direccion?.mostrarDireccion()}`;
    }
}